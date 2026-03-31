/* IndusBridge Global — Products Page */

export function renderProductsPage() {
  return `
    <section class="r-hero" style="position:relative;padding:5rem 2rem;overflow:hidden;background:var(--surface);">
      <div style="max-width:1536px;margin:0 auto;position:relative;z-index:10;">
        <div class="r-hero-split" style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:end;">
          <div>
            <span class="font-mono reveal-up" style="color:var(--secondary);font-size:0.875rem;letter-spacing:0.15em;text-transform:uppercase;display:block;margin-bottom:1rem;">Fragrance Collection // 2024</span>
            <h1 class="reveal-up" style="letter-spacing:-0.04em;line-height:0.95;margin-bottom:2rem;">The Sovereign<br>Fragrance.</h1>
            <p class="reveal-up" style="font-size:1.25rem;color:var(--on-surface-variant);max-width:520px;margin-bottom:3rem;">Elevating the GCC home experience with premium charcoal-free agarbatti. A fusion of ancient Indian heritage and modern olfactory sophistication.</p>
            <button class="btn btn-gold btn-lg reveal-up" onclick="window.location.hash='/contact'">Request a Sample Kit</button>
          </div>
          <div class="reveal-right r-hide-mobile" id="products-hero-img" style="display:none;">
            <div style="background:var(--surface-container-high);padding:1rem;height:500px;position:relative;overflow:hidden;">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhRVyTfbNg2JdVJLhaqaGHr3ejKMJle72s2fzfN3iKfS37o96nzXa7eSSXaF0Sm8c7RpnMkOCZPS30fcGkWWfHapJgWAp7isTeRWgXkL_ps0RCoKp_O5_hLlbXYrtMvnuPRJ0tofG2Rh15bXK9ulY_x3AGnhsYVaNI_7F-VK5Bkj-Ybsbr8bdJBHn4AnM5ywe_C0YLeg9rZjI-ntnGKZ9TcPYT566gdBlxwirAJ0ittaDcSfuOpZyBASGj88qCBzB5HdqMCwN_7yIC" alt="Premium Incense" style="width:100%;height:100%;object-fit:cover;" />
              <div class="glass-panel" style="position:absolute;bottom:2rem;left:2rem;padding:1.5rem;">
                <span class="font-mono" style="font-size:0.6875rem;text-transform:uppercase;">Current Status</span>
                <div style="font-family:var(--font-headline);font-weight:700;font-size:1.25rem;text-transform:uppercase;letter-spacing:0.1em;">In Stock // Dubai Hub</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="r-section" style="padding:6rem 2rem;background:var(--surface-container-lowest);">
      <div style="max-width:1536px;margin:0 auto;">
        <div class="r-3col reveal-up" style="display:grid;grid-template-columns:repeat(3,1fr);gap:4rem;border-top:1px solid rgba(201,197,203,0.2);padding-top:4rem;">
          <div><span class="font-mono" style="color:var(--secondary);font-size:0.6875rem;text-transform:uppercase;letter-spacing:0.15em;">01 // Quality</span><h3 style="margin:1rem 0;">Charcoal-Free Assurance</h3><p style="line-height:1.7;">Our agarbatti is crafted using natural wood powders and essential oils, ensuring a clean, soot-free burn.</p></div>
          <div><span class="font-mono" style="color:var(--secondary);font-size:0.6875rem;text-transform:uppercase;letter-spacing:0.15em;">02 // Heritage</span><h3 style="margin:1rem 0;">The Chandan Legacy</h3><p style="line-height:1.7;">Sourced from the heart of Mysore, our sandalwood blends offer the deep, creamy resonance required for traditional Gulf hospitality.</p></div>
          <div><span class="font-mono" style="color:var(--secondary);font-size:0.6875rem;text-transform:uppercase;letter-spacing:0.15em;">03 // Innovation</span><h3 style="margin:1rem 0;">White Musk Fusion</h3><p style="line-height:1.7;">A contemporary interpretation designed specifically for the discerning modern GCC palate, balancing floral notes with deep earthiness.</p></div>
        </div>
      </div>
    </section>

    <section class="r-section" style="padding:6rem 2rem;background:var(--background);">
      <div style="max-width:1536px;margin:0 auto;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4rem;flex-wrap:wrap;gap:1rem;">
          <h2 class="reveal-up" style="letter-spacing:-0.04em;">The Signature Blends</h2>
          <span class="font-mono reveal-up r-hide-mobile" style="font-size:0.875rem;color:var(--outline);">Showing 4 exclusive variants for international distribution</span>
        </div>
        <div class="r-product-grid reveal-up" style="display:grid;grid-template-columns:repeat(12,1fr);gap:2rem;">
          <div class="product-card" style="grid-column:span 8;">
            <div style="aspect-ratio:16/9;overflow:hidden;"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOTfztsjnjtqOYJDsnSW_NWxaAuYJbND_q9SSpOX13HehIcawIA6ckgAsTx5jqJGKbnfs0jVA6cuX0usOTzO61Vwb7cXAWkr2F-XPEWAabw6btJItvFz2S844VtIALwp1gAQYDN3Za4oyDCY4E6p9QvtJlYxMs0K20OBPGkynzsYgaq7LMMYo9lx82DZNiYQcve2PLmYKo-_u6rub7MrvO2-E9jWDFSceHGjNylqHvkouLzMX462N-BlctOgFWs9RImEwrGXLUfrDb" alt="Chandan" style="width:100%;height:100%;object-fit:cover;" /></div>
            <div class="r-product-info" style="padding:2rem;display:flex;justify-content:space-between;align-items:flex-end;">
              <div><span class="font-mono" style="color:var(--secondary);font-size:0.6875rem;font-weight:700;text-transform:uppercase;display:block;margin-bottom:0.5rem;">Variant // C-01</span><h4 style="font-size:2.5rem;letter-spacing:-0.02em;margin-bottom:0.5rem;">Chandan Divine</h4><p style="max-width:400px;">Pure Mysore Sandalwood base with notes of sacred resins.</p></div>
              <div style="text-align:right;"><span class="font-mono" style="font-size:1.5rem;font-weight:700;">100% PURE</span><br><span style="font-size:0.6875rem;color:var(--outline);text-transform:uppercase;">Charcoal-free</span></div>
            </div>
          </div>
          <div class="product-card" style="grid-column:span 4;">
            <div style="aspect-ratio:1;overflow:hidden;"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbG_GhzQMijBI9k-DBJj_L6DIBBdD8V1UyOtFRRomucnqm18_O6wd1U4EJQwnUR_EdcTlFh-NTzE0QFMoaDPx_dm-EShn9Ibtf0OFMspM66IEnqdaFvVldJz32-y38p2iJViePUZNhKfE-PKcRyfKr1d8ywkLXEOvUJdusb5Oakre_UVbWk5AnXnFWqX9wGtj8h1n-eRgruPSoNnkl8cD482_W6HZFHR1kHSXeQRXpYY6B5anlY3fsED_m0CPqMtPO1w36mxn6cknW" alt="Loban" style="width:100%;height:100%;object-fit:cover;" /></div>
            <div style="padding:2rem;"><span class="font-mono" style="color:var(--secondary);font-size:0.6875rem;font-weight:700;text-transform:uppercase;display:block;margin-bottom:0.5rem;">Variant // L-04</span><h4 style="font-size:1.875rem;letter-spacing:-0.02em;margin-bottom:0.5rem;">Loban Gold</h4><p>Intense frankincense blend for deep aromatic immersion.</p></div>
          </div>
          <div class="product-card" style="grid-column:span 4;">
            <div style="aspect-ratio:1;overflow:hidden;"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpTF0HDG9YPz9Wfaj_LIqQ2DdcuBU9T3SKifEm6DZqYuEeRX3NuRkH59D5yPu52yAMo5gVZyOYKU81ce53mhm0pyeCFo2pHSWuPiEoRh-wGDtPG69gTgsQuT2vTT2UCEmA3W8MqMcH5J9aQI6n8E8hJlt2sdWAUN8QT-gI4qYkjXwrKDHfgvDjKWAG9qPdHtSXuMh3oCOQVCgWp-oaFGR4D6huIOzV4nePCpE_HyjEMlUB6DB3RvM9NbTn7KvLdPqbXpyjYR2gBkWc" alt="White Musk" style="width:100%;height:100%;object-fit:cover;" /></div>
            <div style="padding:2rem;"><span class="font-mono" style="color:var(--secondary);font-size:0.6875rem;font-weight:700;text-transform:uppercase;display:block;margin-bottom:0.5rem;">Variant // M-07</span><h4 style="font-size:1.875rem;letter-spacing:-0.02em;margin-bottom:0.5rem;">White Musk</h4><p>Velvety soft notes with a persistent clean finish.</p></div>
          </div>
          <div class="product-card" style="grid-column:span 8;">
            <div style="aspect-ratio:16/9;overflow:hidden;"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-mGulB1GV0lilNnN1hTIghWu3cKfOW3X_85PaEYs0ykTpQXw9AqFenWYuqCi4sbDhBy8gFpL3QtM0tLqfX5NuX4CRDdApRuPaJenx92a5lAs7vzoSIj9hq7DGgYEwQTyTaMaxsZfP9LQeJ6F6TWZVn5suVfwnwuRBqpoDMS0CIHgkXYIbRF_AUjC9BIsfGvYvYdmXQ9ajyhRWKyWckNX58LiRdUMPI7N2HYY7pq8N2-R3WadMM5Ph1aJHW5T2a0cAhFkGWmsjFokL" alt="Floral Blends" style="width:100%;height:100%;object-fit:cover;" /></div>
            <div class="r-product-info" style="padding:2rem;display:flex;justify-content:space-between;align-items:flex-end;">
              <div><span class="font-mono" style="color:var(--secondary);font-size:0.6875rem;font-weight:700;text-transform:uppercase;display:block;margin-bottom:0.5rem;">Variant // F-09</span><h4 style="font-size:2.5rem;letter-spacing:-0.02em;margin-bottom:0.5rem;">Eternal Floral</h4><p style="max-width:400px;">A bouquet of Jasmine and Rose infused with morning dew.</p></div>
              <div style="text-align:right;"><span class="font-mono" style="font-size:1.5rem;font-weight:700;">PREMIUM</span><br><span style="font-size:0.6875rem;color:var(--outline);text-transform:uppercase;">Essential Oils</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="r-section" style="padding:6rem 2rem;background:var(--surface-container-lowest);">
      <div style="max-width:1536px;margin:0 auto;">
        <h2 class="reveal-up" style="margin-bottom:3rem;padding-bottom:1.5rem;border-bottom:1px solid rgba(201,197,203,0.3);">Logistics & Compliance Data</h2>
        <div class="r-specs reveal-up" style="display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid rgba(201,197,203,0.2);">
          <div style="padding:2rem;background:var(--surface-container-low);"><span class="font-mono" style="font-size:0.6875rem;color:var(--secondary);text-transform:uppercase;display:block;margin-bottom:1rem;">Export Code</span><div class="font-mono" style="font-size:1.25rem;font-weight:500;">HSN: 33074100</div></div>
          <div style="padding:2rem;"><span class="font-mono" style="font-size:0.6875rem;color:var(--secondary);text-transform:uppercase;display:block;margin-bottom:1rem;">Packaging Std</span><div class="font-mono" style="font-size:1.25rem;font-weight:500;">15g / 40g / 100g</div></div>
          <div style="padding:2rem;background:var(--surface-container-low);"><span class="font-mono" style="font-size:0.6875rem;color:var(--secondary);text-transform:uppercase;display:block;margin-bottom:1rem;">MOQ (Export)</span><div class="font-mono" style="font-size:1.25rem;font-weight:500;">500 Master Cartons</div></div>
          <div style="padding:2rem;"><span class="font-mono" style="font-size:0.6875rem;color:var(--secondary);text-transform:uppercase;display:block;margin-bottom:1rem;">Burn Duration</span><div class="font-mono" style="font-size:1.25rem;font-weight:500;">~45 - 60 Minutes</div></div>
        </div>
        <div class="r-cta-dark reveal-up" style="margin-top:4rem;display:flex;gap:2rem;align-items:center;justify-content:space-between;flex-wrap:wrap;padding:3rem;background:var(--primary);color:var(--on-primary);">
          <div style="max-width:560px;"><h3 style="color:white;margin-bottom:1rem;">Ready to expand your luxury portfolio?</h3><p style="color:var(--on-primary-container);font-size:1.125rem;">We offer comprehensive white-labeling and distribution support across UAE, KSA, and Oman markets.</p></div>
          <button class="btn btn-gold btn-lg" onclick="window.location.hash='/contact'">Request a Sample Kit</button>
        </div>
      </div>
    </section>
  `;
}
