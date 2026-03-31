/* IndusBridge Global — Contact / Sample Kit Request Page */

export function renderContactPage() {
  return `
    <section style="min-height:100vh;background:var(--surface-container-lowest);padding:6rem 0 0;">
      <div style="max-width:1536px;margin:0 auto;padding:0 2rem;">
        <div class="r-contact-grid" style="display:grid;grid-template-columns:1fr 1.2fr;gap:0;min-height:calc(100vh - 6rem);">
          
          <!-- Left Column: Context & Contact -->
          <div class="r-contact-left" style="padding:4rem 4rem 4rem 0;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span class="font-mono reveal-up" style="color:var(--secondary);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.3em;display:block;margin-bottom:2rem;">Sovereign Partnership</span>
              <h1 class="reveal-up" style="font-size:clamp(3rem,6vw,5rem);letter-spacing:-0.04em;line-height:0.95;margin-bottom:2.5rem;text-transform:uppercase;">
                The<br>Architecture<br>of Trade
              </h1>
              <p class="reveal-up" style="font-size:1.125rem;color:var(--on-surface-variant);line-height:1.7;max-width:420px;">
                IndusBridge Global facilitates the movement of value across borders through our proprietary <strong style="font-style:italic;">Sovereign Ledger</strong>. We invite institutional partners to join a network defined by precision, transparency, and strategic growth.
              </p>
            </div>

            <div style="margin-top:4rem;" class="reveal-up">
              <!-- Contact Details -->
              <div style="margin-bottom:2.5rem;">
                <span class="font-mono" style="font-size:0.625rem;text-transform:uppercase;letter-spacing:0.2em;color:var(--outline);display:block;margin-bottom:0.5rem;">Electronic Correspondence</span>
                <a href="mailto:reach@indusbg.com" style="font-family:var(--font-headline);font-size:1.5rem;font-weight:700;color:var(--primary);">reach@indusbg.com</a>
              </div>
              <div style="margin-bottom:2.5rem;">
                <span class="font-mono" style="font-size:0.625rem;text-transform:uppercase;letter-spacing:0.2em;color:var(--outline);display:block;margin-bottom:0.5rem;">Direct Terminal</span>
                <span style="font-family:var(--font-headline);font-size:1.5rem;font-weight:700;color:var(--primary);">+91 1111-111-111</span>
              </div>
              <div style="margin-bottom:2.5rem;">
                <span class="font-mono" style="font-size:0.625rem;text-transform:uppercase;letter-spacing:0.2em;color:var(--outline);display:block;margin-bottom:0.5rem;">Registered Nexus</span>
                <span style="font-family:var(--font-headline);font-size:1.5rem;font-weight:700;color:var(--primary);line-height:1.3;display:block;">NM, Maharashtra<br>Republic of India</span>
              </div>

              <!-- Divider -->
              <div style="height:1px;background:var(--outline-variant);margin:2rem 0;"></div>

              <!-- Security Notice -->
              <div style="display:flex;align-items:flex-start;gap:1rem;">
                <span class="material-symbols-outlined" style="color:var(--outline);font-size:1.25rem;margin-top:0.125rem;">lock</span>
                <p class="font-mono" style="font-size:0.625rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--outline);line-height:1.8;">
                  All communications are encrypted and logged within the IndusBridge Sovereign Ledger for audit integrity.
                </p>
              </div>
            </div>
          </div>

          <!-- Right Column: The Form -->
          <div class="r-contact-right" style="background:var(--surface-container-low);padding:4rem;display:flex;flex-direction:column;justify-content:center;" class="reveal-right">
            <form id="sample-kit-form" style="display:flex;flex-direction:column;gap:3rem;" onsubmit="return false;">
              
              <!-- Row 1: Name + Email -->
              <div class="r-form-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:2.5rem;">
                <div class="ledger-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="ALEXANDER VANCE" required id="contact-name" />
                </div>
                <div class="ledger-field">
                  <label>Professional Email</label>
                  <input type="email" placeholder="VANCE@CORP.GLOBAL" required id="contact-email" />
                </div>
              </div>

              <!-- Row 2: Phone + Company -->
              <div class="r-form-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:2.5rem;">
                <div class="ledger-field">
                  <label>Phone Number</label>
                  <div style="display:flex;align-items:center;gap:0.5rem;">
                    <span class="font-mono" style="font-size:0.875rem;color:var(--outline);padding-bottom:0.5rem;">+</span>
                    <input type="tel" placeholder="1 000 000 0000" id="contact-phone" style="flex:1;" />
                  </div>
                </div>
                <div class="ledger-field">
                  <label>Company Name</label>
                  <input type="text" placeholder="VANCE LOGISTICS INC" required id="contact-company" />
                </div>
              </div>

              <!-- Row 3: Company Type -->
              <div class="ledger-field">
                <label>Company Type</label>
                <select id="contact-type" required>
                  <option value="" disabled>Select Type</option>
                  <option value="distributor" selected>DISTRIBUTOR</option>
                  <option value="wholesaler">WHOLESALER</option>
                  <option value="retailer">RETAILER</option>
                  <option value="importer">IMPORTER</option>
                  <option value="trading-company">TRADING COMPANY</option>
                  <option value="other">OTHER</option>
                </select>
              </div>

              <!-- Row 4: Website + LinkedIn -->
              <div class="r-form-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:2.5rem;">
                <div class="ledger-field">
                  <label>Website (Optional)</label>
                  <input type="url" placeholder="WWW.VANCELOGISTICS.COM" id="contact-website" />
                </div>
                <div class="ledger-field">
                  <label>LinkedIn Profile (Optional)</label>
                  <input type="text" placeholder="LINKEDIN.COM/IN/AVANCE" id="contact-linkedin" />
                </div>
              </div>

              <!-- Submit Button -->
              <button type="submit" id="submit-inquiry-btn" style="
                width:100%;
                background:var(--primary);
                color:var(--on-primary);
                padding:1.5rem 2.5rem;
                font-family:var(--font-mono);
                font-size:0.9375rem;
                font-weight:700;
                letter-spacing:0.15em;
                text-transform:uppercase;
                display:flex;
                align-items:center;
                justify-content:space-between;
                cursor:pointer;
                border:none;
                transition:all 0.3s cubic-bezier(0.16,1,0.3,1);
              ">
                <span>Submit Inquiry</span>
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>

              <!-- Disclaimer -->
              <p class="font-mono" style="text-align:center;font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.15em;color:var(--outline);line-height:1.8;">
                By submitting, you acknowledge the binding confidentiality of this communication within the IB Global framework.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initContactForm() {
  const form = document.getElementById('sample-kit-form');
  const submitBtn = document.getElementById('submit-inquiry-btn');
  
  if (!form || !submitBtn) return;

  // Hover effect on submit button
  submitBtn.addEventListener('mouseenter', () => {
    submitBtn.style.background = '#27272a';
    submitBtn.style.transform = 'scale(1.01)';
  });
  submitBtn.addEventListener('mouseleave', () => {
    submitBtn.style.background = 'var(--primary)';
    submitBtn.style.transform = 'scale(1)';
  });

  // Form submission
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contact-name')?.value?.trim();
    const email = document.getElementById('contact-email')?.value?.trim();
    const company = document.getElementById('contact-company')?.value?.trim();
    
    // Basic validation
    if (!name || !email || !company) {
      // Shake the button
      submitBtn.style.transform = 'translateX(-8px)';
      setTimeout(() => { submitBtn.style.transform = 'translateX(8px)'; }, 100);
      setTimeout(() => { submitBtn.style.transform = 'translateX(-4px)'; }, 200);
      setTimeout(() => { submitBtn.style.transform = 'translateX(0)'; }, 300);
      return;
    }

    // Show success state
    submitBtn.innerHTML = `
      <span>Inquiry Submitted</span>
      <span class="material-symbols-outlined">check_circle</span>
    `;
    submitBtn.style.background = '#166534';
    submitBtn.style.pointerEvents = 'none';

    // Set flag and redirect to blog after brief delay
    sessionStorage.setItem('inquiry-submitted', 'true');
    setTimeout(() => {
      window.location.hash = '/blog';
    }, 1500);
  });
}
