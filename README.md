# Waves and Mist — Eco Resorts website

A single-page Next.js site (Home + About, on one scrolling page) built for **Waves and Mist Eco Resorts**:
hero with an animated misty-mountain/wave illustration, an About Us section, a showcase grid of your
resorts and homestays, and a WhatsApp-based booking flow (no booking forms — every "Reserve" button
opens a pre-filled WhatsApp chat).

## 1. Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## 2. The three things you'll want to edit first

All of this lives in **`src/lib/site-config.ts`** — you don't need to touch any component files.

- **`WHATSAPP_NUMBER`** — currently a placeholder (`919999999999`). Replace it with your real WhatsApp
  business number, in international format, digits only (country code + number, no `+`, spaces, or dashes).
- **`PROPERTIES`** — the 6 sample resorts/homestays. Edit the `name`, `location`, `description`, `price`,
  and `image` for each, or add/remove entries. `image` currently points to placeholder Unsplash photos —
  swap in real photos of your properties (see below).
- **`SITE`** — the headline, subheadline, and About Us story text.

## 3. Using your real logo and photos

I wasn't able to pull the logo file you attached into this project directly. To drop it in:

1. Save your logo image as `public/images/logo.png` (or `.jpg`/`.svg`).
2. In `src/components/Navbar.tsx`, replace the `<LogoMark />` SVG with:
   ```tsx
   import Image from "next/image";
   // ...
   <Image src="/images/logo.png" alt="Waves and Mist" width={36} height={36} />
   ```

For property/about photos: put your images in `public/images/`, then update the `image` fields in
`site-config.ts` (or the `About.tsx` image) to `/images/your-photo.jpg` instead of the Unsplash URLs.

## 4. Deploying

This is a standard Next.js app — the easiest path is [Vercel](https://vercel.com):
push this folder to a GitHub repo, import it in Vercel, and it deploys automatically. It also runs fine
on any Node hosting with `npm run build && npm start`.

## Structure

```
src/
  app/
    layout.tsx      — fonts, metadata
    page.tsx         — assembles the one-page layout
    globals.css       — color palette, type, and the animation keyframes
  components/
    Navbar.tsx        — sticky nav, solid on scroll
    Hero.tsx          — animated hero (mountains, mist, birds, wave line)
    About.tsx         — About Us section
    Showcase.tsx       — resorts & homestays grid
    PropertyCard.tsx   — single listing card (image, price, WhatsApp "Reserve")
    Booking.tsx         — full-width WhatsApp booking band
    Footer.tsx           — footer
    WaveDivider.tsx      — the looping animated wave line (used in Hero + Booking)
    WhatsAppButton.tsx    — builds the wa.me link with a pre-filled message
  lib/
    site-config.ts   — all editable content lives here
```

## Notes on the design

- Palette and type were drawn from your logo: soft misty blue/green tones, a serif wordmark (Cormorant
  Garamond) with wide letter-spacing for headlines, paired with a clean geometric sans (Jost) for body text.
- The signature motion element is the looping wave line (`WaveDivider.tsx`) that appears under the hero
  and above the booking band — it's a duplicated SVG path animated with a seamless `translateX(-50%)` loop,
  echoing the wave in your logo.
- All animation respects `prefers-reduced-motion` (see `globals.css`).
