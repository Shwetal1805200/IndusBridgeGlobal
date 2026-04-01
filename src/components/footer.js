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
              indusbridgeglobal@gmail.com
            </span>
            <span style="color:#71717a;font-size:0.875rem;display:flex;align-items:center;gap:0.5rem;">
              <span class="material-symbols-outlined" style="font-size:1rem;">location_on</span>
              NM, Maharashtra, India
            </span>
            <span style="color:#71717a;font-size:0.875rem;display:flex;align-items:center;gap:0.5rem;">
              <span class="material-symbols-outlined" style="font-size:1rem;">call</span>
              +91 1111-111-111
            </span>
            <a href="https://wa.me/911111111111" target="_blank" rel="noopener noreferrer" style="color:#71717a;font-size:0.875rem;display:flex;align-items:center;gap:0.5rem;text-decoration:none;transition:color 0.3s;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
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
