# LendLog (Web PWA) - Full Pack

This is a responsive web app (PWA-ready) for tracking borrowed items and informal credit.

## Features included
- Add transactions (person, amount, type, date)
- Search and filter
- Summary (Lent, Owed, Net)
- CSV export
- localStorage persistence
- Simple service worker for offline caching
- TailwindCSS for styling

## Run locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

## Notes
- This project uses Tailwind; if you want to customize, run `npx tailwindcss init` to generate a config file or edit the included `tailwind.config.cjs`.
- The service worker is a simple cache wrapper — for production consider using Workbox or Vite PWA plugin.
# LendLog
