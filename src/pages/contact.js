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
                <a href="mailto:indusbridgeglobal@gmail.com" style="font-family:var(--font-headline);font-size:1.5rem;font-weight:700;color:var(--primary);">indusbridgeglobal@gmail.com</a>
              </div>
              <div style="margin-bottom:2.5rem;">
                <span class="font-mono" style="font-size:0.625rem;text-transform:uppercase;letter-spacing:0.2em;color:var(--outline);display:block;margin-bottom:0.5rem;">Direct Terminal</span>
                <span style="font-family:var(--font-headline);font-size:1.5rem;font-weight:700;color:var(--primary);">+91 1111-111-111</span>
              </div>
              <div style="margin-bottom:2.5rem;">
                <span class="font-mono" style="font-size:0.625rem;text-transform:uppercase;letter-spacing:0.2em;color:var(--outline);display:block;margin-bottom:0.5rem;">WhatsApp Channel</span>
                <a href="https://wa.me/911111111111" target="_blank" rel="noopener noreferrer" style="font-family:var(--font-headline);font-size:1.5rem;font-weight:700;color:var(--primary);display:flex;align-items:center;gap:0.75rem;text-decoration:none;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </a>
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
