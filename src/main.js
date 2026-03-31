/* ═══════════════════════════════════════════════════
   IndusBridge Global — Main Entry Point
   ═══════════════════════════════════════════════════ */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Router } from './router.js';
import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderHomePage } from './pages/home.js';
import { renderAboutPage } from './pages/about.js';
import { renderProductsPage } from './pages/products.js';
import { renderDistributorPage } from './pages/distributor.js';
import { renderContactPage, initContactForm } from './pages/contact.js';
import { renderBlogPage, initBlogPage } from './pages/blog.js';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ── Initialize Lenis Smooth Scroll ──
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ── Render Shell ──
const navEl = document.getElementById('main-nav');
const footerEl = document.getElementById('main-footer');
const pageContent = document.getElementById('page-content');

navEl.innerHTML = renderNavbar();
footerEl.innerHTML = renderFooter();
initNavbar();

// ── Init Animations ──
function initPageAnimations() {
  // Kill old triggers
  ScrollTrigger.getAll().forEach(t => t.kill());

  // Reveal Up
  gsap.utils.toArray('.reveal-up').forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, y: 60 },
      { 
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
      }
    );
  });

  // Reveal Left
  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, x: -60 },
      { 
        opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
      }
    );
  });

  // Reveal Right
  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, x: 60 },
      { 
        opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
      }
    );
  });

  // Reveal Scale
  gsap.utils.toArray('.reveal-scale').forEach(el => {
    gsap.fromTo(el, 
      { opacity: 0, scale: 0.9 },
      { 
        opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
      }
    );
  });

  // Stagger children
  gsap.utils.toArray('.stagger-children').forEach(parent => {
    gsap.fromTo(parent.children, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: parent, start: 'top 88%', toggleActions: 'play none none none' }
      }
    );
  });

  // Hover underline bars
  document.querySelectorAll('.animate-underline').forEach(el => {
    const bar = el.querySelector('.underline-bar');
    if (bar) {
      el.addEventListener('mouseenter', () => { bar.style.width = '100%'; });
      el.addEventListener('mouseleave', () => { bar.style.width = '0'; });
    }
  });

  // Value icons fade on hover  
  document.querySelectorAll('.hover-lift').forEach(el => {
    const icon = el.querySelector('.value-icon');
    if (icon) {
      el.addEventListener('mouseenter', () => { icon.style.opacity = '1'; });
      el.addEventListener('mouseleave', () => { icon.style.opacity = '0'; });
    }
  });

  // Show side cards on desktop
  const heroSide = document.getElementById('hero-side-card');
  if (heroSide && window.innerWidth >= 1280) {
    heroSide.style.display = 'block';
  }

  const productsHero = document.getElementById('products-hero-img');
  if (productsHero && window.innerWidth >= 768) {
    productsHero.style.display = 'block';
  }

  ScrollTrigger.refresh();
}

// ── Define Routes ──
const routes = [
  { path: '/', render: renderHomePage },
  { path: '/about', render: renderAboutPage },
  { path: '/products', render: renderProductsPage },
  { path: '/distributor-program', render: renderDistributorPage },
  { path: '/contact', render: renderContactPage },
  { path: '/blog', render: renderBlogPage },
];

// ── Initialize Router ──
const router = new Router(routes, pageContent);
router.onNavigate = (path) => {
  // Scroll to top via Lenis
  lenis.scrollTo(0, { immediate: true });
  // Re-init animations for new page content
  setTimeout(() => {
    initPageAnimations();
    // Page-specific initializers
    if (path === '/contact') initContactForm();
    if (path === '/blog') initBlogPage();
  }, 50);
};

// Initial page animations
setTimeout(initPageAnimations, 200);
