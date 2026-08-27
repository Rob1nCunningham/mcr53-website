MCR53 website — handover notes
===============================

WHAT'S HERE
  index.html      The whole site — one scrolling page (Hero, Services,
                  How We Work, About, Values, Contact), nav links
                  jump to sections by anchor (#services, #about, #contact)
  css/styles.css  All styling
  js/nav.js       Mobile menu toggle
  images/         Logo

This is a plain static site — no build step, no framework. Open
index.html directly in a browser to preview it, or see "Going live"
below to publish it properly.

BEFORE YOU LAUNCH — replace these placeholders
  Search index.html for square brackets [ ] and fill in:
    - [hello@mcr53.co.uk]                  → your real email
    - [Add phone number]                   → Contact section
    - [Add LinkedIn URL]                   → footer + Contact section
    - [Confirm base location]              → Contact section
    - [Company registered in England...]   → footer, or delete the line
    - [Add 2–3 sentences on your background...] → About section
    - [Add founder photo]                  → About section (replace the
      dashed placeholder box with a real <img>)

THE CONTACT FORM ISN'T WIRED UP
  The Contact section has a real-looking form, but plain HTML/CSS/JS
  can't send email on its own — it needs a backend. Easiest options:
    - Netlify Forms (if you host on Netlify — add `data-netlify="true"`
      to the <form> tag and it just works, no code)
    - Formspree (formspree.io) — free tier, works on any host, you
      just point the form's `action` at the endpoint they give you
  Until one of these is wired up, submitting the form does nothing.

FONTS
  Space Grotesk and Manrope load from Google Fonts over the internet.
  They'll render correctly once this is live on a normal web host.
