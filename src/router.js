/* ═══════════════════════════════════════════════════
   IndusBridge Global — Hash Router
   ═══════════════════════════════════════════════════ */

export class Router {
  constructor(routes, container) {
    this.routes = routes;
    this.container = container;
    this.currentRoute = null;
    this.onNavigate = null;

    window.addEventListener('hashchange', () => this.resolve());
    window.addEventListener('load', () => this.resolve());
  }

  resolve() {
    const hash = window.location.hash.slice(1) || '/';
    const route = this.routes.find(r => r.path === hash) || this.routes[0];

    if (this.currentRoute === route.path) return;
    this.currentRoute = route.path;

    // Transition out
    this.container.classList.add('page-transition-enter');
    this.container.classList.remove('page-transition-active');

    setTimeout(() => {
      this.container.innerHTML = route.render();
      
      // Transition in
      requestAnimationFrame(() => {
        this.container.classList.remove('page-transition-enter');
        this.container.classList.add('page-transition-active');
      });

      // Fire navigation callback (for GSAP re-init)
      if (this.onNavigate) {
        setTimeout(() => this.onNavigate(route.path), 100);
      }

      // Scroll to top
      window.scrollTo(0, 0);

      // Update active nav link
      this.updateActiveLink(route.path);
    }, 300);
  }

  updateActiveLink(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${path}`) {
        link.classList.add('active');
      }
    });
  }

  navigate(path) {
    window.location.hash = path;
  }
}
