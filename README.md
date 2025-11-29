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

Images & mobile behavior
- If an image does not show on mobile, first check the path is correct and the file exists under `assets/images/`.
- Large images can cause download slowness or layout issues on mobile. Resize and compress images for better performance.
- Use `srcset` + `sizes` on your image tag to serve smaller versions on narrow screens. Example:

```html
<img src="assets/images/project1-hardware.jpg"
  srcset="assets/images/project1-hardware-640.jpg 640w, assets/images/project1-hardware-1024.jpg 1024w, assets/images/project1-hardware.jpg 1600w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 33vw"
  loading="lazy"
  alt="Project screenshot" class="project-screenshot">
```

- Create resized images with ImageMagick or an online tool. Example (ImageMagick):

```powershell
magick convert assets/images/project1-hardware.svg.jpg -resize 1024 assets/images/project1-hardware-1024.jpg
magick convert assets/images/project1-hardware.svg.jpg -resize 640 assets/images/project1-hardware-640.jpg
```

- Compress images using Squoosh (https://squoosh.app) or convert to WebP for better compression.
