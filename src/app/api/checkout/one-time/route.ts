import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/client';
import { auth } from '@/auth';

export async function POST(req: Request) {
  try {
    const session = await auth();
    const { amount, description = 'Membership Dues Payment', eventId, email } = await req.json();

    const userEmail = session?.user?.email || email;
    const userId = session?.user?.id;

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Valid payment amount required' }, { status: 400 });
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: userEmail || undefined,
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: description,
              description: 'Igbo Community Canberra Official Payment',
            },
            unit_amount: Math.round(Number(amount) * 100),
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId: userId || '',
        eventId: eventId || '',
        description,
      },
      success_url: `${process.env.NEXTAUTH_URL || 'https://igbo-community-portal-2026.netlify.app'}/en/dashboard/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL || 'https://igbo-community-portal-2026.netlify.app'}/en/dashboard/billing`,
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error: any) {
    console.error('Stripe One-Time Checkout error:', error);
    return NextResponse.json({ error: error.message || 'Failed to create checkout session' }, { status: 500 });
  }
}
