/* IndusBridge Global — Distributor Program Page */

export function renderDistributorPage() {
  return `
    <section class="r-hero" style="position:relative;min-height:820px;display:flex;align-items:center;overflow:hidden;padding:5rem 2rem;">
      <div style="position:absolute;inset:0;z-index:0;opacity:0.06;pointer-events:none;">
        <div style="width:100%;height:100%;filter:grayscale(100%);opacity:0.3;background:url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2070&auto=format&fit=crop') center/cover;"></div>
      </div>
      <div style="position:relative;z-index:10;max-width:800px;">
        <p class="font-mono reveal-up" style="color:var(--secondary);text-transform:uppercase;letter-spacing:0.3em;font-size:0.875rem;margin-bottom:1.5rem;">Strategic Partnership Program</p>
        <h1 class="reveal-up" style="letter-spacing:-0.04em;line-height:0.9;margin-bottom:2rem;">
          Scale your trade<br>across the <span style="color:var(--secondary);font-style:italic;">GCC corridor.</span>
        </h1>
        <p class="reveal-up" style="font-size:1.25rem;color:var(--on-surface-variant);max-width:640px;font-weight:300;line-height:1.7;margin-bottom:3rem;">
          IndusBridge Global provides a premium infrastructure for established distributors to access high-margin logistics, verified product sourcing, and sovereign-grade reliability.
        </p>
        <div class="reveal-up r-cta-buttons" style="display:flex;flex-wrap:wrap;gap:1.5rem;align-items:center;">
          <button class="btn btn-gold btn-lg" style="display:inline-flex;align-items:center;gap:0.75rem;">Join the Network <span class="material-symbols-outlined">arrow_forward</span></button>
          <div class="r-hide-mobile" style="display:flex;align-items:center;gap:1rem;padding:1rem 1.5rem;border:1px solid rgba(201,197,203,0.3);background:rgba(255,255,255,0.5);backdrop-filter:blur(10px);">
            <span class="font-mono" style="font-size:0.6875rem;color:var(--outline);">CURRENT NODES:</span>
            <span class="font-mono" style="font-size:0.875rem;font-weight:700;">MUMBAI → DUBAI → RIYADH</span>
          </div>
        </div>
      </div>
    </section>

    <section class="r-section" style="background:var(--surface-container-low);padding:6rem 2rem;">
      <div style="max-width:1536px;margin:0 auto;">
        <div class="r-2col" style="display:grid;grid-template-columns:5fr 7fr;gap:4rem;align-items:flex-end;margin-bottom:6rem;">
          <div class="reveal-left">
            <h2 style="margin-bottom:2rem;">Built on Trust,<br>Executed with Precision.</h2>
            <p style="font-size:1.125rem;color:var(--on-surface-variant);font-weight:300;">We don't just supply products; we engineer supply chain stability. Our distributor program is designed for long-term equity, not short-term transactions.</p>
          </div>
          <div class="reveal-right r-hide-mobile" style="text-align:right;">
            <div class="font-mono" style="font-size:0.6875rem;letter-spacing:0.15em;color:var(--outline);border-bottom:1px solid var(--outline);padding-bottom:0.5rem;">LEDGER REF: IBG-2024-DISTRO</div>
          </div>
        </div>
        <div class="r-dist-values reveal-up" style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(201,197,203,0.2);">
          <div style="background:var(--surface);padding:3rem;" class="animate-underline">
            <span class="font-mono" style="color:var(--secondary);font-size:0.875rem;margin-bottom:1.5rem;display:block;">01 / MARGINS</span>
            <h3 style="font-size:1.5rem;margin-bottom:1rem;">Competitive Yields</h3>
            <p style="font-weight:300;margin-bottom:2rem;">Access exclusive factory-direct pricing structures designed to maximize your regional competitiveness and net profitability.</p>
            <div style="height:3px;width:0;background:var(--secondary);transition:width 0.5s;" class="underline-bar"></div>
          </div>
          <div style="background:var(--surface);padding:3rem;" class="animate-underline">
            <span class="font-mono" style="color:var(--secondary);font-size:0.875rem;margin-bottom:1.5rem;display:block;">02 / COMPLIANCE</span>
            <h3 style="font-size:1.5rem;margin-bottom:1rem;">Sovereign Reliability</h3>
            <p style="font-weight:300;margin-bottom:2rem;">Full regulatory alignment with GCC trade mandates. We handle the technical compliance, so you can focus on market expansion.</p>
            <div style="height:3px;width:0;background:var(--secondary);transition:width 0.5s;" class="underline-bar"></div>
          </div>
          <div style="background:var(--surface);padding:3rem;" class="animate-underline">
            <span class="font-mono" style="color:var(--secondary);font-size:0.875rem;margin-bottom:1.5rem;display:block;">03 / SUPPORT</span>
            <h3 style="font-size:1.5rem;margin-bottom:1rem;">Strategic Alignment</h3>
            <p style="font-weight:300;margin-bottom:2rem;">Dedicated account management providing real-time data on logistics, stock forecasting, and market trends in the Middle East.</p>
            <div style="height:3px;width:0;background:var(--secondary);transition:width 0.5s;" class="underline-bar"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="r-section" style="padding:6rem 2rem;">
      <div style="max-width:1536px;margin:0 auto;">
        <h2 class="reveal-up" style="text-align:center;margin-bottom:4rem;">The Onboarding Sequence</h2>
        <div class="r-onboard-grid reveal-up" style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;">
          <div class="onboard-wide" style="grid-column:span 2;background:white;padding:2.5rem;border:1px solid rgba(201,197,203,0.2);display:flex;flex-direction:column;justify-content:space-between;min-height:320px;box-shadow:0 1px 3px rgba(0,0,0,0.03);">
            <div><span class="font-mono" style="color:var(--outline);font-size:0.6875rem;">STEP 01</span><h4 style="font-size:1.5rem;margin-top:1rem;">Qualitative Assessment</h4></div>
            <p style="font-weight:300;">Submission of business profile and regional reach for internal compliance review.</p>
          </div>
          <div style="background:var(--primary);color:white;padding:2.5rem;display:flex;flex-direction:column;justify-content:space-between;min-height:320px;">
            <div><span class="font-mono" style="opacity:0.4;font-size:0.6875rem;">STEP 02</span><h4 style="font-size:1.5rem;margin-top:1rem;color:white;">Sample Validation</h4></div>
            <span class="material-symbols-outlined" style="font-size:2.5rem;color:var(--secondary-fixed);">package_2</span>
          </div>
          <div style="background:var(--surface-container-high);padding:2.5rem;display:flex;flex-direction:column;justify-content:space-between;min-height:320px;">
            <div><span class="font-mono" style="color:var(--outline);font-size:0.6875rem;">STEP 03</span><h4 style="font-size:1.5rem;margin-top:1rem;">Contract Finalization</h4></div>
            <p class="font-mono" style="font-size:0.875rem;text-transform:uppercase;">Terms: Net 30/60</p>
          </div>
          <div style="background:var(--secondary-container);padding:2.5rem;display:flex;flex-direction:column;justify-content:space-between;min-height:320px;">
            <span class="material-symbols-outlined" style="font-size:2.5rem;color:var(--on-secondary-container);">rocket_launch</span>
            <h4 style="font-size:1.5rem;color:var(--on-secondary-container);">Full Integration</h4>
          </div>
          <div class="onboard-wide" style="grid-column:span 3;position:relative;min-height:320px;overflow:hidden;">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqDSM54YbS_yGVeStaXtwDAROMGHXIOv95cNdXlRcobauKbO4DPs2d8PcpMuEd4lPPDoJg-Hao0RJgQa8UPWNB8CpUfmQdhPeH2_t0aMy3KVI0WfIUglqdCdE5JyxAAOz4tqXEhe4J6slS69FHpMdLeeOklBNW2_XW7ubLu8R8S9A9JFXBSQ7It6F-PH5AW4wSGs3DXaZ_ixShlDLoHsWr7SpyRgOUTiAV81kpM3m0-hAAbJJb2FI71hGIXoV0o_pvQ1Nb6zLwtkgR" alt="Distribution Center" style="width:100%;height:100%;object-fit:cover;" />
            <div style="position:absolute;inset:0;background:rgba(0,0,0,0.4);display:flex;align-items:center;padding:2.5rem;">
              <p style="color:white;font-family:var(--font-headline);font-size:1.875rem;font-weight:700;max-width:400px;">Scale from regional depot to national dominance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="r-section" style="background:var(--surface-container-lowest);padding:6rem 2rem;overflow:hidden;">
      <div style="max-width:1536px;margin:0 auto;" class="r-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:flex-start;">
        <div class="reveal-left">
          <h2 style="margin-bottom:2rem;">Formal Application</h2>
          <p style="font-size:1.25rem;color:var(--on-surface-variant);font-weight:300;margin-bottom:3rem;">Begin the partnership process by providing your enterprise details. Our relationship team will review and respond within 48 business hours.</p>
          <ul style="display:flex;flex-direction:column;gap:1.5rem;">
            <li style="display:flex;gap:1rem;align-items:flex-start;"><span class="material-symbols-outlined" style="color:var(--secondary);flex-shrink:0;">check_circle</span><div><p style="font-weight:700;color:var(--primary);">Verified Supply Lines</p><p style="font-size:0.875rem;">Direct access to IBG-certified manufacturing facilities.</p></div></li>
            <li style="display:flex;gap:1rem;align-items:flex-start;"><span class="material-symbols-outlined" style="color:var(--secondary);flex-shrink:0;">check_circle</span><div><p style="font-weight:700;color:var(--primary);">Inventory Priority</p><p style="font-size:0.875rem;">First-right refusal on new product shipments.</p></div></li>
            <li style="display:flex;gap:1rem;align-items:flex-start;"><span class="material-symbols-outlined" style="color:var(--secondary);flex-shrink:0;">check_circle</span><div><p style="font-weight:700;color:var(--primary);">Market Protection</p><p style="font-size:0.875rem;">Strategic regional exclusivity for high-performing partners.</p></div></li>
          </ul>
        </div>
        <div class="reveal-right" style="background:white;padding:3rem;box-shadow:0 25px 50px rgba(0,0,0,0.08);border-top:4px solid var(--secondary);">
          <form style="display:flex;flex-direction:column;gap:2.5rem;" onsubmit="event.preventDefault();">
            <div class="r-form-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:2.5rem;">
              <div class="ledger-field"><label>Full Name</label><input type="text" placeholder="Entry Required" /></div>
              <div class="ledger-field"><label>Professional Email</label><input type="email" placeholder="Entry Required" /></div>
            </div>
            <div class="ledger-field"><label>Organization Name</label><input type="text" placeholder="Entry Required" /></div>
            <div class="ledger-field"><label>Regional Market</label><select><option>Select Primary Jurisdiction</option><option>United Arab Emirates</option><option>Saudi Arabia</option><option>Qatar</option><option>Kuwait</option><option>Oman</option><option>Bahrain</option></select></div>
            <div class="ledger-field"><label>Projected Monthly Volume</label><input type="text" placeholder="Optional" /></div>
            <button class="btn btn-gold" type="submit" style="width:100%;justify-content:center;padding:1.25rem;font-size:1.125rem;">Submit Partnership Request</button>
            <p class="font-mono" style="text-align:center;font-size:0.625rem;color:var(--outline);text-transform:uppercase;letter-spacing:0.15em;">Confidential submission • Encrypted Ledger</p>
          </form>
        </div>
      </div>
    </section>

    <section class="r-section" style="background:var(--primary);color:white;padding:6rem 2rem;text-align:center;">
      <h2 class="reveal-up" style="color:white;max-width:800px;margin:0 auto 2.5rem;line-height:1.1;">Not ready for a full partnership?<br><span style="color:var(--secondary-fixed);">Test our quality first.</span></h2>
      <button class="btn" style="background:white;color:var(--primary);padding:1.25rem 2.5rem;font-size:1.125rem;" onclick="window.location.hash='/contact'">Request a Sample Kit</button>
    </section>
  `;
}
