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

    // Project Tag Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0 && projectCards.length > 0) {
      filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          filterBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');

          const filter = btn.getAttribute('data-filter') || 'all';

          projectCards.forEach((card) => {
            if (filter === 'all') {
              card.classList.remove('is-hidden');
            } else {
              const tags = (card.getAttribute('data-tags') || '').split(' ');
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
  });
})();
