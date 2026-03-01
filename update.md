# How to Update Your Website (Future Changes)

## Step 1 — Edit Files Locally
Go to your project folder:
`C:\Data\Antigravity\eclass`

Edit the files you want to change:
- `index.html`
- `style.css`
- Any image
- Any JS file

Save your changes in your editor.

## Step 2 — Commit Changes
Open your PowerShell (in the `C:\Data\Antigravity\eclass` directory) and run:

```bash
git add .
git commit -m "Updated homepage content"
```

*(Note: Change the message "Updated homepage content" to something that describes your actual changes, e.g., "Added a new tutor profile").*

## Step 3 — Push to GitHub
Finally, push your changes live to your repository:

```bash
git push
```

**That’s it.** GitHub Pages will automatically rebuild the site, and your changes will be live to the world within a few seconds!
