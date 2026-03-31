/* ═══════════════════════════════════════════════════
   IndusBridge Global — Footer Component
   ═══════════════════════════════════════════════════ */

export function renderFooter() {
  return `
    <div class="site-footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <span style="font-family:var(--font-headline);font-size:1.25rem;font-weight:700;color:white;">IndusBridge Global</span>
          <p>IndusBridge Global is a distribution-focused Indian export company connecting quality Indian manufacturers with established distributors across global markets.</p>
          <div style="display:flex;gap:1rem;margin-top:1.5rem;">
            <a href="#" style="color:#71717a;transition:color 0.3s;"><span class="material-symbols-outlined">language</span></a>
            <a href="#" style="color:#71717a;transition:color 0.3s;"><span class="material-symbols-outlined">public</span></a>
          </div>
        </div>

        <div>
          <h4 class="footer-heading">Company</h4>
          <div class="footer-links">
            <a href="#/about">About Us</a>
            <a href="#/products">Products</a>
            <a href="#/distributor-program">Distributor Program</a>
            <a href="#">Global Compliance</a>
          </div>
        </div>

        <div>
          <h4 class="footer-heading">Legal</h4>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Trade Agreements</a>
            <a href="#">Sitemap</a>
          </div>
        </div>

        <div>
          <h4 class="footer-heading">Contact</h4>
          <div class="footer-links">
            <span style="color:#71717a;font-size:0.875rem;display:flex;align-items:center;gap:0.5rem;">
              <span class="material-symbols-outlined" style="font-size:1rem;">mail</span>
              reach@indusbg.com
            </span>
            <span style="color:#71717a;font-size:0.875rem;display:flex;align-items:center;gap:0.5rem;">
              <span class="material-symbols-outlined" style="font-size:1rem;">location_on</span>
              NM, Maharashtra, India
            </span>
            <span style="color:#71717a;font-size:0.875rem;display:flex;align-items:center;gap:0.5rem;">
              <span class="material-symbols-outlined" style="font-size:1rem;">call</span>
              +91 1111-111-111
            </span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <p class="footer-copyright">© 2024 IndusBridge Global. All rights reserved. Trust, Quality, Integrity.</p>
          <p style="color:#52525b;font-size:0.6875rem;">Design inspired by technical trade documentation.</p>
        </div>
      </div>
    </div>
  `;
}
