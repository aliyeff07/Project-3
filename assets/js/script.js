/* script.js - Handles component injection and mobile nav toggle
   This file also contains small accessibility improvements
*/

// Utility: Load raw HTML component and inject into placeholder
async function loadComponent(path, placeholderId) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}`);
    const html = await res.text();
    document.getElementById(placeholderId).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

// Load navigation & footer components on each page
loadComponent('assets/components/nav.html', 'navbar-placeholder')
  .then(() => initializeNav());
loadComponent('assets/components/footer.html', 'footer-placeholder')
  .then(() => initializeFooter());

// Setup mobile nav interactions once injected
function initializeNav() {
  const toggle = document.getElementById('nav-toggle');
  if (!toggle) return;
  const navLinks = document.getElementById('nav-links');

  function closeOnClickOutside(e) {
    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
      navLinks.classList.remove('show');
    }
  }

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('show');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu on link click (mobile UX)
  navLinks.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      navLinks.classList.remove('show');
    }
  })

  document.addEventListener('click', closeOnClickOutside);
}

function initializeFooter() {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}

// Accessibility: add keyboard shortcut to focus nav
window.addEventListener('keydown', (e) => {
  if (e.altKey && e.key === 'm') { // Alt+M to focus menu toggle
    const toggle = document.getElementById('nav-toggle');
    if (toggle) toggle.focus();
  }
});
