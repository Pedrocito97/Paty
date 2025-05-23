import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2022-11-15'
});

const PRICE_IDS = {
  basic: process.env.STRIPE_BASIC_PRICE_ID,
  premium: process.env.STRIPE_PREMIUM_PRICE_ID,
  annual: process.env.STRIPE_ANNUAL_PRICE_ID
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
      success_url: process.env.SUCCESS_URL ||
        `${process.env.CLIENT_BASE_URL || 'http://localhost:5173'}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.CANCEL_URL ||
        `${process.env.CLIENT_BASE_URL || 'http://localhost:5173'}/subscribe`
    });
    res.json({ id: session.id });
  } catch (err) {
    console.error('Stripe error', err);
    res.status(500).json({ error: 'Stripe error' });
  }
});

app.post('/api/upload-video', upload.single('file'), async (req, res) => {
  const { title, description } = req.body;
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const uploadResult = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
      { resource_type: 'video' }
    );
    res.json({ url: uploadResult.secure_url, title, description });
  } catch (err) {
    console.error('Upload error', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
