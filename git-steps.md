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
- On GitHub, create a new repository or use your existing `aliyeff07/Project-3` repository.
- If you want GitHub Pages to serve from `aliyeff07.github.io`, name the repo `aliyeff07.github.io`. Otherwise, use a project repository like `aliyeff07/Project-3`.

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
- Save. For this repository, your site will be published at: `https://aliyeff07.github.io/Project-3` when Pages is enabled for branch `main` (root).

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
