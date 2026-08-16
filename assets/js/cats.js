// Interactive Roaming Cat Companion, Hunter, & Easter Egg Engine
(function () {
  const STORAGE_KEY = 'carloslme-cat-companion';

  // SVG Artwork for Carlos's Two Cats:
  // Cat 1: Flame-Point Siamese (cream fur, flame ears/face, sky blue collar, blue eyes)
  // Cat 2: Seal-Bicolor Ragdoll (fluffy coat, dark mask/face patch, blue eyes, white chest)
  const CAT_AVATARS = {
    flamepoint: `
      <svg class="cat-svg" viewBox="0 0 100 90" width="84" height="76" xmlns="http://www.w3.org/2000/svg">
        <!-- Tail -->
        <path class="cat-tail" d="M22 65 C12 60, 5 45, 12 35 C15 30, 22 34, 19 42 C16 48, 22 55, 30 60 Z" fill="#edd6b8"/>
        <!-- Body (Loaf/Walk) -->
        <ellipse cx="50" cy="62" rx="32" ry="20" fill="#faf5eb" stroke="#e8dcce" stroke-width="1.5"/>
        <!-- Paws with walk classes -->
        <ellipse class="cat-front-paw-left" cx="38" cy="74" rx="8" ry="5" fill="#f5ede0" />
        <ellipse class="cat-front-paw-right" cx="62" cy="74" rx="8" ry="5" fill="#f5ede0" />
        <!-- Head -->
        <circle cx="50" cy="40" r="22" fill="#fffaf2" stroke="#e8dcce" stroke-width="1.5"/>
        <!-- Ears -->
        <polygon points="34,26 24,8 44,19" fill="#f8b179" stroke="#e89e65" stroke-width="1.2"/>
        <polygon points="33,23 28,12 40,19" fill="#ffd1af" />
        <polygon points="66,26 76,8 56,19" fill="#f8b179" stroke="#e89e65" stroke-width="1.2"/>
        <polygon points="67,23 72,12 60,19" fill="#ffd1af" />
        <!-- Flame-Point Face Gradient / Markings -->
        <ellipse cx="50" cy="38" rx="14" ry="12" fill="#fcdbbd" opacity="0.6"/>
        <!-- Eyes -->
        <ellipse class="cat-eye cat-eye-left" cx="42" cy="38" rx="3.8" ry="4.5" fill="#38bdf8"/>
        <circle class="cat-pupil-left" cx="42" cy="38" r="2.2" fill="#0369a1"/>
        <circle cx="43" cy="36.5" r="1.4" fill="#ffffff"/>
        <ellipse class="cat-eye cat-eye-right" cx="58" cy="38" rx="3.8" ry="4.5" fill="#38bdf8"/>
        <circle class="cat-pupil-right" cx="58" cy="38" r="2.2" fill="#0369a1"/>
        <circle cx="59" cy="36.5" r="1.4" fill="#ffffff"/>
        <!-- Nose & Mouth -->
        <polygon points="50,44 47,41 53,41" fill="#f48fb1"/>
        <path d="M47 45 Q50 48 53 45" stroke="#ba7070" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <!-- Whiskers -->
        <line x1="33" y1="43" x2="20" y2="41" stroke="#cbd5e1" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="33" y1="46" x2="19" y2="47" stroke="#cbd5e1" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="67" y1="43" x2="80" y2="41" stroke="#cbd5e1" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="67" y1="46" x2="81" y2="47" stroke="#cbd5e1" stroke-width="1.2" stroke-linecap="round"/>
        <!-- Sky Blue Collar -->
        <path d="M36 53 Q50 60 64 53" stroke="#0ea5e9" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="50" cy="58" r="2.5" fill="#fbbf24"/>
      </svg>
    `,
    ragdoll: `
      <svg class="cat-svg" viewBox="0 0 100 90" width="84" height="76" xmlns="http://www.w3.org/2000/svg">
        <!-- Fluffy Tail -->
        <path class="cat-tail" d="M20 64 C8 58, 2 40, 10 28 C16 20, 24 26, 21 38 C18 48, 25 56, 32 60 Z" fill="#6d5345"/>
        <!-- Fluffy Body -->
        <ellipse cx="50" cy="62" rx="34" ry="21" fill="#fdfbf7" stroke="#d5c8be" stroke-width="1.5"/>
        <path d="M26 56 Q38 48 50 48 Q62 48 74 56 Q66 76 50 78 Q34 76 26 56 Z" fill="#f5ede3"/>
        <!-- Paws with walk classes -->
        <ellipse class="cat-front-paw-left" cx="38" cy="75" rx="9" ry="5.5" fill="#ffffff" stroke="#e8dcce" stroke-width="1"/>
        <ellipse class="cat-front-paw-right" cx="62" cy="75" rx="9" ry="5.5" fill="#ffffff" stroke="#e8dcce" stroke-width="1"/>
        <!-- Head -->
        <circle cx="50" cy="40" r="23" fill="#ffffff" stroke="#d5c8be" stroke-width="1.5"/>
        <!-- Ears -->
        <polygon points="33,26 22,7 44,18" fill="#4a372d" stroke="#33241c" stroke-width="1.2"/>
        <polygon points="32,23 26,11 39,18" fill="#f8c8dc" />
        <polygon points="67,26 78,7 56,18" fill="#4a372d" stroke="#33241c" stroke-width="1.2"/>
        <polygon points="68,23 74,11 61,18" fill="#f8c8dc" />
        <!-- Dark Mask (Bicolor Pattern) -->
        <path d="M31 29 Q42 22 50 31 Q58 22 69 29 Q73 44 63 50 Q50 36 37 50 Q27 44 31 29 Z" fill="#523d32"/>
        <!-- White inverted V blaze -->
        <polygon points="50,30 43,48 57,48" fill="#ffffff"/>
        <!-- Blue Eyes -->
        <ellipse class="cat-eye cat-eye-left" cx="42" cy="38" rx="3.8" ry="4.5" fill="#38bdf8"/>
        <circle class="cat-pupil-left" cx="42" cy="38" r="2.2" fill="#0369a1"/>
        <circle cx="43" cy="36.5" r="1.4" fill="#ffffff"/>
        <ellipse class="cat-eye cat-eye-right" cx="58" cy="38" rx="3.8" ry="4.5" fill="#38bdf8"/>
        <circle class="cat-pupil-right" cx="58" cy="38" r="2.2" fill="#0369a1"/>
        <circle cx="59" cy="36.5" r="1.4" fill="#ffffff"/>
        <!-- Nose & Mouth -->
        <polygon points="50,45 47.5,42 52.5,42" fill="#d9777f"/>
        <path d="M47 46 Q50 49 53 46" stroke="#4a372d" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <!-- Whiskers -->
        <line x1="33" y1="44" x2="18" y2="42" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round"/>
        <line x1="33" y1="47" x2="17" y2="48" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round"/>
        <line x1="67" y1="44" x2="82" y2="42" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round"/>
        <line x1="67" y1="47" x2="83" y2="48" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round"/>
      </svg>
    `
  };

  const CAT_QUOTES = [
    "Purr! Code review status: Approved without comments 🐾",
    "Loafing while you browse Carlos's architecture! 🛋️",
    "I inspect all pull requests before they hit main branch 🚀",
    "100% test scenario coverage achieved (and napped on) ✨",
    "Did someone say Kubernetes or tuna feast? 🐟",
    "Currently running multi-cluster purr orchestration ⚡",
    "Carlos's senior code reviewer on duty! 🐾",
    "Fast cursor detected! Preparing pounce maneuver 🎯",
    "Caught your cursor! Purr mission accomplished 😼"
  ];

  let currentCatType = 'flamepoint';
  let catState = 'idle'; // 'idle', 'walking', 'napping', 'hunting', 'pouncing'
  let posX = 0;
  let posY = 0;
  let targetX = 0;
  let isFacingLeft = false;
  let roamInterval = null;
  let stateTimer = null;

  // Mouse velocity tracker for cursor hunting
  let lastMouseX = 0;
  let lastMouseY = 0;
  let lastMouseTime = 0;
  let mouseSpeed = 0;

  function initCatCompanion() {
    const wrapper = document.createElement('div');
    wrapper.id = 'cat-companion-root';
    wrapper.innerHTML = `
      <!-- Top Scroll Progress Cat Bar -->
      <div id="cat-scroll-bar" class="cat-scroll-bar">
        <div id="cat-scroll-progress" class="cat-scroll-progress">
          <span id="cat-runner" class="cat-runner" title="Scroll runner">🐾</span>
        </div>
      </div>

      <!-- Floating & Roaming Cat Companion -->
      <div id="cat-widget" class="cat-widget" aria-label="Interactive Cat Companion">
        <div id="cat-speech" class="cat-speech">Purr! Welcome to Carlos's site 🐾</div>
        <div id="cat-zzz-box" class="cat-zzz-container" style="display: none;">
          <span class="cat-zzz">z</span>
          <span class="cat-zzz">Z</span>
          <span class="cat-zzz">z</span>
        </div>

        <!-- Controls Floating Above Cat -->
        <div class="cat-widget-controls" id="cat-widget-controls">
          <button id="cat-switch-btn" class="cat-ctrl-btn" title="Switch Cat (Flamepoint / Ragdoll)" aria-label="Switch Cat">&#128257; Switch</button>
          <button id="cat-roam-btn" class="cat-ctrl-btn" title="Walk / Roam Screen" aria-label="Walk Screen">&#128062; Walk</button>
          <button id="cat-modal-btn" class="cat-ctrl-btn" title="Meet the Reviewers" aria-label="Meet Reviewers">&#128247; Meet</button>
          <button id="cat-close-btn" class="cat-ctrl-btn" title="Minimize Cat" aria-label="Minimize Companion">&minus;</button>
        </div>

        <!-- Cat Avatar -->
        <div class="cat-avatar-container" id="cat-avatar-container" title="Click to pet or wake up!">
          <div id="cat-avatar-render"></div>
        </div>

        <!-- Minimized Restore Pill -->
        <button id="cat-restore-pill" class="cat-restore-pill" title="Click to summon cat companion">
          &#128049; <span>Carlos's Cats &#9650;</span>
        </button>
      </div>

      <!-- Modal: Meet the Senior Code Reviewers -->
      <div id="cat-modal" class="cat-modal" role="dialog" aria-modal="true" aria-hidden="true">
        <div class="cat-modal-backdrop" id="cat-modal-backdrop"></div>
        <div class="cat-modal-card">
          <button id="cat-modal-close" class="cat-modal-close" aria-label="Close modal">&times;</button>
          <div class="cat-modal-header">
            <span class="eyebrow" style="color: var(--accent);">Meet the Senior Code Reviewers</span>
            <h2 style="margin: 0.2rem 0 0.5rem;">Carlos's Office Companions</h2>
            <p style="color: var(--muted); margin: 0; font-size: 0.95rem;">
              Behind every high-performance cloud architecture and clean pipeline is a team of vigilant code reviewers.
            </p>
          </div>

          <div class="cat-profile-grid">
            <!-- Flame Point Siamese -->
            <div class="cat-profile-card">
              <div class="cat-photo-frame">
                <img src="/assets/img/cats/cat_flamepoint.png" alt="Flame-Point Siamese Code Reviewer" loading="lazy" />
              </div>
              <h3 style="margin: 0.5rem 0 0.2rem;">Flame-Point Siamese</h3>
              <p class="cat-role">Chief Morale Officer &bull; Senior Deployment Blocker</p>
              <ul class="cat-stats">
                <li><strong>Specialty:</strong> Keyboard Sitting during Git Push</li>
                <li><strong>Review Style:</strong> Rigorous, Vocal, Uncompromising</li>
                <li><strong>Favorite Stack:</strong> Warm Laptops, Blue Collars</li>
              </ul>
            </div>

            <!-- Seal Bicolor Ragdoll -->
            <div class="cat-profile-card">
              <div class="cat-photo-frame">
                <img src="/assets/img/cats/cat_ragdoll.jpg" alt="Seal-Bicolor Ragdoll Code Reviewer" loading="lazy" />
              </div>
              <h3 style="margin: 0.5rem 0 0.2rem;">Seal-Bicolor Ragdoll</h3>
              <p class="cat-role">Lead Distraction Engineer &bull; Cache Invalidator</p>
              <ul class="cat-stats">
                <li><strong>Specialty:</strong> Deep Slumber &amp; Purr Telemetry</li>
                <li><strong>Review Style:</strong> Silent, Fluffy, Highly Observant</li>
                <li><strong>Favorite Stack:</strong> Blue Cushions, High-Memory Treats</li>
              </ul>
            </div>
          </div>

          <div class="cat-modal-footer">
            <img src="/assets/img/cats/both_cats.jpg" alt="Both cats sitting together" class="both-cats-banner" loading="lazy" />
            <p style="font-size: 0.85rem; color: var(--muted); margin: 0.5rem 0 0; text-align: center;">
              &ldquo;No pull request enters production without double-paw verification.&rdquo;
            </p>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(wrapper);

    const isHidden = localStorage.getItem(STORAGE_KEY) === 'hidden';
    const widget = document.getElementById('cat-widget');
    if (isHidden && widget) {
      widget.classList.add('is-minimized');
    }

    renderCatAvatar();
    attachCatEventListeners();
    initScrollTracking();
    initCursorHunter();
    initAutonomousBehavior();
  }

  function renderCatAvatar() {
    const container = document.getElementById('cat-avatar-render');
    if (container) {
      container.innerHTML = CAT_AVATARS[currentCatType];
    }
  }

  function showCatQuote(customText) {
    const bubble = document.getElementById('cat-speech');
    if (!bubble) return;
    const text = customText || CAT_QUOTES[Math.floor(Math.random() * CAT_QUOTES.length)];
    bubble.textContent = text;
    bubble.classList.add('show');
    clearTimeout(bubble._timeout);
    bubble._timeout = setTimeout(() => {
      bubble.classList.remove('show');
    }, 3200);
  }

  function setCatState(newState) {
    const widget = document.getElementById('cat-widget');
    const zzzBox = document.getElementById('cat-zzz-box');
    if (!widget) return;

    widget.classList.remove('is-walking', 'is-hunting', 'is-pouncing', 'is-napping');
    if (zzzBox) zzzBox.style.display = 'none';

    catState = newState;

    if (newState === 'walking') {
      widget.classList.add('is-walking');
    } else if (newState === 'hunting') {
      widget.classList.add('is-hunting');
    } else if (newState === 'pouncing') {
      widget.classList.add('is-pouncing');
    } else if (newState === 'napping') {
      widget.classList.add('is-napping');
      if (zzzBox) zzzBox.style.display = 'block';
    }
  }

  // Autonomous Walk, Loaf, and Nap Behavior
  function initAutonomousBehavior() {
    function pickNextBehavior() {
      const widget = document.getElementById('cat-widget');
      if (!widget || widget.classList.contains('is-minimized') || catState === 'hunting' || catState === 'pouncing') {
        stateTimer = setTimeout(pickNextBehavior, 5000);
        return;
      }

      const behaviors = ['walk', 'nap', 'loaf', 'loaf'];
      const action = behaviors[Math.floor(Math.random() * behaviors.length)];

      if (action === 'walk') {
        startWalking();
      } else if (action === 'nap') {
        setCatState('napping');
        showCatQuote("Taking a quick senior reviewer catnap... Zzz 😴");
        stateTimer = setTimeout(pickNextBehavior, 7000 + Math.random() * 5000);
      } else {
        setCatState('idle');
        stateTimer = setTimeout(pickNextBehavior, 4000 + Math.random() * 4000);
      }
    }

    stateTimer = setTimeout(pickNextBehavior, 6000);
  }

  function startWalking() {
    const widget = document.getElementById('cat-widget');
    if (!widget) return;

    setCatState('walking');
    widget.classList.add('is-roaming');

    // Choose random destination on screen bottom
    const margin = 80;
    const maxX = Math.max(100, window.innerWidth - margin);
    const destinationX = Math.floor(Math.random() * (maxX - margin)) + margin;

    const currentX = widget.offsetLeft || (window.innerWidth - 100);
    isFacingLeft = destinationX < currentX;
    updateFacingDirection();

    const speed = 70; // px per second
    const distance = Math.abs(destinationX - currentX);
    const duration = Math.max(1.5, distance / speed);

    widget.style.transition = `left ${duration}s ease-in-out, top 0.4s ease`;
    widget.style.right = 'auto';
    widget.style.bottom = '1.5rem';
    widget.style.left = `${destinationX}px`;

    clearTimeout(roamInterval);
    roamInterval = setTimeout(() => {
      // Suddenly lie down / loaf after walking!
      if (Math.random() > 0.4) {
        setCatState('napping');
        showCatQuote("Walked over here. Perfect spot to lie down! 🛋️");
      } else {
        setCatState('idle');
      }
    }, duration * 1000);
  }

  function updateFacingDirection() {
    const avatar = document.getElementById('cat-avatar-container');
    if (avatar) {
      avatar.style.transform = isFacingLeft ? 'scaleX(-1)' : 'scaleX(1)';
    }
  }

  // Fast Mouse Tracking & Cursor Hunting Engine
  function initCursorHunter() {
    window.addEventListener('mousemove', (e) => {
      const now = performance.now();
      if (lastMouseTime > 0) {
        const dt = (now - lastMouseTime) / 1000;
        if (dt > 0) {
          const dist = Math.hypot(e.clientX - lastMouseX, e.clientY - lastMouseY);
          mouseSpeed = dist / dt;

          // Fast mouse speed triggers hunting behavior!
          if (mouseSpeed > 1000 && catState !== 'hunting' && catState !== 'pouncing') {
            triggerCursorHunt(e.clientX, e.clientY);
          }
        }
      }
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      lastMouseTime = now;
    }, { passive: true });
  }

  function triggerCursorHunt(targetClientX, targetClientY) {
    const widget = document.getElementById('cat-widget');
    if (!widget || widget.classList.contains('is-minimized')) return;

    clearTimeout(stateTimer);
    clearTimeout(roamInterval);

    // 1. Alert & Butt Wiggle phase
    setCatState('hunting');
    isFacingLeft = targetClientX < (widget.offsetLeft || window.innerWidth / 2);
    updateFacingDirection();
    showCatQuote("👀 Fast target detected! Wiggling butt... 🎯");

    setTimeout(() => {
      // 2. Swift Pounce Leap phase
      setCatState('pouncing');
      widget.classList.add('is-roaming');

      const landingX = Math.max(30, Math.min(window.innerWidth - 110, targetClientX - 40));
      const landingY = Math.max(60, Math.min(window.innerHeight - 100, targetClientY - 30));

      widget.style.transition = 'left 0.35s cubic-bezier(0.22, 1, 0.36, 1), top 0.35s cubic-bezier(0.22, 1, 0.36, 1)';
      widget.style.right = 'auto';
      widget.style.bottom = 'auto';
      widget.style.left = `${landingX}px`;
      widget.style.top = `${landingY}px`;

      setTimeout(() => {
        // 3. Landed & Pounced!
        showCatQuote("🐾 Pounce! Got your cursor! 😸");
        setCatState('idle');

        // Return slowly to bottom after a moment
        setTimeout(() => {
          widget.style.transition = 'top 0.8s ease-in-out, left 0.8s ease-in-out';
          widget.style.top = `${window.innerHeight - 100}px`;
        }, 3000);
      }, 450);
    }, 550);
  }

  function attachCatEventListeners() {
    const avatar = document.getElementById('cat-avatar-container');
    const switchBtn = document.getElementById('cat-switch-btn');
    const roamBtn = document.getElementById('cat-roam-btn');
    const modalBtn = document.getElementById('cat-modal-btn');
    const closeBtn = document.getElementById('cat-close-btn');
    const modal = document.getElementById('cat-modal');
    const modalClose = document.getElementById('cat-modal-close');
    const backdrop = document.getElementById('cat-modal-backdrop');

    if (avatar) {
      avatar.addEventListener('click', () => {
        if (catState === 'napping') {
          setCatState('idle');
          showCatQuote("Woke up from catnap! Purr 🐾");
        } else {
          avatar.classList.add('bouncing');
          setTimeout(() => avatar.classList.remove('bouncing'), 600);
          showCatQuote();
        }
      });
    }

    if (switchBtn) {
      switchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentCatType = currentCatType === 'flamepoint' ? 'ragdoll' : 'flamepoint';
        renderCatAvatar();
        showCatQuote(currentCatType === 'flamepoint' ? "Switched to Flame-Point Siamese! 🐾" : "Switched to Seal-Bicolor Ragdoll! 🐾");
      });
    }

    if (roamBtn) {
      roamBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startWalking();
        showCatQuote("Off on patrol across the screen! 🐾");
      });
    }

    function openModal() {
      if (modal) {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeModal() {
      if (modal) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }

    if (modalBtn) modalBtn.addEventListener('click', openModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
        closeModal();
      }
    });

    const restorePill = document.getElementById('cat-restore-pill');

    function toggleMinimize(forceState) {
      const widget = document.getElementById('cat-widget');
      if (!widget) return;

      if (typeof forceState === 'boolean') {
        if (forceState) widget.classList.add('is-minimized');
        else widget.classList.remove('is-minimized');
      } else {
        widget.classList.toggle('is-minimized');
      }

      const isMin = widget.classList.contains('is-minimized');
      localStorage.setItem(STORAGE_KEY, isMin ? 'hidden' : 'visible');

      if (!isMin) {
        showCatQuote("I'm back! Purr 🐾");
      }
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMinimize(true);
      });
    }

    if (restorePill) {
      restorePill.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMinimize(false);
      });
    }
  }

  function initScrollTracking() {
    const progressBar = document.getElementById('cat-scroll-progress');
    const runner = document.getElementById('cat-runner');

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
      if (runner) {
        runner.style.transform = `scaleX(${scrollPercent > 50 ? -1 : 1})`;
      }
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCatCompanion);
  } else {
    initCatCompanion();
  }
})();
