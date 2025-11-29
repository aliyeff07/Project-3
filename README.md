# Personal Portfolio — SITE 1101

This is a starter personal portfolio website created for the SITE 1101 course.

Structure

```
Webpage/
  index.html
  about.html
  projects.html
  README.md
  assets/
    css/style.css
    js/script.js
    components/nav.html
    components/footer.html
    images/
      profile.svg
      project1-screenshot.svg
      github.svg
      codecademy.svg
```

Notes and tips
- Open the site in a local development server (e.g., VS Code Live Server) to test component fetch and to mirror production behavior.
- Replace placeholder images and text with your real content.
- Keep the `assets/components/` folder for common partials you can reuse on other pages.

About empty areas and responsive layout
- If you see empty space (white margins) on the sides of the page on desktop, this is intentional: the site centers content inside a maximum width so it remains readable on large screens.
- On narrow screens (phones / small tablets), the layout changes: grid columns collapse to a single column, and horizontal whitespace should disappear. Vertical whitespace (space between sections/cards) remains to keep content legible.
- If you want content to take the full width on mobile, you can adjust `--max-width` in `assets/css/style.css` or change the `container` width settings.

Git & Deploy
- See the git-steps.md for instructions on how to commit and deploy to GitHub Pages.
