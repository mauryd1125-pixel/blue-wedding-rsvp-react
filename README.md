# Blue Wedding RSVP React Frontend

A premium digital wedding RSVP invitation frontend built with React, Vite, Tailwind CSS, Poppins, Framer Motion, Lucide icons, and QR code support.

## Design direction

The project follows the soft blue physical invitation reference:

- Powder blue envelopes
- Satin ribbon blue
- White/ivory invitation cards
- Champagne-gold floral lines
- Clean Poppins typography
- Rounded cards, soft shadows, and neat spacing

## Features included

- Full-screen hero section
- Countdown timer for July 18, 2026 at 7:30 PM
- Invitation details and event schedule
- RSVP confirmation/cancel state
- QR code generation and download
- Fullscreen QR modal
- Guest information card
- Gift preference selector
- Drinks preference selector
- Guestbook message form
- WhatsApp assistant link
- Interactions/progress section
- Gallery/invitation preview section
- Footer
- Responsive design

## How to run

```bash
npm install
npm run dev
```

## How to edit wedding details

Open:

```bash
src/data/invitationData.js
```

From there you can edit:

- Couple names
- Guest name
- Event date and time
- Locations
- WhatsApp link
- QR code URL
- Guest code
- Drinks list
- Statistics

## Assets

The previous editable SVG vector files are included in:

```bash
src/assets/svg/
```

The blue invitation color reference image is included in:

```bash
src/assets/images/blue-envelope-reference.png
```

## Notes

The QR code uses a placeholder URL:

```bash
https://yourdomain.com/invitation/celia-christian/rein
```

Replace it with the real invitation URL inside `src/data/invitationData.js`.
