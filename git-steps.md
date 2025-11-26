# Git Commit & Deploy Steps

Follow these commands in PowerShell in the project root (c:\Users\Emin\Desktop\Webpage):

## 1) Initialize and commit

```powershell
# Initialize a repository locally
git init
# (Optional) add a README
git add README.md
# Add everything
git add .
# Commit
git commit -m "Initial commit: add boilerplate site structure and components"
```

## 2) Create a GitHub repository (if you haven't):
- On GitHub, create a new repository named `your-username.github.io` (for personal page) or `portfolio-site` (for project page).
- If you create `your-username.github.io`, the repo name must match your GitHub username exactly to use personal site.

## 3) Push changes to GitHub

```powershell
# Replace <REPO_URL> with the repo's HTTPS or SSH URL
git remote add origin <REPO_URL>
git branch -M main
git push -u origin main
```

## 4) Enable GitHub Pages
- Go to your repository on GitHub > Settings > Pages
- Choose branch: `main` and folder: `/ (root)` or `/docs` accordingly
- Save. Your site will be published at: `https://your-username.github.io/` or `https://your-username.github.io/your-repo` depending on repo name

## 5) Common development workflow
```powershell
# Make changes, then
git add .
git commit -m "Refactor: improve nav and add footer component"
git push origin main
```

Troubleshooting
- If the site doesn't show after enabling GitHub Pages, wait a few minutes and clear your browser cache.
- Make sure index.html is in the repo root (not in a sub-folder) if you serve from root.

Note: If you want to serve a repo from a folder like `/docs`, move or copy files into that folder and set the source to `docs` in the Pages settings.
