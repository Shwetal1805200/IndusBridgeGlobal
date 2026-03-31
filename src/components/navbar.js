/* ═══════════════════════════════════════════════════
   IndusBridge Global — Navbar Component
   ═══════════════════════════════════════════════════ */

export function renderNavbar() {
  return `
    <div class="glass-nav" id="navbar">
      <div class="nav-inner">
        <a href="#/" class="nav-logo">IndusBridge Global</a>
        
        <div class="nav-links" id="nav-links">
          <a href="#/" class="nav-link active">Home</a>
          <a href="#/about" class="nav-link">About Us</a>
          <a href="#/products" class="nav-link">Products</a>
          <a href="#/distributor-program" class="nav-link">Distributor Program</a>
          <a href="#/contact" class="nav-link">Contact</a>
          <a href="#/blog" class="nav-link">Blog</a>
        </div>

        <div class="nav-actions">
          <button class="btn btn-sm" style="background:none;color:var(--on-surface-variant);font-weight:500;padding:0.5rem 1rem;display:none;" id="nav-partner-btn" onclick="window.location.hash='/distributor-program'">Become a Distribution Partner</button>
          <button class="btn btn-primary btn-sm" onclick="window.location.hash='/contact'">Request a Sample Kit</button>
          <button class="mobile-toggle" id="mobile-toggle" aria-label="Open menu">
            <span class="material-symbols-outlined" style="font-size:1.75rem;">menu</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu" id="mobile-menu">
      <button class="mobile-close" id="mobile-close" aria-label="Close menu">
        <span class="material-symbols-outlined" style="font-size:2rem;">close</span>
      </button>
      <a href="#/" onclick="closeMobileMenu()">Home</a>
      <a href="#/about" onclick="closeMobileMenu()">About Us</a>
      <a href="#/products" onclick="closeMobileMenu()">Products</a>
      <a href="#/distributor-program" onclick="closeMobileMenu()">Distributor Program</a>
      <a href="#/contact" onclick="closeMobileMenu()">Contact</a>
      <a href="#/blog" onclick="closeMobileMenu()">Blog</a>
    </div>
  `;
}

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-close');
  const partnerBtn = document.getElementById('nav-partner-btn');

  // Scroll-aware navbar
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Show partner button on desktop when scrolled
    if (partnerBtn) {
      if (currentScroll > 300 && window.innerWidth >= 1024) {
        partnerBtn.style.display = 'inline-flex';
      } else {
        partnerBtn.style.display = 'none';
      }
    }

    lastScroll = currentScroll;
  });

  // Mobile menu
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && menu) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // Close mobile menu globally
  window.closeMobileMenu = () => {
    if (menu) {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  // Close on hash change
  window.addEventListener('hashchange', () => {
    if (menu) {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}
