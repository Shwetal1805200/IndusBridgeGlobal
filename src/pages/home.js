/* ═══════════════════════════════════════════════════
   IndusBridge Global — Home Page
   ═══════════════════════════════════════════════════ */

export function renderHomePage() {
  return `
    <!-- Hero Section -->
    <section class="r-hero" style="position:relative;min-height:100vh;display:flex;align-items:center;background:var(--surface-container-lowest);overflow:hidden;">
      <div style="position:absolute;inset:0;opacity:0.08;background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfMvkTCaDFiB88guJ8JYDtFSKzBSIxHqhZwv5qSWR2q_kwk8xP1j1uIxVoMCilI8_R30gBRwqBPXlJMlvnif_sO8tB9LoYRDhir5lhx00XsKJzfW8-h5E1pyfpKbgWPBP-ixANW-ER9tqD1fINmF9EHulhJQDp45vyn9m3c2TTpk2FyDTwU1t08N3_pOxKLtAw0iBjlcJwjIGWHOs07MZW2hsqAHlVvNEe63-bxvcZmoJzep76NQsjRdVfWE8_QkRIFCg3jx0CHNST');background-size:cover;background-position:center;filter:grayscale(100%);"></div>
      
      <div class="container" style="position:relative;z-index:10;display:grid;grid-template-columns:1fr;gap:3rem;padding-top:6rem;padding-bottom:4rem;">
        <div style="max-width:900px;">
          <span class="section-label reveal-up">Global Trade & Strategic Distribution</span>
          <h1 class="reveal-up" style="letter-spacing:-0.04em;line-height:0.95;margin-bottom:2rem;">
            Built for Distributors<br>
            <span style="background:var(--primary);color:var(--on-primary);padding:0.125rem 1rem;display:inline-block;margin-top:0.25rem;">Who Are Here</span><br>
            for the Long Term
          </h1>
          <p class="reveal-up" style="font-size:1.25rem;max-width:640px;margin-bottom:2.5rem;line-height:1.7;">
            Bridging high-demand consumer categories with market-ready distribution systems in the GCC. We don't just supply products; we engineer supply chains for sustained retail movement.
          </p>
          <div class="reveal-up r-cta-buttons" style="display:flex;flex-wrap:wrap;gap:1rem;">
            <button class="btn btn-gold btn-lg" onclick="window.location.hash='/contact'">
              Request a Sample Kit
            </button>
            <button class="btn btn-secondary btn-lg" onclick="window.location.hash='/distributor-program'">
              Become a Distribution Partner
            </button>
          </div>
        </div>

        <!-- Side Data Card (Desktop only) -->
        <div class="reveal-right r-hide-mobile" style="position:absolute;right:2rem;top:50%;transform:translateY(-50%);width:320px;display:none;" id="hero-side-card">
          <div style="background:var(--surface-container-low);padding:2rem;border-left:4px solid var(--secondary);">
            <span class="font-mono" style="font-size:0.6875rem;color:var(--outline);display:block;margin-bottom:0.5rem;">LAST SHIPMENT LOG</span>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:0.75rem 0;border-bottom:1px solid rgba(201,197,203,0.2);">
              <span class="font-mono" style="font-size:0.875rem;font-weight:600;">MUMBAI</span>
              <span class="material-symbols-outlined" style="color:var(--secondary);font-size:0.875rem;">trending_flat</span>
              <span class="font-mono" style="font-size:0.875rem;font-weight:600;">DUBAI</span>
            </div>
            <div style="margin-top:1rem;display:flex;align-items:center;gap:1rem;">
              <span style="font-family:var(--font-headline);font-size:2rem;font-weight:700;">240t</span>
              <span style="font-size:0.75rem;color:var(--on-surface-variant);line-height:1.3;">Agile capacity<br>distributed monthly</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Strip -->
    <section class="trust-strip">
      <div class="trust-strip-inner">
        <div class="trust-item reveal-up"><span class="material-symbols-outlined">verified_user</span><span>Reliable Supply</span></div>
        <div class="trust-item reveal-up"><span class="material-symbols-outlined">inventory_2</span><span>Market-Aligned Products</span></div>
        <div class="trust-item reveal-up"><span class="material-symbols-outlined">payments</span><span>High-Margin Focus</span></div>
        <div class="trust-item reveal-up"><span class="material-symbols-outlined">handshake</span><span>Long-Term Partnerships</span></div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="r-section" style="padding:6rem 0;background:var(--surface);">
      <div class="container" style="text-align:center;max-width:1024px;">
        <h2 class="reveal-up" style="letter-spacing:-0.02em;margin-bottom:3rem;line-height:1.15;max-width:800px;margin-left:auto;margin-right:auto;">
          The Real Challenge in Distribution Is Not Finding Products.<br>
          <span style="color:var(--secondary);font-style:italic;font-weight:300;">It Is Finding Products That Actually Perform.</span>
        </h2>
        <p class="reveal-up" style="font-size:1.125rem;max-width:640px;margin:0 auto 2.5rem;">
          We eliminate the guesswork. Our selection process is based on retail velocity data and GCC consumer behavior, ensuring every SKU you carry has a clear path to consumption.
        </p>
        <a href="#/about" class="reveal-up" style="display:inline-flex;align-items:center;gap:0.5rem;font-family:var(--font-headline);font-weight:700;color:var(--primary);">
          See How We Work With Distributors
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </div>
    </section>

    <!-- What Sets Us Apart (Bento Grid) -->
    <section class="r-section" style="padding:6rem 0;background:var(--surface-container-low);">
      <div class="container">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:4rem;flex-wrap:wrap;gap:1rem;">
          <div style="max-width:480px;">
            <span class="section-label reveal-up">Our Edge</span>
            <h2 class="reveal-up" style="letter-spacing:-0.04em;">Engineered for Your Growth</h2>
          </div>
        </div>
        
        <div class="bento-grid grid-12 reveal-up" style="grid-template-columns:repeat(12,1fr);">
          <div class="bento-card bento-card-light span-full" style="grid-column:span 7;min-height:400px;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span class="material-symbols-outlined" style="font-size:2.5rem;color:var(--primary);margin-bottom:1.5rem;display:block;">shopping_cart_checkout</span>
              <h3 style="font-size:1.875rem;margin-bottom:1rem;">Built for Retail Movement</h3>
              <p style="font-size:1.125rem;max-width:480px;">We prioritize products with proven high-turnover rates. Our goal is to keep your inventory moving, not sitting in a warehouse.</p>
            </div>
            <div class="r-stats-grid" style="margin-top:2rem;padding-top:2rem;border-top:1px solid rgba(201,197,203,0.2);display:flex;gap:3rem;">
              <div><div class="counter-number" style="font-size:1.5rem;">18%</div><div style="font-size:0.6875rem;color:var(--outline);text-transform:uppercase;">Avg. Turnover Velocity</div></div>
              <div><div class="counter-number" style="font-size:1.5rem;">98%</div><div style="font-size:0.6875rem;color:var(--outline);text-transform:uppercase;">Shelf-life Optimization</div></div>
            </div>
          </div>
          <div class="bento-card bento-card-dark" style="grid-column:span 5;">
            <span class="material-symbols-outlined" style="font-size:2.5rem;color:var(--secondary-container);margin-bottom:1.5rem;display:block;">account_balance_wallet</span>
            <h3 style="font-size:1.875rem;margin-bottom:1rem;color:white;">Designed for Margin Stability</h3>
            <p style="color:var(--on-primary-container);font-size:1.125rem;margin-bottom:2rem;">Direct-to-source logistics and efficient scaling mean you maintain healthy margins even in competitive environments.</p>
            <ul style="display:flex;flex-direction:column;gap:1rem;">
              <li style="display:flex;align-items:center;gap:0.75rem;color:white;"><span class="material-symbols-outlined" style="color:var(--secondary-container);font-size:0.875rem;">check_circle</span>Fixed Pricing Windows</li>
              <li style="display:flex;align-items:center;gap:0.75rem;color:white;"><span class="material-symbols-outlined" style="color:var(--secondary-container);font-size:0.875rem;">check_circle</span>Bulk Rebate Programs</li>
            </ul>
          </div>
          <div class="bento-card bento-card-muted" style="grid-column:span 4;">
            <span class="material-symbols-outlined" style="font-size:2rem;color:var(--primary);margin-bottom:1rem;display:block;">factory</span>
            <h4 style="margin-bottom:0.75rem;">Consistent Quality & Supply</h4>
            <p style="font-size:0.875rem;">Rigorous QC at origin and strategic buffer stocks ensure you never miss a retail cycle.</p>
          </div>
          <div class="bento-card bento-card-muted" style="grid-column:span 4;">
            <span class="material-symbols-outlined" style="font-size:2rem;color:var(--primary);margin-bottom:1rem;display:block;">analytics</span>
            <h4 style="margin-bottom:0.75rem;">Market-Aligned Strategy</h4>
            <p style="font-size:0.875rem;">Local market intelligence informs our product pipeline, keeping your portfolio ahead of trends.</p>
          </div>
          <div class="bento-card bento-card-gold" style="grid-column:span 4;">
            <span class="material-symbols-outlined" style="font-size:2rem;color:white;margin-bottom:1rem;display:block;">handshake</span>
            <h4 style="margin-bottom:0.75rem;color:white;">Partnership-Driven</h4>
            <p style="font-size:0.875rem;color:rgba(255,255,255,0.8);">We grow when you grow. Our dedicated account managers focus on your regional expansion.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Focus Section -->
    <section class="r-section" style="padding:6rem 0;background:white;overflow:hidden;">
      <div class="container r-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;">
        <div class="reveal-left" style="position:relative;">
          <img class="img-grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhPaS5aLwvvWtI0Lsm_-bD7LWEXPh0eFLZvKwd6-Z6-7iEKp__SoSSn045xqXR3335VeDGyG_J5IxXnm2O0xltbjLeCTLAupp1ZBBBAj3qxj5dY4vQ9dkCl2KCEW7q0InKkXviiPx4q7sg8K6Ya-nMRbWl26WmRdcF2fNMleTuQV499Ajscu9X2rC0Fu58jYnef14gFMc31jDe1TW5M8390RIKBzaCavn20_W9V_MfyA3GRsYsSEen2482B2P8qoEL_q3jyl8tkYjm" alt="Premium home fragrance products" style="width:100%;height:auto;max-height:600px;object-fit:cover;" />
          <div class="r-hide-mobile" style="position:absolute;bottom:-2.5rem;right:-2.5rem;background:var(--primary);color:white;padding:3rem;" class="reveal-scale">
            <span class="font-mono" style="font-size:2.5rem;font-weight:700;color:var(--secondary-container);display:block;">01</span>
            <span style="font-family:var(--font-headline);font-weight:700;font-size:1.25rem;text-transform:uppercase;letter-spacing:-0.02em;">Core Category:<br>Home Fragrance</span>
          </div>
        </div>
        <div class="reveal-right">
          <span class="section-label">Product Categories</span>
          <h2 style="letter-spacing:-0.04em;margin-bottom:2rem;line-height:1.1;">Superior Incense & Home Fragrance Collection</h2>
          <p style="font-size:1.125rem;margin-bottom:2rem;line-height:1.7;">Our flagship category serves the growing appetite for premium home atmospheres in the GCC.</p>
          <div style="display:flex;flex-direction:column;gap:1.5rem;margin-bottom:3rem;">
            <div style="display:flex;align-items:flex-start;gap:1rem;">
              <div style="background:var(--surface-container);padding:0.5rem;flex-shrink:0;"><span class="material-symbols-outlined">auto_awesome</span></div>
              <div><h4 style="font-weight:700;color:var(--primary);margin-bottom:0.25rem;">Premium Formulation</h4><p style="font-size:0.875rem;color:var(--outline);">Traditional blends optimized for modern preferences.</p></div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:1rem;">
              <div style="background:var(--surface-container);padding:0.5rem;flex-shrink:0;"><span class="material-symbols-outlined">package_2</span></div>
              <div><h4 style="font-weight:700;color:var(--primary);margin-bottom:0.25rem;">Retail-Ready Packaging</h4><p style="font-size:0.875rem;color:var(--outline);">High-impact shelf presence that drives impulsive buys.</p></div>
            </div>
          </div>
          <button class="btn btn-primary" onclick="window.location.hash='/products'" style="display:inline-flex;align-items:center;gap:0.75rem;">
            Explore Our Product Range <span class="material-symbols-outlined">north_east</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Global Distribution Focus -->
    <section class="r-section" style="padding:6rem 0;background:var(--surface-container-lowest);">
      <div class="container">
        <div style="text-align:center;margin-bottom:4rem;">
          <h2 class="reveal-up" style="letter-spacing:-0.04em;margin-bottom:1rem;">Strategic GCC Market Presence</h2>
          <p class="reveal-up" style="max-width:640px;margin:0 auto;">We provide concentrated distribution expertise in the region's most dynamic markets.</p>
        </div>
        <div class="r-markets reveal-up" style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;">
          <div class="market-card"><div class="market-card-code">UAE</div><p style="margin-bottom:2rem;">Premier trade hub with deep penetration in major retail chains and specialized boutiques across Dubai and Abu Dhabi.</p><div class="market-label">Status: High Intensity</div></div>
          <div class="market-card"><div class="market-card-code">OMAN</div><p style="margin-bottom:2rem;">Robust network covering Muscat and northern regions, focusing on traditional markets and modern hypermarkets.</p><div class="market-label">Status: Strategic Expansion</div></div>
          <div class="market-card"><div class="market-card-code">QATAR</div><p style="margin-bottom:2rem;">Premium-focused distribution serving the high-disposable income demographic in Doha and Lusail.</p><div class="market-label">Status: High Growth</div></div>
        </div>
        <div style="margin-top:3rem;text-align:center;" class="reveal-up"><button class="btn btn-secondary">Explore Our Market Focus</button></div>
      </div>
    </section>

    <!-- How It Works (4-Step Process) -->
    <section class="r-section" style="padding:6rem 0;background:var(--surface);">
      <div class="container">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;margin-bottom:4rem;gap:2rem;">
          <div style="max-width:480px;">
            <span class="section-label reveal-up">Process</span>
            <h2 class="reveal-up" style="letter-spacing:-0.04em;">Your Path to Partnership</h2>
          </div>
          <button class="btn btn-gold reveal-up" onclick="window.location.hash='/contact'">Request Your Sample Kit Today</button>
        </div>
        <div class="r-process reveal-up" style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;">
          <div class="process-step"><span class="process-step-number">01</span><h4 style="font-size:1.25rem;margin-bottom:1rem;">Market Understanding</h4><p style="font-size:0.875rem;">We analyze your current portfolio and identify gaps in your local market coverage.</p></div>
          <div class="process-step"><span class="process-step-number">02</span><h4 style="font-size:1.25rem;margin-bottom:1rem;">Product Alignment</h4><p style="font-size:0.875rem;">Matching our highest-velocity SKUs to your specific distribution strengths.</p></div>
          <div class="process-step"><span class="process-step-number">03</span><h4 style="font-size:1.25rem;margin-bottom:1rem;">Sample Evaluation</h4><p style="font-size:0.875rem;">Physical product testing to ensure quality standards meet your expectations.</p></div>
          <div class="process-step"><span class="process-step-number">04</span><h4 style="font-size:1.25rem;margin-bottom:1rem;">Structured Supply</h4><p style="font-size:0.875rem;">Onboarding into our logistics pipeline for seamless, scheduled replenishment.</p></div>
        </div>
      </div>
    </section>

    <!-- Our Principles -->
    <section class="r-section" style="padding:6rem 0;background:var(--primary);color:var(--on-primary);overflow:hidden;">
      <div class="container" style="position:relative;">
        <div class="r-principles reveal-up" style="display:grid;grid-template-columns:repeat(3,1fr);gap:4rem;border-top:1px solid rgba(134,130,140,0.2);border-bottom:1px solid rgba(134,130,140,0.2);padding:5rem 0;">
          <div style="text-align:center;"><h3 style="font-family:var(--font-headline);font-weight:700;color:var(--secondary-container);margin-bottom:1rem;">Trust</h3><p class="font-mono" style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;color:var(--on-primary-container);">Foundational Value</p></div>
          <div style="text-align:center;"><h3 style="font-family:var(--font-headline);font-weight:700;color:var(--secondary-container);margin-bottom:1rem;">Quality</h3><p class="font-mono" style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;color:var(--on-primary-container);">Product Benchmark</p></div>
          <div style="text-align:center;"><h3 style="font-family:var(--font-headline);font-weight:700;color:var(--secondary-container);margin-bottom:1rem;">Integrity</h3><p class="font-mono" style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;color:var(--on-primary-container);">Operational Standard</p></div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="r-section-lg" style="padding:8rem 0;background:var(--surface-container-lowest);">
      <div class="container" style="text-align:center;">
        <h2 class="reveal-up" style="letter-spacing:-0.04em;margin-bottom:2rem;">Ready to Scale Your Distribution?</h2>
        <p class="reveal-up" style="font-size:1.25rem;max-width:640px;margin:0 auto 3rem;line-height:1.7;">
          Join a network of professional distributors focusing on sustainable growth and market authority. Let's start with a sample evaluation.
        </p>
        <div class="reveal-up" style="display:flex;flex-direction:column;gap:1.5rem;align-items:center;">
          <div class="r-cta-buttons" style="display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem;">
            <button class="btn btn-primary btn-lg" style="box-shadow:0 25px 50px rgba(0,0,0,0.12);" onclick="window.location.hash='/distributor-program'">Become a Distribution Partner</button>
            <button class="btn btn-secondary btn-lg" onclick="window.location.hash='/contact'">Request a Sample Kit</button>
          </div>
        </div>
      </div>
    </section>
  `;
}
