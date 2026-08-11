# Repository Guide for Future Agents

This repository hosts the personal website for Carlos Lopez Mejia, published via GitHub Pages from the repository root.

## Purpose

The site is a lightweight static site that serves:
- the homepage at `/`
- the full CV page at `/cv/`
- the CV PDF download at `/assets/pdf/Carlos_Lopez_CV_Master.pdf`

## Main Files and Folders

- `index.html` — homepage content and summary landing page
- `cv/index.html` — full CV page rendered as HTML
- `assets/css/cv.css` — styling for the homepage and CV page
- `assets/pdf/Carlos_Lopez_CV_Master.pdf` — downloadable CV PDF
- `README.md` — repository-facing summary of the profile and current CV content
- `_config.yml` — Jekyll config for GitHub Pages compatibility
- `CNAME` — custom domain file for `carloslme.com`
- `tutorials/` and `tutorials.html` — existing tutorial-related content; avoid changing unless explicitly requested
- `ide/` — older site content and templates; leave untouched unless the task is about that section

## Development Workflow

### 1. Edit content

Most visible content changes should be made in:
- `index.html` for the homepage
- `cv/index.html` for the full CV page
- `assets/css/cv.css` for styling
- `README.md` for repository-facing summary updates

### 2. Preview locally

You can preview the site locally with a simple static server:

```bash
python3 -m http.server 8000
```

Then open:
- http://127.0.0.1:8000/
- http://127.0.0.1:8000/cv/

### 3. Deploy to GitHub Pages

This repository is published through GitHub Pages from the repository root on the `main` branch.

Deployment steps:
1. Make the required edits.
2. Review the files that changed.
3. Commit the changes.
4. Push to `main`.

Example:

```bash
git add <files>
git commit -m "Describe change"
git push origin main
```

### 4. Verify after deploy

After pushing, confirm that the public URLs resolve:
- `https://carloslme.github.io/`
- `https://carloslme.github.io/cv/`
- `https://carloslme.github.io/assets/pdf/Carlos_Lopez_CV_Master.pdf`

## Important Notes

- GitHub Pages serves the repository content from the root of `main`, not from `README.md`.
- The homepage is rendered from `index.html`, not from the Markdown README.
- The PDF download asset must remain under `assets/pdf/` so the link works on the deployed site.
- Keep the custom domain file `CNAME` intact unless the domain is intentionally changing.

## Safe Change Guidelines

- Prefer updating existing HTML/CSS files over introducing new frameworks.
- Avoid unrelated content changes outside the requested scope.
- Keep the site lightweight and static.
- Preserve the custom domain and page URLs unless explicitly asked to change them.

## Quick Reference

If a future agent needs to update the CV quickly:
- edit the homepage in `index.html`
- edit the full CV in `cv/index.html`
- update the PDF asset if a new version is provided
- ensure the PDF remains in `assets/pdf/`
