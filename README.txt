MCR53 website — handover notes
===============================

WHAT'S HERE
  index.html          The whole site — one scrolling page (Hero, Services,
                      How We Work, About, Values, Contact), nav links
                      jump to sections by anchor (#services, #about, #contact)
  css/styles.css      All styling
  js/nav.js           Mobile menu toggle + dark/light mode toggle
  js/contact-form.js  Contact form submission (see below)
  images/             Logo

This is a plain static site — no build step, no framework. Open
index.html directly in a browser to preview it, or see "Going live"
below to publish it properly.

BEFORE YOU LAUNCH — replace these placeholders
  (Email and LinkedIn links were removed until a mailbox and profile
  exist; add them back to the Contact section and footer then.)
  Search index.html for square brackets [ ] and fill in:
    - [Add phone number]                   → Contact section
    - [Confirm base location]              → Contact section
    - [Add 2–3 sentences on your background...] → About section
    - [Add founder photo]                  → About section (replace the
      dashed placeholder box with a real <img>)

THE CONTACT FORM
  Wired up via Formspree (formspree.io) — submissions email straight
  to whichever inbox the Formspree form is registered to. The form
  submits via JS (js/contact-form.js) so visitors see an inline
  "thanks" message rather than leaving the page. To point it at a
  different Formspree form (or a different inbox), update the
  `action` URL on the <form id="contact-form"> tag in index.html.

FONTS
  Space Grotesk and Manrope load from Google Fonts over the internet.
  They'll render correctly once this is live on a normal web host.
