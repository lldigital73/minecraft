<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1WT88grt4IaRttX195V2rRLpQX6gqOzQR

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Environment variables (Vercel-ready)

Add these in Vercel (Project Settings → Environment Variables) or in a local `.env.local` file:

- `VITE_GEMINI_API_KEY` – Gemini API key for news/lore generation (optional, falls back to static copy if missing)
- `VITE_SERVER_ADDRESS` – Minecraft server host:port (default: `camelot.vagonbrei.eu:25053`)
- `VITE_HERO_IMAGE_URL` – URL to a Minecraft wallpaper for the hero background
- `VITE_HERO_VIDEO_URL` – Optional looped video URL for the hero background (muted/autoplay)
- `VITE_PTERO_URL` – Optional Pterodactyl panel base URL (e.g. `https://panel.example.com`)
- `VITE_PTERO_API_KEY` – Optional Pterodactyl API token (client scope)
- `VITE_PTERO_SERVER_ID` – Optional Pterodactyl server ID

> Note: Vite bundles `VITE_` variables into the client. Keep secrets server-side if you need to hide them.

## Deploying to Vercel

1. Connect the repository in Vercel.
2. Set the environment variables above in Vercel.
3. Framework preset: **Vite**, Build command: `npm run build`, Output directory: `dist`.
4. Deploy. Static content will be served from `dist`; optional API usage relies on the provided env vars.
