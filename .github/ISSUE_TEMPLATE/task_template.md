---
name: Feature / Bug / Enhancement Task
about: Standardized specification template for Carlos's website development tasks
title: '[feat/fix/refactor]: <Short description>'
labels: ''
assignees: 'carloslme'
---

## 1. User Story
- **As a** [recruiter / hiring manager / engineering peer / Carlos]
- **I want** [clear description of the feature, change, or fix]
- **So that** [expected portfolio value, user outcome, or technical benefit]

---

## 2. Context & Motivation (Why)
- **Background:** [Why is this change needed? What problem does it solve?]
- **Recruiter / User Impact:** [How does this elevate the portfolio narrative, readability, or credibility?]
- **Reference / Inspiration:** [Links to benchmarks like fmind.dev, CV master, or issue discussions]

---

## 3. Scope & Deliverables (What)
- [ ] [Specific deliverable 1: HTML structure / section]
- [ ] [Specific deliverable 2: Styling in `assets/css/cv.css` using theme variables]
- [ ] [Specific deliverable 3: Interactive JS logic in `assets/js/main.js` or dedicated module]
- [ ] [Specific deliverable 4: Mobile & responsive layout]

---

## 4. Technical Specification & Implementation Details
- **Affected Files:**
  - `index.html` / `cv/index.html` / `projects/...`
  - `assets/css/cv.css`
  - `assets/js/...`
- **Data Attributes & State:** [e.g. `data-category`, `data-skills`, theme variables]
- **Design System Tokens:** Must use CSS variables (`--bg`, `--panel`, `--text`, `--muted`, `--border`, `--accent`, `--accent-soft`).

---

## 5. Edge Cases & Constraints (Hard Rules)
- [ ] **No Em Dashes:** Never use the unicode em dash character in prose; use commas, periods, or "and" instead.
- [ ] **Never Mention Jenkins:** Jenkins was not used directly.
- [ ] **Delta Smith Description:** Always described as freelance work with dates Sep 2021 – Sep 2023.
- [ ] **Master's Thesis Accuracy (if applicable):** Generates test scenario tuples (speed/load/post-condition) from UN Reg 152, NOT code. Benchmarks 3 systems: RegulaRAG, LightRAG, HippoRAG 2.
- [ ] **Name Consistency:** "Carlos Mejia" on homepage and header brand; full legal name "Carlos Noe Lopez Mejia" on CV page and official PDF.
- [ ] **Responsive Design:** Must look flawless across mobile (375px+), tablet (768px+), and desktop (1200px+).
- [ ] **Dark & Light Mode:** Must support zero-FOUC theme switching.

---

## 6. Testing & Verification Plan
1. **Local Server Verification:** Test via `python3 -m http.server 8000` or live preview.
2. **Interaction Testing:** Verify all button clicks, filters, modals, and responsive collapses.
3. **Storage Hygiene:** Delete all `.webp` browser recordings and temporary capture frames immediately upon test completion.
4. **Live Verification:** Confirm successful GitHub Pages deployment at `https://carloslme.com/`.

---

## 7. Definition of Done (DoD)
- [ ] Dedicated feature/fix branch created (e.g. `feat/issue-XX-...`).
- [ ] Code implemented with high visual quality and clean semantics.
- [ ] Tested locally across mobile and desktop.
- [ ] Storage cleanup performed (zero heavy recording files left).
- [ ] Merged to `main` with commit message `(Closes #XX)`.
- [ ] Pushed to `origin/main` and verified live on GitHub Pages.
