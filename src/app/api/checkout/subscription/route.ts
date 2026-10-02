import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/client';
import { auth } from '@/auth';
import { prisma } from '@/lib/db/prisma';

export async function POST(req: Request) {
  try {
    const session = await auth();
    const body = await req.json().catch(() => ({}));
    const { planType = 'family', userId, email } = body;

    const userEmail = session?.user?.email || email;
    const targetUserId = session?.user?.id || userId;

    if (!userEmail) {
      return NextResponse.json({ error: 'Authentication or email required' }, { status: 401 });
    }

    const isFamily = planType === 'family';
    const amountInCents = isFamily ? 25000 : 15000; // $250/yr family or $150/yr single
    const interval = 'year';

    // Find or create customer in Stripe
    const customers = await stripe.customers.list({ email: userEmail, limit: 1 });
    let customerId = customers.data[0]?.id;

    if (!customerId) {
      const newCustomer = await stripe.customers.create({
        email: userEmail,
        name: session?.user?.name || undefined,
        metadata: {
          userId: targetUserId || '',
        },
      });
      customerId = newCustomer.id;
    }

    // Create checkout session for recurring subscription
    const checkoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: `Igbo Community Canberra — ${isFamily ? 'Family' : 'Single'} Membership Dues`,
              description: `Annual community membership dues (${isFamily ? '$250 AUD/year — all household members' : '$150 AUD/year — individual'})`,
            },
            unit_amount: amountInCents,
            recurring: {
              interval: interval,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId: targetUserId || '',
        planType,
      },
      success_url: `${process.env.NEXTAUTH_URL || 'https://igbo-community-portal-2026.netlify.app'}/en/dashboard/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL || 'https://igbo-community-portal-2026.netlify.app'}/en/dashboard/billing`,
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error: any) {
    console.error('Stripe Subscription Checkout error:', error);
    return NextResponse.json({ error: error.message || 'Failed to create subscription checkout' }, { status: 500 });
  }
}
