# Pendo KE - Location-Based Dating for Kenya

Connect with people nearby across Kenya. Features location-based matching by county and GPS distance, profiles, swipes, matches, and chat.

## Tech Stack
- **Frontend**: Next.js 14 (App Router) + Tailwind CSS
- **Backend / Auth / DB / Storage / Realtime**: Supabase (PostgreSQL + PostGIS)
- **Hosting**: Netlify + GitHub

## Features (MVP)
- User registration & login (Supabase Auth)
- Profile setup with photos, bio, age, county, interests, religion, tribe (optional)
- GPS location tracking & nearby matching
- Swipe / Like / Match
- Real-time chat (Supabase Realtime)
- Photo uploads (Supabase Storage)
- Safety / Report system (basic)
- Filters: distance, age, county, interests

## Kenya Localization
- 47 counties filter
- Sheng / local vibes in UI (can expand)
- Ready for M-Pesa (add Stripe or Flutterwave later for premium)

## Setup

1. Clone the repo
   ```bash
   git clone https://github.com/gachiesamuel14/pendo-ke.git
   cd pendo-ke
   npm install
   ```

2. Create a free Supabase project at [supabase.com](https://supabase.com)

3. Enable PostGIS extension in Supabase SQL Editor:
   ```sql
   CREATE EXTENSION IF NOT EXISTS postgis;
   ```

4. Run the SQL schema from `supabase/schema.sql` in the Supabase SQL Editor.

5. Copy `.env.example` to `.env.local` and fill in your Supabase URL and anon key.

6. Run locally:
   ```bash
   npm run dev
   ```

7. Deploy to Netlify:
   - Connect this GitHub repo to a new Netlify site
   - Set the same env vars in Netlify dashboard
   - Build command: `npm run build`
   - Publish directory: `.next` (or let Netlify plugin handle)

## Next Steps
- Implement full swipe UI with GSAP or react-tinder-card
- Add M-Pesa payments for premium (boosts, unlimited likes)
- Notifications via Supabase or OneSignal
- Student / Professional / Church modes
- Safety features: report, block, verification

Built with love for Kenya. Karibu! 🇰🇪
