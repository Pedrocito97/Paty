import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

const app = express();
app.use(cors());
app.use(express.json());

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2022-11-15'
});

const PRICE_IDS = {
  basic: 'price_basic', // TODO: replace with real Stripe price ID
  premium: 'price_premium',
  annual: 'price_annual'
};

app.post('/create-checkout-session', async (req, res) => {
  const { plan } = req.body;
  const priceId = PRICE_IDS[plan];
  if (!priceId) {
    return res.status(400).json({ error: 'Invalid plan' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        { price: priceId, quantity: 1 }
      ],
      success_url: 'http://localhost:5173/dashboard?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:5173/subscribe'
    });
    res.json({ id: session.id });
  } catch (err) {
    console.error('Stripe error', err);
    res.status(500).json({ error: 'Stripe error' });
  }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
