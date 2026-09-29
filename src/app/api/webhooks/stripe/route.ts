import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/client';
import { prisma } from '@/lib/db/prisma';

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    // If webhook secret isn't configured in test/dev, acknowledge gracefully
    console.warn('Webhook secret or signature missing');
    return NextResponse.json({ received: true, mode: 'unverified' });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as any;
        const userId = session.metadata?.userId;
        const description = session.metadata?.description || 'Dues Payment';
        const amountTotal = (session.amount_total || 0) / 100;

        if (userId) {
          // Record payment in DB
          await prisma.payment.create({
            data: {
              userId,
              amount: amountTotal,
              paymentMethod: 'stripe',
              stripePaymentIntentId: session.payment_intent || session.id,
              status: 'completed',
              description,
            },
          }).catch(err => console.error('Error saving payment record:', err));

          // If subscription, update dues subscription
          if (session.subscription) {
            await prisma.duesSubscription.updateMany({
              where: { userId },
              data: {
                stripeCustomerId: session.customer,
                stripeSubscriptionId: session.subscription,
                status: 'active',
              },
            }).catch(err => console.error('Error updating dues subscription:', err));
          }
        }
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as any;
        const customerId = invoice.customer;
        const subscriptionId = invoice.subscription;
        const amountPaid = (invoice.amount_paid || 0) / 100;

        if (subscriptionId) {
          const sub = await prisma.duesSubscription.findFirst({
            where: { stripeSubscriptionId: subscriptionId },
          });

          if (sub) {
            await prisma.payment.create({
              data: {
                householdId: sub.householdId,
                userId: sub.userId,
                amount: amountPaid,
                paymentMethod: 'stripe',
                stripePaymentIntentId: invoice.payment_intent,
                status: 'completed',
                description: `Recurring Membership Dues (${sub.planType})`,
              },
            });

            await prisma.duesSubscription.update({
              where: { id: sub.id },
              data: {
                status: 'active',
                nextBillingDate: invoice.lines?.data[0]?.period?.end
                  ? new Date(invoice.lines.data[0].period.end * 1000)
                  : undefined,
              },
            });
          }
        }
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as any;
        const subscriptionId = invoice.subscription;

        if (subscriptionId) {
          await prisma.duesSubscription.updateMany({
            where: { stripeSubscriptionId: subscriptionId },
            data: { status: 'past_due' },
          });
        }
        break;
      }

      default:
        console.log(`Unhandled Stripe event type: ${event.type}`);
    }
  } catch (dbError) {
    console.error('Database sync error in Stripe webhook:', dbError);
  }

  return NextResponse.json({ received: true });
}
