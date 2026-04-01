/* ═══════════════════════════════════════════════════
   IndusBridge Global — Administrator Login Page
   ═══════════════════════════════════════════════════ */

export function renderAdminLoginPage() {
  return `
    <section class="admin-login-page" style="min-height:100vh;background:var(--surface-container-lowest);display:flex;flex-direction:column;">
      
      <!-- Top Nav Bar (standalone for this page) -->
      <nav class="admin-login-nav" style="
        display:flex;justify-content:space-between;align-items:center;
        padding:1.5rem 3rem;background:white;border-bottom:1px solid rgba(201,197,203,0.15);
      ">
        <span style="font-family:var(--font-headline);font-size:1.25rem;font-weight:700;color:var(--primary);letter-spacing:-0.04em;">IndusBridge Global</span>
        <div style="display:flex;gap:2.5rem;align-items:center;">
          <span class="admin-nav-link" style="font-family:var(--font-headline);font-size:0.875rem;font-weight:500;color:#71717a;cursor:default;">Platform</span>
          <span class="admin-nav-link" style="font-family:var(--font-headline);font-size:0.875rem;font-weight:500;color:#71717a;cursor:default;">Governance</span>
          <span class="admin-nav-link" style="font-family:var(--font-headline);font-size:0.875rem;font-weight:500;color:#71717a;cursor:default;">Network</span>
        </div>
        <div style="
          background:var(--primary);color:white;padding:0.75rem 1.75rem;
          font-family:var(--font-headline);font-size:0.8125rem;font-weight:700;
          letter-spacing:0.05em;text-transform:uppercase;cursor:default;
        ">Secure Login</div>
      </nav>

      <!-- Main Content -->
      <div class="admin-login-container" style="
        flex:1;display:flex;align-items:center;justify-content:center;
        padding:3rem 2rem;
      ">
        <div class="admin-login-card" style="
          display:grid;grid-template-columns:1fr 1fr;
          max-width:960px;width:100%;min-height:520px;
          background:white;box-shadow:0 25px 80px rgba(0,0,0,0.08);
          overflow:hidden;
        ">
          <!-- Left: Hero Image Panel -->
          <div class="admin-login-hero" style="
            position:relative;background:#0a1628;
            display:flex;flex-direction:column;justify-content:space-between;
            padding:3rem;overflow:hidden;
          ">
            <!-- Background image overlay -->
            <div style="
              position:absolute;inset:0;
              background:url('https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80') center/cover no-repeat;
              opacity:0.35;
            "></div>
            <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,22,40,0.6) 0%,rgba(10,22,40,0.85) 100%);"></div>
            
            <!-- Content above overlay -->
            <div style="position:relative;z-index:1;">
              <span style="
                font-family:var(--font-mono);font-size:0.625rem;
                text-transform:uppercase;letter-spacing:0.3em;
                color:#d4a017;display:block;margin-bottom:2rem;
              ">Sovereign Ledger v4.0</span>
              <h2 style="
                font-family:var(--font-headline);font-size:clamp(2rem,4vw,2.75rem);
                font-weight:700;color:white;line-height:1.1;
                letter-spacing:-0.03em;
              ">
                Architecting<br>the future of<br>Indian exports.
              </h2>
            </div>
            
            <div style="position:relative;z-index:1;">
              <p style="
                font-family:var(--font-body);font-size:0.875rem;
                color:rgba(255,255,255,0.6);font-style:italic;
                line-height:1.6;max-width:320px;
              ">
                "The Sovereign Ledger: Every enquiry is a gateway to a new global partnership."
              </p>
            </div>
          </div>

          <!-- Right: Login Form -->
          <div class="admin-login-form-panel" style="
            padding:3.5rem 3rem;display:flex;flex-direction:column;justify-content:center;
          ">
            <div>
              <h1 style="
                font-family:var(--font-headline);font-size:1.75rem;
                font-weight:700;color:var(--primary);margin-bottom:0.75rem;
                letter-spacing:-0.03em;
              ">Administrator Access</h1>
              <p style="
                font-size:0.9375rem;color:var(--on-surface-variant);
                line-height:1.6;margin-bottom:2.5rem;
              ">Provide your security credentials to access the global trade terminal.</p>

              <!-- Email Field -->
              <div style="margin-bottom:2rem;">
                <label style="
                  font-family:var(--font-mono);font-size:0.625rem;
                  text-transform:uppercase;letter-spacing:0.2em;
                  color:var(--primary);font-weight:700;display:block;margin-bottom:0.75rem;
                ">Administrator Email</label>
                <div style="position:relative;">
                  <input type="email" id="admin-email" placeholder="admin@indusbridge.global" style="
                    width:100%;padding:1rem 3rem 1rem 1rem;
                    border:1px solid #e4e4e7;background:var(--surface-container-lowest);
                    font-family:var(--font-body);font-size:0.9375rem;
                    color:var(--primary);border-radius:0.25rem;
                    transition:border-color 0.3s;outline:none;
                    box-sizing:border-box;
                  "/>
                  <span class="material-symbols-outlined" style="
                    position:absolute;right:1rem;top:50%;transform:translateY(-50%);
                    font-size:1.25rem;color:#a1a1aa;
                  ">alternate_email</span>
                </div>
              </div>

              <!-- Password Field -->
              <div style="margin-bottom:2rem;">
                <label style="
                  font-family:var(--font-mono);font-size:0.625rem;
                  text-transform:uppercase;letter-spacing:0.2em;
                  color:var(--primary);font-weight:700;display:block;margin-bottom:0.75rem;
                ">Security Access Key</label>
                <div style="position:relative;">
                  <input type="password" id="admin-password" placeholder="••••••••••••" style="
                    width:100%;padding:1rem 3rem 1rem 1rem;
                    border:1px solid #e4e4e7;background:var(--surface-container-lowest);
                    font-family:var(--font-body);font-size:0.9375rem;
                    color:var(--primary);border-radius:0.25rem;
                    transition:border-color 0.3s;outline:none;
                    box-sizing:border-box;
                  "/>
                  <button type="button" id="toggle-password-btn" style="
                    position:absolute;right:1rem;top:50%;transform:translateY(-50%);
                    background:none;border:none;cursor:pointer;padding:0;
                    color:#a1a1aa;display:flex;
                  ">
                    <span class="material-symbols-outlined" style="font-size:1.25rem;">visibility_off</span>
                  </button>
                </div>
              </div>

              <!-- Error Message (hidden by default) -->
              <div id="admin-login-error" style="
                display:none;padding:0.75rem 1rem;margin-bottom:1.5rem;
                background:#fef2f2;border:1px solid #fecaca;border-radius:0.25rem;
                font-family:var(--font-mono);font-size:0.75rem;
                text-transform:uppercase;letter-spacing:0.1em;color:#dc2626;
                align-items:center;gap:0.5rem;
              ">
                <span class="material-symbols-outlined" style="font-size:1rem;">error</span>
                <span>Invalid credentials. Access denied.</span>
              </div>

              <!-- Login Button -->
              <button type="button" id="admin-login-btn" style="
                width:100%;padding:1.125rem;background:linear-gradient(135deg,#d4a017 0%,#b8860b 50%,#daa520 100%);
                color:white;border:none;cursor:pointer;
                font-family:var(--font-mono);font-size:0.8125rem;font-weight:700;
                letter-spacing:0.15em;text-transform:uppercase;
                border-radius:0.25rem;transition:all 0.3s cubic-bezier(0.16,1,0.3,1);
                box-shadow:0 4px 20px rgba(212,160,23,0.3);
              ">Secure Login</button>

              <!-- Bottom Links -->
              <div style="
                display:flex;justify-content:space-between;margin-top:1.5rem;
              ">
                <span style="
                  font-family:var(--font-mono);font-size:0.625rem;
                  text-transform:uppercase;letter-spacing:0.1em;color:#a1a1aa;cursor:default;
                ">Forgot Protocol?</span>
                <span style="
                  font-family:var(--font-mono);font-size:0.625rem;
                  text-transform:uppercase;letter-spacing:0.1em;color:#a1a1aa;cursor:default;
                ">Technical Support</span>
              </div>

              <!-- Divider -->
              <div style="height:1px;background:#e4e4e7;margin:2rem 0 1.5rem;"></div>

              <!-- Server Status -->
              <div style="display:flex;align-items:center;gap:0.5rem;">
                <div style="
                  width:8px;height:8px;border-radius:50%;background:#ef4444;
                  box-shadow:0 0 8px rgba(239,68,68,0.5);
                  animation:pulse-dot 2s ease-in-out infinite;
                "></div>
                <span style="
                  font-family:var(--font-mono);font-size:0.6875rem;
                  text-transform:uppercase;letter-spacing:0.05em;color:#71717a;
                ">Secure Server Link: <strong style="color:var(--primary);">MUMBAI-01</strong> // ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="admin-login-footer" style="
        display:flex;justify-content:space-between;align-items:center;
        padding:1.5rem 3rem;border-top:1px solid #e4e4e7;background:white;
        flex-wrap:wrap;gap:1rem;
      ">
        <div style="display:flex;align-items:center;gap:1.5rem;">
          <span style="font-family:var(--font-headline);font-size:0.875rem;font-weight:700;color:var(--primary);font-style:italic;">IndusBridge Global</span>
          <span style="font-family:var(--font-mono);font-size:0.625rem;text-transform:uppercase;letter-spacing:0.1em;color:#a1a1aa;">
            © 2024 IndusBridge Global. Sovereign Ledger Precision.
          </span>
        </div>
        <div style="display:flex;gap:2rem;">
          <span style="font-family:var(--font-mono);font-size:0.625rem;text-transform:uppercase;letter-spacing:0.1em;color:#a1a1aa;">Terms of Trade</span>
          <span style="font-family:var(--font-mono);font-size:0.625rem;text-transform:uppercase;letter-spacing:0.1em;color:#a1a1aa;">Privacy Protocol</span>
          <span style="font-family:var(--font-mono);font-size:0.625rem;text-transform:uppercase;letter-spacing:0.1em;color:#a1a1aa;">Global Support</span>
        </div>
      </footer>
    </section>
  `;
}

export function initAdminLogin() {
  const emailInput = document.getElementById('admin-email');
  const passwordInput = document.getElementById('admin-password');
  const loginBtn = document.getElementById('admin-login-btn');
  const errorDiv = document.getElementById('admin-login-error');
  const toggleBtn = document.getElementById('toggle-password-btn');

  if (!emailInput || !passwordInput || !loginBtn) return;

  // Toggle password visibility
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const icon = toggleBtn.querySelector('.material-symbols-outlined');
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.textContent = 'visibility';
      } else {
        passwordInput.type = 'password';
        icon.textContent = 'visibility_off';
      }
    });
  }

  // Focus styles
  [emailInput, passwordInput].forEach(input => {
    input.addEventListener('focus', () => {
      input.style.borderColor = '#d4a017';
      input.style.boxShadow = '0 0 0 3px rgba(212,160,23,0.1)';
    });
    input.addEventListener('blur', () => {
      input.style.borderColor = '#e4e4e7';
      input.style.boxShadow = 'none';
    });
  });

  // Hover/active on login button
  loginBtn.addEventListener('mouseenter', () => {
    loginBtn.style.transform = 'translateY(-1px)';
    loginBtn.style.boxShadow = '0 8px 30px rgba(212,160,23,0.4)';
  });
  loginBtn.addEventListener('mouseleave', () => {
    loginBtn.style.transform = 'translateY(0)';
    loginBtn.style.boxShadow = '0 4px 20px rgba(212,160,23,0.3)';
  });

  // Login validation
  function attemptLogin() {
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Static credentials
    if (email === 'indusbridgeglobal@gmail.com' && password === 'HySt@IBG26') {
      // Success animation
      loginBtn.innerHTML = `
        <span style="display:flex;align-items:center;gap:0.5rem;justify-content:center;">
          <span class="material-symbols-outlined" style="font-size:1.125rem;">check_circle</span>
          Access Granted
        </span>
      `;
      loginBtn.style.background = '#166534';
      loginBtn.style.boxShadow = '0 4px 20px rgba(22,101,52,0.3)';
      loginBtn.style.pointerEvents = 'none';
      errorDiv.style.display = 'none';

      // Store auth and redirect to dashboard
      sessionStorage.setItem('ibg-admin-auth', 'true');
      setTimeout(() => {
        window.location.hash = '/IBGDashboard';
      }, 1000);
    } else {
      // Error shake
      errorDiv.style.display = 'flex';
      loginBtn.style.transform = 'translateX(-6px)';
      setTimeout(() => { loginBtn.style.transform = 'translateX(6px)'; }, 80);
      setTimeout(() => { loginBtn.style.transform = 'translateX(-3px)'; }, 160);
      setTimeout(() => { loginBtn.style.transform = 'translateX(0)'; }, 240);
      
      // Highlight fields
      [emailInput, passwordInput].forEach(input => {
        input.style.borderColor = '#fca5a5';
        setTimeout(() => { input.style.borderColor = '#e4e4e7'; }, 2000);
      });
    }
  }

  loginBtn.addEventListener('click', attemptLogin);

  // Allow Enter key to submit
  [emailInput, passwordInput].forEach(input => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') attemptLogin();
    });
  });
}
