// Theme Management
(function () {
  const STORAGE_KEY = 'carloslme-theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      const isDark = theme === 'dark';
      toggleBtn.innerHTML = isDark ? '&#9728; Light' : '&#9790; Dark';
      toggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      toggleBtn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  // Set theme immediately to avoid flash of unstyled content
  const currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getPreferredTheme());

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const active = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = active === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, nextTheme);
        applyTheme(nextTheme);
      });
    }

    // Copy Email Buttons
    document.querySelectorAll('[data-copy-email]').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = btn.getAttribute('data-copy-email') || 'carlos.mejia@tum.de';
        try {
          await navigator.clipboard.writeText(email);
          const originalContent = btn.innerHTML;
          btn.innerHTML = 'Copied! &#10003;';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.classList.remove('copied');
          }, 2000);
        } catch (err) {
          // Fallback if clipboard API fails
          window.location.href = `mailto:${email}`;
        }
      });
    });

    // Project Tag Filter (on /projects/)
    const projectFilterBtns = document.querySelectorAll('.project-filter-btn, .filter-btn:not(.timeline-filter-btn)');
    const projectCards = document.querySelectorAll('.project-card');

    if (projectFilterBtns.length > 0 && projectCards.length > 0) {
      projectFilterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          projectFilterBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');

          const filter = (btn.getAttribute('data-filter') || 'all').toLowerCase();

          projectCards.forEach((card) => {
            if (filter === 'all') {
              card.classList.remove('is-hidden');
            } else {
              const tags = (card.getAttribute('data-tags') || '').toLowerCase().split(/[\s,]+/);
              if (tags.includes(filter)) {
                card.classList.remove('is-hidden');
              } else {
                card.classList.add('is-hidden');
              }
            }
          });
        });
      });
    }

    // Interactive Career Timeline Filter
    const timelineFilterBtns = document.querySelectorAll('.timeline-filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineFilterBtns.length > 0 && timelineItems.length > 0) {
      timelineFilterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          timelineFilterBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');

          const filter = (btn.getAttribute('data-timeline-filter') || 'all').toLowerCase();

          timelineItems.forEach((item) => {
            if (filter === 'all') {
              item.classList.remove('is-hidden');
            } else {
              const category = (item.getAttribute('data-category') || '').toLowerCase();
              if (category === filter) {
                item.classList.remove('is-hidden');
              } else {
                item.classList.add('is-hidden');
              }
            }
          });
        });
      });
    }

    // Interactive Cross-Linked Skill Matrix
    const skillPills = document.querySelectorAll('.interactive-skill-pill, .skill-tag-clickable, [data-skill]');
    const skillAwareElements = document.querySelectorAll('[data-skills]');
    const skillBanner = document.getElementById('skill-filter-banner');
    const skillBannerText = document.getElementById('skill-banner-text');
    const clearSkillBtn = document.getElementById('clear-skill-filter');

    let activeSkill = null;

    function clearSkillFilter() {
      activeSkill = null;
      skillPills.forEach((p) => p.classList.remove('is-active', 'highlight-skill-pill-match'));
      skillAwareElements.forEach((el) => el.classList.remove('highlight-match'));
      if (skillBanner) skillBanner.classList.remove('show');
    }

    function applySkillFilter(skillName) {
      if (!skillName) return clearSkillFilter();

      const normalized = skillName.trim().toLowerCase().replace(/[^a-z0-9]/g, '');

      if (activeSkill === normalized) {
        return clearSkillFilter();
      }

      activeSkill = normalized;

      skillPills.forEach((p) => {
        const raw = p.getAttribute('data-skill') || p.textContent;
        const pillNormalized = raw.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
        if (pillNormalized === normalized) {
          p.classList.add('is-active');
        } else {
          p.classList.remove('is-active');
        }
      });

      let matchCount = 0;
      let firstMatchEl = null;

      skillAwareElements.forEach((el) => {
        const rawSkills = el.getAttribute('data-skills') || '';
        const itemSkills = rawSkills.toLowerCase().split(/[\s,]+/).map((s) => s.replace(/[^a-z0-9]/g, ''));
        if (itemSkills.some((s) => s && (s === normalized || s.includes(normalized) || normalized.includes(s)))) {
          el.classList.add('highlight-match');
          matchCount++;
          if (!firstMatchEl) firstMatchEl = el;
        } else {
          el.classList.remove('highlight-match');
        }
      });

      if (skillBanner && skillBannerText) {
        skillBannerText.innerHTML = `Showing <strong>${matchCount}</strong> career milestones &amp; deliverables matching <strong>${skillName}</strong>`;
        skillBanner.classList.add('show');
      }

      if (firstMatchEl) {
        firstMatchEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    skillPills.forEach((pill) => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const skill = pill.getAttribute('data-skill') || pill.textContent;
        applySkillFilter(skill);
      });
    });

    if (clearSkillBtn) {
      clearSkillBtn.addEventListener('click', (e) => {
        e.preventDefault();
        clearSkillFilter();
      });
    }
  });
})();
