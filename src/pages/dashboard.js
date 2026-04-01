/* ═══════════════════════════════════════════════════
   IndusBridge Global — Indus Meridian Dashboard
   ═══════════════════════════════════════════════════ */

export function renderDashboardPage() {
  // Auth guard
  if (sessionStorage.getItem('ibg-admin-auth') !== 'true') {
    setTimeout(() => { window.location.hash = '/IBGAdminPg'; }, 0);
    return `<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#09090b;"><p style="font-family:var(--font-mono);color:#71717a;">Redirecting to login…</p></div>`;
  }

  return `
    <section class="idm-dashboard" style="display:flex;min-height:100vh;background:#f5f5f5;font-family:var(--font-body);">

      <!-- ═══ LEFT SIDEBAR ═══ -->
      <aside class="idm-sidebar" style="
        width:220px;min-height:100vh;background:#0a0a0a;
        display:flex;flex-direction:column;justify-content:space-between;
        position:fixed;left:0;top:0;bottom:0;z-index:100;
        padding:0;flex-shrink:0;
      ">
        <div>
          <!-- Logo -->
          <div style="padding:2rem 1.5rem 2.5rem;">
            <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem;">
              <div style="
                width:32px;height:32px;background:linear-gradient(135deg,#d4a017,#b8860b);
                display:flex;align-items:center;justify-content:center;
                font-family:var(--font-headline);font-weight:900;color:white;font-size:0.875rem;
              ">M</div>
              <div>
                <span style="font-family:var(--font-headline);font-size:0.9375rem;font-weight:800;color:white;letter-spacing:0.08em;text-transform:uppercase;display:block;line-height:1.2;">INDUS</span>
                <span style="font-family:var(--font-headline);font-size:0.9375rem;font-weight:800;color:white;letter-spacing:0.08em;text-transform:uppercase;display:block;line-height:1.2;">MERIDIAN</span>
              </div>
            </div>
            <span style="font-family:var(--font-mono);font-size:0.5rem;text-transform:uppercase;letter-spacing:0.2em;color:#525252;display:block;margin-top:0.25rem;">Global Sovereign Ledger</span>
          </div>

          <!-- Nav Items -->
          <nav style="display:flex;flex-direction:column;gap:0.25rem;">
            <a href="#" class="idm-nav-item idm-nav-active" data-tab="leads" style="
              display:flex;align-items:center;gap:0.875rem;padding:0.875rem 1.5rem;
              color:#d4a017;background:linear-gradient(90deg,rgba(212,160,23,0.15),transparent);
              border-left:3px solid #d4a017;text-decoration:none;
              font-family:var(--font-headline);font-size:0.8125rem;font-weight:600;
              transition:all 0.2s;
            ">
              <span class="material-symbols-outlined" style="font-size:1.25rem;">leaderboard</span>
              Leads
            </a>
            <a href="#" class="idm-nav-item" data-tab="products" style="
              display:flex;align-items:center;gap:0.875rem;padding:0.875rem 1.5rem;
              color:#71717a;border-left:3px solid transparent;text-decoration:none;
              font-family:var(--font-headline);font-size:0.8125rem;font-weight:500;
              transition:all 0.2s;
            ">
              <span class="material-symbols-outlined" style="font-size:1.25rem;">inventory_2</span>
              Products
            </a>
            <a href="#" class="idm-nav-item" data-tab="blog" style="
              display:flex;align-items:center;gap:0.875rem;padding:0.875rem 1.5rem;
              color:#71717a;border-left:3px solid transparent;text-decoration:none;
              font-family:var(--font-headline);font-size:0.8125rem;font-weight:500;
              transition:all 0.2s;
            ">
              <span class="material-symbols-outlined" style="font-size:1.25rem;">article</span>
              Blog
            </a>
            <a href="#" class="idm-nav-item" data-tab="settings" style="
              display:flex;align-items:center;gap:0.875rem;padding:0.875rem 1.5rem;
              color:#71717a;border-left:3px solid transparent;text-decoration:none;
              font-family:var(--font-headline);font-size:0.8125rem;font-weight:500;
              transition:all 0.2s;
            ">
              <span class="material-symbols-outlined" style="font-size:1.25rem;">settings</span>
              Settings
            </a>
          </nav>
        </div>

        <!-- Sidebar Bottom -->
        <div style="padding:1.5rem;">
          <button id="idm-new-shipment" style="
            width:100%;padding:0.875rem;background:linear-gradient(135deg,#d4a017,#b8860b);
            color:white;border:none;cursor:pointer;
            font-family:var(--font-mono);font-size:0.6875rem;font-weight:700;
            letter-spacing:0.1em;text-transform:uppercase;
            display:flex;align-items:center;justify-content:center;gap:0.5rem;
            margin-bottom:1.5rem;transition:all 0.3s;
          ">
            <span class="material-symbols-outlined" style="font-size:1rem;">local_shipping</span>
            New Shipment
          </button>
          <a href="#" style="display:flex;align-items:center;gap:0.625rem;color:#525252;font-size:0.8125rem;text-decoration:none;padding:0.5rem 0;transition:color 0.2s;">
            <span class="material-symbols-outlined" style="font-size:1.125rem;">support_agent</span>
            Support
          </a>
          <a href="#" id="idm-sign-out" style="display:flex;align-items:center;gap:0.625rem;color:#525252;font-size:0.8125rem;text-decoration:none;padding:0.5rem 0;transition:color 0.2s;">
            <span class="material-symbols-outlined" style="font-size:1.125rem;">logout</span>
            Sign Out
          </a>
        </div>
      </aside>

      <!-- ═══ MAIN AREA ═══ -->
      <div class="dashboard-view" id="view-leads" style="display:flex;flex:1;margin-left:220px;flex-direction:column;min-height:100vh;">

        <!-- ═══ TOP BAR ═══ -->
        <header class="idm-topbar" style="
          display:flex;align-items:center;justify-content:space-between;
          padding:1rem 2rem;background:white;
          border-bottom:1px solid rgba(0,0,0,0.06);
          position:sticky;top:0;z-index:50;
        ">
          <!-- Left: Title -->
          <div>
            <span style="font-family:var(--font-headline);font-size:1.5rem;font-weight:700;color:#0a0a0a;letter-spacing:-0.03em;">Trade</span>
            <span style="font-family:var(--font-headline);font-size:1.5rem;font-weight:700;color:#0a0a0a;letter-spacing:-0.03em;display:block;margin-top:-0.25rem;">Intelligence</span>
          </div>

          <!-- Center: Search -->
          <div style="display:flex;align-items:center;gap:1rem;flex:1;max-width:400px;margin:0 2rem;">
            <div style="
              display:flex;align-items:center;gap:0.5rem;flex:1;
              background:#f5f5f5;padding:0.625rem 1rem;
              border:1px solid rgba(0,0,0,0.06);
            ">
              <span class="material-symbols-outlined" style="font-size:1.125rem;color:#a1a1aa;">search</span>
              <input type="text" placeholder="Global Ledger Search..." style="
                border:none;background:transparent;font-family:var(--font-mono);
                font-size:0.75rem;color:#0a0a0a;width:100%;outline:none;
                letter-spacing:0.02em;
              "/>
            </div>
            <button style="
              background:none;border:none;cursor:pointer;
              font-family:var(--font-mono);font-size:0.6875rem;font-weight:700;
              color:#d4a017;letter-spacing:0.05em;text-transform:uppercase;
              white-space:nowrap;
            ">ADD LEAD</button>
          </div>

          <!-- Right: Actions & Profile -->
          <div style="display:flex;align-items:center;gap:1.25rem;">
            <button style="background:none;border:none;cursor:pointer;position:relative;color:#52525b;">
              <span class="material-symbols-outlined" style="font-size:1.375rem;">notifications</span>
              <div style="position:absolute;top:-2px;right:-2px;width:8px;height:8px;background:#ef4444;border-radius:50%;"></div>
            </button>
            <button style="background:none;border:none;cursor:pointer;color:#52525b;">
              <span class="material-symbols-outlined" style="font-size:1.375rem;">help</span>
            </button>
            <div style="display:flex;align-items:center;gap:0.75rem;padding-left:1rem;border-left:1px solid rgba(0,0,0,0.08);">
              <div style="text-align:right;">
                <span style="font-family:var(--font-headline);font-size:0.8125rem;font-weight:600;color:#0a0a0a;display:block;line-height:1.2;">M. Al-Zahrani</span>
                <span style="font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.1em;color:#a1a1aa;">Executive Partner</span>
              </div>
              <div style="
                width:36px;height:36px;border-radius:50%;
                background:linear-gradient(135deg,#d4a017,#7f5600);
                display:flex;align-items:center;justify-content:center;
                font-family:var(--font-headline);font-weight:700;color:white;font-size:0.75rem;
              ">MA</div>
            </div>
          </div>
        </header>

        <!-- ═══ DASHBOARD CONTENT ═══ -->
        <main style="flex:1;padding:2rem;overflow-y:auto;">

          <!-- Section Header -->
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:2rem;">
            <div>
              <span style="font-family:var(--font-mono);font-size:0.625rem;text-transform:uppercase;letter-spacing:0.25em;color:#d4a017;font-weight:600;display:block;margin-bottom:0.5rem;">Strategic Insights</span>
              <h1 style="font-family:var(--font-headline);font-size:2rem;font-weight:700;color:#0a0a0a;letter-spacing:-0.03em;margin:0;">Analytics Overview</h1>
            </div>
            <div style="display:flex;gap:0.75rem;align-items:center;">
              <div style="
                padding:0.5rem 1rem;border:1px solid rgba(0,0,0,0.1);
                font-family:var(--font-mono);font-size:0.75rem;color:#0a0a0a;
                background:white;display:flex;align-items:center;gap:0.5rem;
              ">Q4 2024</div>
              <button style="
                padding:0.5rem 1.25rem;background:#0a0a0a;color:white;border:none;
                font-family:var(--font-mono);font-size:0.6875rem;font-weight:600;
                letter-spacing:0.05em;text-transform:uppercase;cursor:pointer;
                display:flex;align-items:center;gap:0.5rem;
              ">
                <span class="material-symbols-outlined" style="font-size:0.875rem;">download</span>
                Report.PDF
              </button>
            </div>
          </div>

          <!-- ═══ ANALYTICS GRID ═══ -->
          <div class="idm-analytics-grid" style="display:grid;grid-template-columns:1.4fr 1fr;gap:1.5rem;margin-bottom:2.5rem;">

            <!-- GCC Lead Intensity Map -->
            <div style="background:white;padding:2rem;position:relative;overflow:hidden;">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.5rem;">
                <div>
                  <h3 style="font-family:var(--font-headline);font-size:1.125rem;font-weight:700;color:#0a0a0a;margin:0 0 0.25rem;">GCC Incoming Lead Intensity</h3>
                  <span style="font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.15em;color:#a1a1aa;">Geospatial Distribution / Real-Time</span>
                </div>
                <div style="display:flex;gap:1rem;">
                  <div style="display:flex;align-items:center;gap:0.375rem;">
                    <div style="width:8px;height:8px;background:#d4a017;"></div>
                    <span style="font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.1em;color:#71717a;">High Volume</span>
                  </div>
                  <div style="display:flex;align-items:center;gap:0.375rem;">
                    <div style="width:8px;height:8px;background:#27272a;"></div>
                    <span style="font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.1em;color:#71717a;">Emerging</span>
                  </div>
                </div>
              </div>

              <!-- Map Visualization -->
              <div style="
                background:#e8e5de;height:280px;position:relative;overflow:hidden;
                display:flex;align-items:center;justify-content:center;
              ">
                <!-- Stylized map SVG -->
                <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;opacity:0.2;">
                  <path d="M120 180 Q140 160 180 170 Q220 180 240 160 Q260 140 300 150 Q340 160 360 140 Q380 120 400 130" stroke="#0a0a0a" stroke-width="1" fill="none"/>
                  <path d="M160 200 Q200 190 240 200 Q280 210 320 195 Q360 180 380 190" stroke="#0a0a0a" stroke-width="0.5" fill="none"/>
                  <!-- Middle East region blob -->
                  <ellipse cx="320" cy="160" rx="60" ry="40" fill="#d4d0c8" opacity="0.5"/>
                  <ellipse cx="200" cy="190" rx="50" ry="35" fill="#d4d0c8" opacity="0.3"/>
                </svg>

                <!-- Map dots -->
                <div style="position:absolute;left:30%;top:45%;">
                  <div style="width:12px;height:12px;background:#d4a017;border-radius:50%;box-shadow:0 0 12px rgba(212,160,23,0.5);"></div>
                </div>
                <div style="position:absolute;left:55%;top:35%;">
                  <div style="width:16px;height:16px;background:#d4a017;border-radius:50%;box-shadow:0 0 16px rgba(212,160,23,0.6);animation:pulse-dot 2s ease-in-out infinite;"></div>
                </div>
                <div style="position:absolute;left:65%;top:50%;">
                  <div style="width:10px;height:10px;background:#d4a017;border-radius:50%;box-shadow:0 0 10px rgba(212,160,23,0.4);"></div>
                </div>
                <div style="position:absolute;left:45%;top:55%;">
                  <div style="width:8px;height:8px;background:#27272a;border-radius:50%;box-shadow:0 0 8px rgba(39,39,42,0.3);"></div>
                </div>

                <!-- Active Hub Label -->
                <div style="
                  position:absolute;right:1.5rem;bottom:1.5rem;
                  background:rgba(10,10,10,0.9);padding:0.75rem 1rem;
                ">
                  <span style="font-family:var(--font-mono);font-size:0.625rem;text-transform:uppercase;letter-spacing:0.1em;color:#71717a;display:block;">Active Hub: <strong style="color:white;">DUBAI_DXB</strong></span>
                  <span style="font-family:var(--font-mono);font-size:0.6875rem;color:#22c55e;font-weight:600;">+12.4% VOLUME_GROWTH</span>
                </div>
              </div>
            </div>

            <!-- Right Column: Lead Volume + Partner Type -->
            <div style="display:flex;flex-direction:column;gap:1.5rem;">

              <!-- Lead Volume Bar Chart -->
              <div style="background:#d4a017;padding:1.75rem;flex:1;">
                <h3 style="font-family:var(--font-headline);font-size:1.125rem;font-weight:700;color:white;margin:0 0 0.25rem;">Lead Volume</h3>
                <span style="font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.15em;color:rgba(255,255,255,0.6);">Monthly Aggregation</span>

                <!-- Bar Chart -->
                <div style="display:flex;align-items:flex-end;gap:0.5rem;height:120px;margin-top:1.25rem;">
                  <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:0.25rem;">
                    <div style="width:100%;height:40px;background:rgba(0,0,0,0.3);"></div>
                  </div>
                  <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:0.25rem;">
                    <div style="width:100%;height:55px;background:rgba(0,0,0,0.3);"></div>
                  </div>
                  <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:0.25rem;">
                    <div style="width:100%;height:35px;background:rgba(0,0,0,0.3);"></div>
                  </div>
                  <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:0.25rem;">
                    <div style="width:100%;height:70px;background:rgba(0,0,0,0.3);"></div>
                  </div>
                  <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:0.25rem;">
                    <span style="font-family:var(--font-mono);font-size:0.5rem;color:rgba(255,255,255,0.7);text-transform:uppercase;">Dec</span>
                    <div style="width:100%;height:100px;background:rgba(0,0,0,0.5);"></div>
                  </div>
                  <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:0.25rem;">
                    <div style="width:100%;height:45px;background:rgba(0,0,0,0.2);"></div>
                  </div>
                </div>
              </div>

              <!-- Partner Type Donut -->
              <div style="background:white;padding:1.75rem;flex:1;display:flex;gap:1.5rem;align-items:center;">
                <div style="flex:1;">
                  <h3 style="font-family:var(--font-headline);font-size:1.125rem;font-weight:700;color:#0a0a0a;margin:0 0 0.25rem;">Partner Type</h3>
                  <span style="font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.15em;color:#a1a1aa;display:block;margin-bottom:1.25rem;">Composition</span>

                  <div style="display:flex;flex-direction:column;gap:0.75rem;">
                    <div style="display:flex;align-items:center;gap:0.5rem;">
                      <div style="width:10px;height:10px;background:#0a0a0a;"></div>
                      <span style="font-family:var(--font-mono);font-size:0.6875rem;color:#52525b;text-transform:uppercase;letter-spacing:0.05em;">Logistics (42%)</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:0.5rem;">
                      <div style="width:10px;height:10px;background:#d4a017;"></div>
                      <span style="font-family:var(--font-mono);font-size:0.6875rem;color:#52525b;text-transform:uppercase;letter-spacing:0.05em;">Retail (31%)</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:0.5rem;">
                      <div style="width:10px;height:10px;background:#d4d4d8;"></div>
                      <span style="font-family:var(--font-mono);font-size:0.6875rem;color:#52525b;text-transform:uppercase;letter-spacing:0.05em;">Energy (27%)</span>
                    </div>
                  </div>
                </div>

                <!-- Donut Chart SVG -->
                <div style="position:relative;width:120px;height:120px;flex-shrink:0;">
                  <svg viewBox="0 0 120 120" style="width:100%;height:100%;transform:rotate(-90deg);">
                    <!-- Background circle -->
                    <circle cx="60" cy="60" r="48" fill="none" stroke="#e4e4e7" stroke-width="14"/>
                    <!-- Logistics 42% -->
                    <circle cx="60" cy="60" r="48" fill="none" stroke="#0a0a0a" stroke-width="14"
                      stroke-dasharray="126.7 301.6" stroke-dashoffset="0"/>
                    <!-- Retail 31% -->
                    <circle cx="60" cy="60" r="48" fill="none" stroke="#d4a017" stroke-width="14"
                      stroke-dasharray="93.5 301.6" stroke-dashoffset="-126.7"/>
                    <!-- Energy 27% -->
                    <circle cx="60" cy="60" r="48" fill="none" stroke="#d4d4d8" stroke-width="14"
                      stroke-dasharray="81.4 301.6" stroke-dashoffset="-220.2"/>
                  </svg>
                  <!-- Center text -->
                  <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
                    <span style="font-family:var(--font-headline);font-size:1.125rem;font-weight:700;color:#0a0a0a;">GCC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ═══ RECENT TRADE ENQUIRIES ═══ -->
          <div style="background:white;padding:2rem;">

            <!-- Table Header -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
              <h2 style="font-family:var(--font-headline);font-size:1.375rem;font-weight:700;color:#0a0a0a;letter-spacing:-0.02em;margin:0;">Recent Trade Enquiries</h2>
              <div style="display:flex;align-items:center;gap:1rem;">
                <span style="font-family:var(--font-mono);font-size:0.625rem;text-transform:uppercase;letter-spacing:0.1em;color:#a1a1aa;">Last Sync: 12:45 GMT</span>
                <button style="background:none;border:none;cursor:pointer;color:#a1a1aa;">
                  <span class="material-symbols-outlined" style="font-size:1.25rem;">tune</span>
                </button>
              </div>
            </div>

            <!-- Table -->
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;">
                <thead>
                  <tr style="border-bottom:1px solid rgba(0,0,0,0.08);">
                    <th style="text-align:left;padding:0.875rem 1rem;font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.2em;color:#a1a1aa;font-weight:500;">Principal Partner</th>
                    <th style="text-align:left;padding:0.875rem 1rem;font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.2em;color:#a1a1aa;font-weight:500;">Entity</th>
                    <th style="text-align:left;padding:0.875rem 1rem;font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.2em;color:#a1a1aa;font-weight:500;">Trade Route</th>
                    <th style="text-align:left;padding:0.875rem 1rem;font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.2em;color:#a1a1aa;font-weight:500;">Status</th>
                    <th style="text-align:right;padding:0.875rem 1rem;font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.2em;color:#a1a1aa;font-weight:500;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Row 1: Raheem Jassim -->
                  <tr style="border-bottom:1px solid rgba(0,0,0,0.04);">
                    <td style="padding:1.25rem 1rem;">
                      <div style="display:flex;align-items:center;gap:0.875rem;">
                        <div style="
                          width:36px;height:36px;background:#f5f5f5;
                          display:flex;align-items:center;justify-content:center;
                          font-family:var(--font-mono);font-size:0.75rem;font-weight:700;color:#0a0a0a;
                        ">RJ</div>
                        <div>
                          <span style="font-family:var(--font-headline);font-size:0.875rem;font-weight:600;color:#0a0a0a;display:block;">Raheem Jassim</span>
                          <span style="font-family:var(--font-mono);font-size:0.5625rem;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.05em;">UID: 992-GCC-08</span>
                        </div>
                      </div>
                    </td>
                    <td style="padding:1.25rem 1rem;font-size:0.875rem;color:#52525b;">Oasis Logistics Hub</td>
                    <td style="padding:1.25rem 1rem;">
                      <div style="display:flex;align-items:center;gap:0.5rem;">
                        <span style="font-family:var(--font-mono);font-size:0.75rem;font-weight:600;color:#0a0a0a;">MUM</span>
                        <div style="width:40px;height:1px;background:#d4d4d8;position:relative;">
                          <div style="position:absolute;right:0;top:-2px;width:5px;height:5px;background:#d4a017;border-radius:50%;"></div>
                        </div>
                        <span style="font-family:var(--font-mono);font-size:0.75rem;font-weight:600;color:#0a0a0a;">DOH</span>
                      </div>
                    </td>
                    <td style="padding:1.25rem 1rem;">
                      <span style="
                        font-family:var(--font-mono);font-size:0.5625rem;font-weight:600;
                        text-transform:uppercase;letter-spacing:0.1em;color:#d4a017;
                      ">Verification</span>
                    </td>
                    <td style="padding:1.25rem 1rem;text-align:right;">
                      <button style="background:none;border:none;cursor:pointer;color:#a1a1aa;">
                        <span class="material-symbols-outlined" style="font-size:1.25rem;">more_horiz</span>
                      </button>
                    </td>
                  </tr>

                  <!-- Row 2: Sarah Fatima -->
                  <tr style="border-bottom:1px solid rgba(0,0,0,0.04);">
                    <td style="padding:1.25rem 1rem;">
                      <div style="display:flex;align-items:center;gap:0.875rem;">
                        <div style="
                          width:36px;height:36px;background:#f5f5f5;
                          display:flex;align-items:center;justify-content:center;
                          font-family:var(--font-mono);font-size:0.75rem;font-weight:700;color:#0a0a0a;
                        ">SF</div>
                        <div>
                          <span style="font-family:var(--font-headline);font-size:0.875rem;font-weight:600;color:#0a0a0a;display:block;">Sarah Fatima</span>
                          <span style="font-family:var(--font-mono);font-size:0.5625rem;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.05em;">UID: 412-GCC-12</span>
                        </div>
                      </div>
                    </td>
                    <td style="padding:1.25rem 1rem;font-size:0.875rem;color:#52525b;">Al-Burj Enterprises</td>
                    <td style="padding:1.25rem 1rem;">
                      <div style="display:flex;align-items:center;gap:0.5rem;">
                        <span style="font-family:var(--font-mono);font-size:0.75rem;font-weight:600;color:#0a0a0a;">DEL</span>
                        <div style="width:40px;height:1px;background:#d4d4d8;position:relative;">
                          <div style="position:absolute;right:0;top:-2px;width:5px;height:5px;background:#d4a017;border-radius:50%;"></div>
                        </div>
                        <span style="font-family:var(--font-mono);font-size:0.75rem;font-weight:600;color:#0a0a0a;">AUH</span>
                      </div>
                    </td>
                    <td style="padding:1.25rem 1rem;">
                      <span style="
                        font-family:var(--font-mono);font-size:0.5625rem;font-weight:600;
                        text-transform:uppercase;letter-spacing:0.1em;color:#0a0a0a;
                        background:#f5f5f5;padding:0.25rem 0.75rem;
                      ">Sampling</span>
                    </td>
                    <td style="padding:1.25rem 1rem;text-align:right;">
                      <button style="background:none;border:none;cursor:pointer;color:#a1a1aa;">
                        <span class="material-symbols-outlined" style="font-size:1.25rem;">more_horiz</span>
                      </button>
                    </td>
                  </tr>

                  <!-- Row 3: Khalid Mansour -->
                  <tr>
                    <td style="padding:1.25rem 1rem;">
                      <div style="display:flex;align-items:center;gap:0.875rem;">
                        <div style="
                          width:36px;height:36px;background:#f5f5f5;
                          display:flex;align-items:center;justify-content:center;
                          font-family:var(--font-mono);font-size:0.75rem;font-weight:700;color:#0a0a0a;
                        ">KM</div>
                        <div>
                          <span style="font-family:var(--font-headline);font-size:0.875rem;font-weight:600;color:#0a0a0a;display:block;">Khalid Mansour</span>
                          <span style="font-family:var(--font-mono);font-size:0.5625rem;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.05em;">UID: 185-GCC-99</span>
                        </div>
                      </div>
                    </td>
                    <td style="padding:1.25rem 1rem;font-size:0.875rem;color:#52525b;">Red Sea Maritime</td>
                    <td style="padding:1.25rem 1rem;">
                      <div style="display:flex;align-items:center;gap:0.5rem;">
                        <span style="font-family:var(--font-mono);font-size:0.75rem;font-weight:600;color:#0a0a0a;">COK</span>
                        <div style="width:40px;height:1px;background:#d4d4d8;position:relative;">
                          <div style="position:absolute;right:0;top:-2px;width:5px;height:5px;background:#22c55e;border-radius:50%;"></div>
                        </div>
                        <span style="font-family:var(--font-mono);font-size:0.75rem;font-weight:600;color:#0a0a0a;">JED</span>
                      </div>
                    </td>
                    <td style="padding:1.25rem 1rem;">
                      <span style="
                        font-family:var(--font-mono);font-size:0.5625rem;font-weight:600;
                        text-transform:uppercase;letter-spacing:0.1em;color:#22c55e;
                      ">Active Partner</span>
                    </td>
                    <td style="padding:1.25rem 1rem;text-align:right;">
                      <button style="background:none;border:none;cursor:pointer;color:#a1a1aa;">
                        <span class="material-symbols-outlined" style="font-size:1.25rem;">more_horiz</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:1.5rem;padding-top:1rem;border-top:1px solid rgba(0,0,0,0.06);">
              <span style="font-family:var(--font-mono);font-size:0.625rem;text-transform:uppercase;letter-spacing:0.1em;color:#a1a1aa;">Showing 3 of 40 Pending Enquiries</span>
              <div style="display:flex;gap:1rem;">
                <span style="font-family:var(--font-mono);font-size:0.6875rem;text-transform:uppercase;letter-spacing:0.05em;color:#a1a1aa;cursor:pointer;">Previous</span>
                <span style="font-family:var(--font-mono);font-size:0.6875rem;text-transform:uppercase;letter-spacing:0.05em;color:#0a0a0a;font-weight:700;cursor:pointer;">Next Page</span>
              </div>
            </div>
          </div>
        </main>

        <!-- ═══ FOOTER BAR ═══ -->
        <footer style="
          display:flex;justify-content:space-between;align-items:center;
          padding:1rem 2rem;border-top:1px solid rgba(0,0,0,0.06);
          background:white;
        ">
          <div style="display:flex;gap:2rem;">
            <div>
              <span style="font-family:var(--font-mono);font-size:0.5rem;text-transform:uppercase;letter-spacing:0.15em;color:#a1a1aa;display:block;">Sovereign Authority</span>
              <span style="font-family:var(--font-mono);font-size:0.6875rem;font-weight:700;color:#0a0a0a;">LEDGER NODE: IDM-00-11</span>
            </div>
            <div>
              <span style="font-family:var(--font-mono);font-size:0.5rem;text-transform:uppercase;letter-spacing:0.15em;color:#a1a1aa;display:block;">Trade Stability</span>
              <span style="font-family:var(--font-mono);font-size:0.6875rem;font-weight:700;color:#22c55e;">OPTIMAL</span>
            </div>
          </div>
          <div style="display:flex;gap:1.5rem;align-items:center;">
            <span style="font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.1em;color:#a1a1aa;">© 2024 Indus Meridian Global</span>
            <span style="font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.1em;color:#a1a1aa;cursor:pointer;">Privacy Protocol</span>
          </div>
        </footer>
      </div>

      </div>\n<style>.material-symbols-outlined{font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 24;display:inline-block;vertical-align:middle}.editorial-shadow{box-shadow:0 30px 60px -12px rgba(0,0,0,0.04)}.hide-scrollbar::-webkit-scrollbar{display:none}.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.tonal-lift{box-shadow:0 30px 60px -15px rgba(26,28,28,0.04)}.ledger-line{background:linear-gradient(to right,#7f5600 0%,#7f5600 30%,transparent 30%);background-size:10px 1px;background-repeat:repeat-x}</style>\n<div class="dashboard-view" id="view-products" style="display:none;flex:1;flex-direction:column;min-height:100vh;margin-left:220px;"><header class="sticky top-0 z-40 flex-shrink-0 bg-white/80 backdrop-blur-xl flex justify-between items-center px-12 h-20">
<div class="flex items-center gap-8">
<h2 class="font-['Space_Grotesk'] tracking-tight text-xl font-bold tracking-tighter uppercase text-zinc-900">Product Architecture</h2>
<div class="h-4 w-px bg-zinc-200"></div>
<div class="flex items-center gap-6 font-['Space_Grotesk'] tracking-tight">
<a class="text-amber-600 font-bold underline decoration-2 underline-offset-8" href="#">Editor</a>
<a class="text-zinc-500 font-medium hover:text-amber-600 transition-colors duration-300" href="#">Catalog</a>
<a class="text-zinc-500 font-medium hover:text-amber-600 transition-colors duration-300" href="#">Archive</a>
</div>
</div>
<div class="flex items-center gap-6">
<div class="relative group">
<span class="material-symbols-outlined text-zinc-400 group-hover:text-zinc-900 transition-colors cursor-pointer" data-icon="notifications">notifications</span>
<span class="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></span>
</div>
<span class="material-symbols-outlined text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer" data-icon="help">help</span>
<button class="bg-primary text-on-primary px-5 py-2 text-xs font-headline font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-95 duration-150 ease-in-out">
<span class="material-symbols-outlined text-sm" data-icon="add_circle">add_circle</span>
                Add Lead
            </button>
<div class="w-10 h-10 bg-zinc-100 overflow-hidden">
<img alt="Executive Profile" class="w-full h-full object-cover" data-alt="Close-up portrait of a professional executive in a minimal grey studio background with soft architectural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7tWMS4m1m9YpauhRp2pgorFYue6smbJh7-aBoSCWxN1yyN742VD1HkMufoXd8RgJA1dSvnYYh8CK_M17-2HNRTibdPGShac6wyiLTf5MOtPaDU4G0Al93vwM-j0xt75x8V8fJOE4BTQfX7opy2ffedXHGZHQTMOiFd5A3gDDjjW72ENuZymhEchPoXUScP1D18kNsC_pd0W46DxXiqyuh5KWckPNaLyahlVRj6kR1ZENW4UG4thqVXk7Yd1B4_c1djFlWxKj66PRN"/>
</div>
</div>
</header><main class="flex-1 min-h-screen">
<div class="max-w-7xl mx-auto p-12">
<div class="flex flex-col lg:flex-row gap-16">
<!-- LEFT COLUMN: PRODUCT ENTRY FORM -->
<div class="flex-1 space-y-12">
<section>
<header class="mb-8">
<span class="font-technical text-[10px] text-secondary font-bold tracking-widest uppercase">Product Registry — Step 01</span>
<h3 class="font-headline text-3xl font-bold tracking-tight text-primary mt-2">Product Core Attributes</h3>
</header>
<form class="space-y-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
<div class="flex flex-col">
<label class="font-technical text-[10px] text-outline tracking-wider uppercase mb-2">Product Identity</label>
<input class="bg-transparent border-b border-outline/40 focus:border-secondary outline-none py-2 font-headline text-lg transition-colors placeholder:text-zinc-300" placeholder="e.g., Oud Al-Sultan Premium" type="text"/>
</div>
<div class="flex flex-col">
<label class="font-technical text-[10px] text-outline tracking-wider uppercase mb-2">Category Segment</label>
<select class="bg-transparent border-b border-outline/40 focus:border-secondary outline-none py-2 font-body text-sm transition-colors appearance-none">
<option>Incense &amp; Bukhoor</option>
<option>Home Fragrance</option>
<option>Essential Oils</option>
<option>Technical Apparatus</option>
</select>
</div>
<div class="flex flex-col">
<label class="font-technical text-[10px] text-outline tracking-wider uppercase mb-2">Internal SKU ID</label>
<input class="bg-transparent border-b border-outline/40 focus:border-secondary outline-none py-2 font-technical text-sm transition-colors placeholder:text-zinc-300" placeholder="IB-7700-DXB" type="text"/>
</div>
<div class="flex flex-col">
<label class="font-technical text-[10px] text-outline tracking-wider uppercase mb-2">Harmonized Export Code</label>
<input class="bg-transparent border-b border-outline/40 focus:border-secondary outline-none py-2 font-technical text-sm transition-colors placeholder:text-zinc-300" placeholder="HS 3307.41.00" type="text"/>
</div>
</div>
<div class="flex flex-col">
<label class="font-technical text-[10px] text-outline tracking-wider uppercase mb-2">Editorial Narrative / Description</label>
<textarea class="bg-surface-container-low border-none focus:ring-0 focus:bg-surface-container p-6 font-body text-sm leading-relaxed resize-none transition-colors placeholder:text-zinc-400" placeholder="Enter high-end product copy here..." rows="5"></textarea>
<div class="flex gap-4 mt-2 justify-end">
<button class="text-[10px] font-technical uppercase text-outline hover:text-primary transition-colors" type="button">Bold</button>
<button class="text-[10px] font-technical uppercase text-outline hover:text-primary transition-colors" type="button">Italic</button>
<button class="text-[10px] font-technical uppercase text-outline hover:text-primary transition-colors" type="button">Insert Link</button>
</div>
</div>
</form>
</section>
<!-- MEDIA ASSET MANAGER -->
<section class="p-8 border-2 border-dashed border-outline-variant/30 bg-surface-container-lowest">
<div class="flex items-start justify-between mb-8">
<div>
<h3 class="font-headline text-xl font-bold tracking-tight text-primary">Media Asset Repository</h3>
<p class="text-xs text-outline mt-1">High-resolution imagery and technical CAD schemas.</p>
</div>
<span class="material-symbols-outlined text-outline/40 text-4xl" data-icon="cloud_upload">cloud_upload</span>
</div>
<div class="grid grid-cols-4 gap-4">
<!-- Image Slot -->
<div class="aspect-square bg-surface-container border border-outline-variant/20 relative group overflow-hidden">
<img class="w-full h-full object-cover" data-alt="Minimalist glass jar of high-end perfume against a soft beige limestone background with hard shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDos92qHPDfplmYa4s0AYLOgMt_g6sBh9QBzaxxtAbad5l0IwZRVZoqT6F1CnQw5tVPD0BQ58KMe5jgiCPEMVvTXFU3covP8jQ3hHeMAkWAAZH-V6H5VmYl7IhtBg0sVdRcJOLaKiZ-D4DBn38EgFcVr1lUggumzzDV8HhYqBV-J7xiAaPeTCNqKxyREgI669fkfvcWaTW1L9RQ5dXlWQWPdaF84vRxaWFtloAtZJr0VkIq_zUMC58g0AaMFrPqYk7pCwzDq9HwaD4"/>
<div class="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<span class="material-symbols-outlined text-white cursor-pointer" data-icon="delete">delete</span>
</div>
</div>
<!-- Upload Slot -->
<div class="aspect-square border border-dashed border-outline-variant/50 flex flex-col items-center justify-center gap-2 hover:bg-surface-container transition-colors cursor-pointer">
<span class="material-symbols-outlined text-secondary" data-icon="add">add</span>
<span class="font-technical text-[10px] text-outline tracking-wider uppercase">Add Asset</span>
</div>
</div>
<div class="mt-8 space-y-3">
<div class="flex items-center justify-between p-4 bg-white border-l-2 border-secondary tonal-lift">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-zinc-400" data-icon="picture_as_pdf">picture_as_pdf</span>
<div>
<p class="text-xs font-bold font-headline">Technical_Specs_Oud_Sultan_V4.pdf</p>
<p class="text-[10px] font-technical text-outline uppercase">2.4 MB • Complete</p>
</div>
</div>
<span class="material-symbols-outlined text-outline/40 hover:text-error transition-colors cursor-pointer" data-icon="close">close</span>
</div>
</div>
</section>
<div class="flex justify-end gap-6 pt-4">
<button class="px-8 py-4 text-xs font-headline font-bold uppercase tracking-widest text-outline hover:text-primary transition-colors">Discard Draft</button>
<button class="px-12 py-4 bg-gradient-to-r from-secondary to-secondary-container text-on-primary font-headline font-bold uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-transform">Save Product to Ledger</button>
</div>
</div>
<!-- RIGHT COLUMN: PRODUCT INVENTORY PREVIEW (AS SIDEBAR) -->
<aside class="w-full lg:w-96 space-y-8">
<div class="sticky top-32">
<div class="flex items-center justify-between mb-8">
<h3 class="font-headline text-lg font-bold tracking-tight text-primary">Recent Archive</h3>
<button class="text-[10px] font-technical uppercase tracking-widest text-secondary font-bold">View All</button>
</div>
<div class="space-y-6">
<!-- High End Product Card 1 -->
<div class="group relative bg-white overflow-hidden border-b border-transparent hover:border-secondary transition-all duration-500">
<div class="aspect-[4/3] w-full bg-zinc-100 overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Artistic composition of burning sandalwood incense sticks with delicate smoke spirals in a dark mood-lit studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcQBdflDh90fzIEwmRB3NNBXlWLNBqKiMZSJsYN4No5VT8TaHVx1A-04FxfQ1SZeLr2yLAo4HXCoPHDRdPfjttjQNpUJDTKR3K9xW2SBfYUKiUwuVfDwwXAlII79h__Fuf9_4RfyMnz9sp-2KBM8Ztlwb6QL-FVVZQDg54j6oJatI_FgNWj7OnivCv80DEiWIg_MefqiGJosm-hRFNd2I-J54dEn1iDaRUAKASUej6IUq1xYbsIcp3qRN9ciCLuDxfJBZGT3CNnlIe"/>
</div>
<div class="p-6">
<div class="flex justify-between items-start mb-2">
<span class="font-technical text-[9px] text-secondary font-bold tracking-[0.2em] uppercase">Incense</span>
<span class="font-technical text-[9px] text-outline">SKU: IND-990</span>
</div>
<h4 class="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">Royal Sandalwood Sticks</h4>
<p class="text-xs text-outline mt-2 leading-relaxed line-clamp-2 italic">A premium blend of vintage sandalwood and desert resins, crafted for high-end hospitality spaces.</p>
<div class="mt-4 flex items-center gap-4 text-primary">
<span class="material-symbols-outlined text-sm" data-icon="edit">edit</span>
<span class="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
<span class="material-symbols-outlined text-sm" data-icon="share">share</span>
</div>
</div>
</div>
<!-- High End Product Card 2 -->
<div class="group relative bg-white overflow-hidden border-b border-transparent hover:border-secondary transition-all duration-500">
<div class="aspect-[4/3] w-full bg-zinc-100 overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Sophisticated black ceramic oil diffuser on a raw concrete surface with a single spotlight and deep shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgpJovcQS4PJTNPwMZQpTwWKxLwMRMMhLLhG_-kChTzkLR8twnmrdpLwfuA6lfFOU1xXuTzvkEImFZpv2DzVb8J3q8LwOlsBHDHZNZyK-YgL_hCXoNeECB6Mrx3eT2XAorgNXWEJaer0ENIWVSeYac8VIJa0wDlH6U1JB-iQ_5_PhkFE7LuVVIgnliJWkja2lDwLTy-03zi-n2t2wUQo8s-w5Bw-dCdBlvJT9geDKPebwWkgNPgQmbgPa-1af0CfnLfsYdCMS6qLh-"/>
</div>
<div class="p-6">
<div class="flex justify-between items-start mb-2">
<span class="font-technical text-[9px] text-secondary font-bold tracking-[0.2em] uppercase">Fragrance</span>
<span class="font-technical text-[9px] text-outline">SKU: IND-441</span>
</div>
<h4 class="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">Nebula Oil Diffuser</h4>
<p class="text-xs text-outline mt-2 leading-relaxed line-clamp-2 italic">Ultrasonic cold-air nebulizer designed for commercial luxury suites and executive lounges.</p>
<div class="mt-4 flex items-center gap-4 text-primary">
<span class="material-symbols-outlined text-sm" data-icon="edit">edit</span>
<span class="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
<span class="material-symbols-outlined text-sm" data-icon="share">share</span>
</div>
</div>
</div>
</div>
<!-- World Map Texture (Asymmetric Detail) -->
<div class="mt-16 opacity-10 grayscale select-none pointer-events-none">
<img alt="Global Trade Texture" class="w-full" data-alt="Monochromatic technical world map with subtle data lines and connecting points on a light grey background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDUxiCjgZrp7lFk3miv7ag6iFy8nqTQzgjPj7Gh6X1GYi0f-PSposxL6jcrlgChEX4xP2ZgeWFD_rAYH5BdLHbJErqsCuanVGYfiOMUVT3ZZxhZkFZEPpKFAPDtzyuglWf1s7aetTvMgahlZ9P_j1z-iGxFCUmiC0fbljz2vHJWTod42bkTWKDwdz2A2lLiugXgojOHt72Qf-ov7r_m3oc5wVQOuqxZyh9EBJJ-JSc390qAwMzdtmbVn1K8qxT1-2K66WVmNCWXSaJ"/>
</div>
</div>
</aside>
</div>
</div>
</main></div>\n<div class="dashboard-view" id="view-blog" style="display:none;flex:1;flex-direction:column;min-height:100vh;margin-left:220px;"><header class="sticky top-0 z-40 flex-shrink-0 bg-white/80 backdrop-blur-xl flex justify-between items-center px-12 h-20">
<div class="flex items-center gap-8">
<div class="relative flex items-center bg-surface-container px-4 py-2 w-96">
<span class="material-symbols-outlined text-zinc-400 text-sm mr-2" data-icon="search">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm font-label w-full p-0" placeholder="Search the ledger..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<button class="bg-primary text-on-primary px-6 py-2 font-headline font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                    Add Lead
                </button>
<div class="flex items-center gap-4 text-zinc-500">
<span class="material-symbols-outlined cursor-pointer hover:text-amber-600 transition-colors" data-icon="notifications">notifications</span>
<span class="material-symbols-outlined cursor-pointer hover:text-amber-600 transition-colors" data-icon="help">help</span>
</div>
<div class="h-8 w-px bg-zinc-200"></div>
<div class="flex items-center gap-3">
<span class="font-label text-[10px] text-right block leading-tight">
<span class="text-zinc-900 font-bold block">EXECUTIVE</span>
<span class="text-zinc-500">Global Ledger</span>
</span>
<img alt="Executive Profile" class="w-10 h-10 object-cover border border-zinc-200" data-alt="professional headshot of a senior executive with a serious expression and clean studio lighting on a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQa-RDNomjmqqU7W6I0RS7N2WCo-uqrToq_M8l8NAHn9T7aruFH2Z2dD8zqiUH0SPqgreSG2W5XTxm04T1yOnJfJty4SqzkaWYfXK0agcI2JMbH6kMl_Q7lTUtjaBhl670QQEST4oBqi81w0zCQSCZVzLhmnSZedl8Mj-q0BhQnVVXqJlJNnPJbfVsqXNmvVl378-RSTasZW772pgydmAB-4PzhS0HN5e_c6rLnd7t4BbXPV6KQKZsl5PqvrRVcJj4SWuePcZSAAA7"/>
</div>
</div>
</header><main class="flex-1 min-h-screen relative">
<!-- TopAppBar (from Shared Components JSON) -->
<header class="fixed top-0 right-0 w-[calc(100%-280px)] z-40 bg-white/80 backdrop-blur-xl flex justify-between items-center px-12 h-20">
<div class="flex items-center gap-8">
<div class="relative flex items-center bg-surface-container px-4 py-2 w-96">
<span class="material-symbols-outlined text-zinc-400 text-sm mr-2" data-icon="search">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm font-label w-full p-0" placeholder="Search the ledger..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<button class="bg-primary text-on-primary px-6 py-2 font-headline font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                    Add Lead
                </button>
<div class="flex items-center gap-4 text-zinc-500">
<span class="material-symbols-outlined cursor-pointer hover:text-amber-600 transition-colors" data-icon="notifications">notifications</span>
<span class="material-symbols-outlined cursor-pointer hover:text-amber-600 transition-colors" data-icon="help">help</span>
</div>
<div class="h-8 w-px bg-zinc-200"></div>
<div class="flex items-center gap-3">
<span class="font-label text-[10px] text-right block leading-tight">
<span class="text-zinc-900 font-bold block">EXECUTIVE</span>
<span class="text-zinc-500">Global Ledger</span>
</span>
<img alt="Executive Profile" class="w-10 h-10 object-cover border border-zinc-200" data-alt="professional headshot of a senior executive with a serious expression and clean studio lighting on a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQa-RDNomjmqqU7W6I0RS7N2WCo-uqrToq_M8l8NAHn9T7aruFH2Z2dD8zqiUH0SPqgreSG2W5XTxm04T1yOnJfJty4SqzkaWYfXK0agcI2JMbH6kMl_Q7lTUtjaBhl670QQEST4oBqi81w0zCQSCZVzLhmnSZedl8Mj-q0BhQnVVXqJlJNnPJbfVsqXNmvVl378-RSTasZW772pgydmAB-4PzhS0HN5e_c6rLnd7t4BbXPV6KQKZsl5PqvrRVcJj4SWuePcZSAAA7"/>
</div>
</div>
</header>
<!-- Content Canvas -->
<div class="pt-20 pb-32 px-12 grid grid-cols-12 gap-12 max-w-[1600px] mx-auto">
<!-- Left Column: Editorial Editor -->
<section class="col-span-8 py-12">
<div class="mb-12">
<p class="font-label text-secondary uppercase text-[10px] tracking-[0.3em] mb-4">Editorial Ledger / New Entry</p>
<input class="w-full bg-transparent border-none p-0 text-5xl font-headline font-bold tracking-tight focus:ring-0 placeholder:text-zinc-300" placeholder="Entry Title: Defining Global Trade Nodes" type="text"/>
</div>
<!-- Cover Image Upload Area -->
<div class="relative group mb-16 aspect-[21/9] bg-surface-container-low overflow-hidden cursor-pointer">
<img alt="Editorial Cover" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" data-alt="industrial shipping port at dusk with giant cranes and stacks of containers silhouetted against a deep indigo sky with warm amber lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwbolMRPHyBd4-41ETEeneGRQyl1mzAtTdDy43InnVQFztlmnuvyBb2ZplTnOzOy05wRO9yRwZj90Hq72Gzv1OyntbVGmQzQz2ewarAqsjYTHG37O2R6mS7U8TPPm-P5J-ggQ5x_JrmTuvHlN7xtyubtub6tE9K2gBBCuKls8Wg2IyGoVFR4di7JozqHch8NM8Y10LMx-v9u4qkXrap0hKO5MokOgUS_pCNTDsB9AH5ze90VKXL4inEuunUn_0677UwcHw7msyPc4S"/>
<div class="absolute inset-0 flex flex-col items-center justify-center border-2 border-dashed border-zinc-300 group-hover:border-amber-500/50 transition-colors">
<span class="material-symbols-outlined text-4xl mb-4 text-zinc-400 group-hover:text-amber-600 transition-colors" data-icon="add_photo_alternate">add_photo_alternate</span>
<span class="font-label text-xs uppercase tracking-[0.2em] text-zinc-500">Replace Sovereign Cover Image</span>
</div>
</div>
<!-- Rich Text Toolbar -->
<div class="sticky top-24 z-30 flex items-center gap-2 bg-white px-4 py-3 editorial-shadow border border-zinc-100 mb-8">
<button class="p-2 hover:bg-zinc-100 transition-colors"><span class="material-symbols-outlined" data-icon="format_h1">title</span></button>
<button class="p-2 hover:bg-zinc-100 transition-colors"><span class="material-symbols-outlined" data-icon="format_h2">title</span></button>
<div class="w-px h-6 bg-zinc-200 mx-1"></div>
<button class="p-2 hover:bg-zinc-100 transition-colors"><span class="material-symbols-outlined" data-icon="format_bold">format_bold</span></button>
<button class="p-2 hover:bg-zinc-100 transition-colors"><span class="material-symbols-outlined" data-icon="format_italic">format_italic</span></button>
<button class="p-2 hover:bg-zinc-100 transition-colors"><span class="material-symbols-outlined" data-icon="format_quote">format_quote</span></button>
<div class="w-px h-6 bg-zinc-200 mx-1"></div>
<button class="p-2 hover:bg-zinc-100 transition-colors"><span class="material-symbols-outlined" data-icon="link">link</span></button>
<button class="p-2 hover:bg-zinc-100 transition-colors"><span class="material-symbols-outlined" data-icon="image">image</span></button>
<button class="p-2 hover:bg-zinc-100 transition-colors"><span class="material-symbols-outlined" data-icon="reorder">reorder</span></button>
<div class="ml-auto flex items-center gap-4 px-4 font-label text-[10px] text-zinc-400">
<span>WORD COUNT: 1,402</span>
<span>SAVED: 2M AGO</span>
</div>
</div>
<!-- Editor Canvas -->
<article class="prose prose-zinc prose-lg max-w-none">
<p class="font-body text-zinc-600 leading-relaxed first-letter:text-5xl first-letter:font-headline first-letter:font-bold first-letter:mr-3 first-letter:float-left mb-8">
                        The evolution of the global trade ledger is not merely a technical transition, but a sovereign realignment. As we map the nodes between Mumbai and Dubai, the data points reveal a narrative of expansion that transcends traditional shipping routes. This entry explores the strategic imperative of "Just-in-Time" logistics within the GCC framework.
                    </p>
<blockquote class="border-l-4 border-secondary pl-8 py-4 my-12 italic text-zinc-800 text-2xl font-light leading-snug">
                        "Trade is the lifeblood of sovereign power, and the ledger is its architect."
                    </blockquote>
<p class="text-zinc-600 leading-relaxed mb-8">
                        Technical precision remains the paramount metric for success. In the following sections, we will dissect the route efficiency models and the impact of the new sovereign digital certificates on cross-border clearance.
                    </p>
<!-- Placeholder for typing -->
<div class="w-px h-8 bg-amber-500 animate-pulse inline-block align-middle ml-1"></div>
</article>
</section>
<!-- Right Column: Configuration Sidebar -->
<aside class="col-span-4 py-12">
<div class="sticky top-32 space-y-12">
<!-- Post Configuration Card -->
<div class="bg-surface-container-lowest p-8 border-t-2 border-secondary shadow-sm">
<h3 class="font-headline font-bold text-lg uppercase tracking-wider mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-secondary" data-icon="tune">tune</span>
                            Entry Config
                        </h3>
<div class="space-y-8">
<!-- Meta Title -->
<div class="space-y-2">
<label class="font-label text-[10px] text-zinc-500 uppercase tracking-widest block">Meta Title (SEO)</label>
<input class="w-full border-b border-zinc-200 bg-transparent py-2 focus:border-secondary transition-colors font-body text-sm outline-none" type="text" value="The Sovereign Ledger: Mapping Global Nodes 2024"/>
</div>
<!-- Slug -->
<div class="space-y-2">
<label class="font-label text-[10px] text-zinc-500 uppercase tracking-widest block">URL Slug</label>
<div class="flex items-center text-zinc-400 font-label text-xs">
<span>indusbridge.com/ledger/</span>
<input class="flex-grow border-b border-zinc-200 bg-transparent py-1 focus:border-secondary transition-colors outline-none ml-1 text-zinc-900" type="text" value="global-node-mapping"/>
</div>
</div>
<!-- Meta Description -->
<div class="space-y-2">
<label class="font-label text-[10px] text-zinc-500 uppercase tracking-widest block">Summary / Meta Description</label>
<textarea class="w-full border-b border-zinc-200 bg-transparent py-2 focus:border-secondary transition-colors font-body text-sm outline-none resize-none" rows="4">A deep-dive into the strategic infrastructure connecting Mumbai and Dubai through digital sovereign ledger technologies.</textarea>
</div>
<!-- Focus Keywords -->
<div class="space-y-3">
<label class="font-label text-[10px] text-zinc-500 uppercase tracking-widest block">Focus Keywords</label>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-zinc-100 text-zinc-600 font-label text-[10px] flex items-center gap-1">Global Trade <span class="material-symbols-outlined text-[12px]" data-icon="close">close</span></span>
<span class="px-3 py-1 bg-zinc-100 text-zinc-600 font-label text-[10px] flex items-center gap-1">Logistics <span class="material-symbols-outlined text-[12px]" data-icon="close">close</span></span>
<span class="px-3 py-1 border border-secondary text-secondary font-label text-[10px]">+ Add Keyword</span>
</div>
</div>
</div>
</div>
<!-- Publishing Status Bento -->
<div class="grid grid-cols-2 gap-4">
<div class="bg-surface-container p-6">
<span class="font-label text-[10px] text-zinc-500 uppercase block mb-1">Status</span>
<span class="font-headline font-bold text-sm flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-amber-500"></span>
                                Draft Mode
                            </span>
</div>
<div class="bg-surface-container p-6">
<span class="font-label text-[10px] text-zinc-500 uppercase block mb-1">Visibility</span>
<span class="font-headline font-bold text-sm">Public Ledger</span>
</div>
<div class="bg-zinc-900 p-6 col-span-2 text-white">
<div class="flex justify-between items-end">
<div>
<span class="font-label text-[10px] text-zinc-500 uppercase block mb-1">Engagement Forecast</span>
<span class="text-3xl font-headline font-bold text-amber-500">88.4<span class="text-xs text-zinc-500 ml-1">/100</span></span>
</div>
<span class="material-symbols-outlined text-zinc-700 text-4xl" data-icon="query_stats">query_stats</span>
</div>
</div>
</div>
</div>
</aside>
</div>
<!-- Sticky Control Footer -->
<footer class="sticky bottom-0 w-full z-40 bg-white border-t border-zinc-100 h-24 px-12 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.02)]">
<div class="flex items-center gap-8">
<div class="flex items-center gap-4">
<span class="font-label text-[10px] text-zinc-400 uppercase tracking-widest">Route Accuracy</span>
<div class="w-48 h-1 bg-zinc-100 relative">
<div class="absolute inset-0 bg-secondary w-3/4"></div>
</div>
<span class="font-label text-[10px] text-secondary font-bold">75% Complete</span>
</div>
</div>
<div class="flex items-center gap-4">
<button class="px-8 py-3 text-zinc-500 font-headline font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors">
                    Save Draft
                </button>
<button class="px-8 py-3 border border-zinc-200 text-zinc-900 font-headline font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-zinc-50 transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
                    Preview
                </button>
<button class="px-10 py-3 bg-secondary text-on-primary font-headline font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20">
<span class="material-symbols-outlined text-sm" data-icon="publish" style="font-variation-settings: 'FILL' 1;">publish</span>
                    Publish to Ledger
                </button>
</div>
</footer>
</main></div>\n      <!-- ═══ FLOATING ACTION BUTTON ═══ -->
      <button id="idm-fab" style="
        position:fixed;bottom:2rem;right:2rem;z-index:200;
        width:56px;height:56px;background:#0a0a0a;color:white;
        border:none;cursor:pointer;border-radius:50%;
        display:flex;align-items:center;justify-content:center;
        box-shadow:0 8px 30px rgba(0,0,0,0.3);
        transition:all 0.3s cubic-bezier(0.16,1,0.3,1);
      ">
        <span class="material-symbols-outlined" style="font-size:1.75rem;">add</span>
      </button>

      <!-- ═══ MOBILE SIDEBAR TOGGLE ═══ -->
      <button id="idm-menu-toggle" class="idm-menu-toggle" style="
        display:none;position:fixed;top:1rem;left:1rem;z-index:200;
        width:40px;height:40px;background:#0a0a0a;color:white;
        border:none;cursor:pointer;
        align-items:center;justify-content:center;
      ">
        <span class="material-symbols-outlined" style="font-size:1.25rem;">menu</span>
      </button>

    </section>
  `;
}

export function initDashboard() {if(!document.getElementById('idm-tailwind')){window.tailwind=window.tailwind||{};window.tailwind.config={corePlugins:{preflight:false},theme:{extend:{colors:{secondary:'#7f5600','surface-container-highest':'#e2e2e2','surface-container-low':'#f3f3f3','surface-container-lowest':'#ffffff','surface-container':'#eeeeee',outline:'#79767c','outline-variant':'#c9c5cb'},fontFamily:{headline:['Space Grotesk'],body:['Inter'],technical:['JetBrains Mono'],label:['JetBrains Mono']}}}};const s=document.createElement('script');s.id='idm-tailwind';s.src='https://cdn.tailwindcss.com?plugins=forms,container-queries';document.head.appendChild(s)}document.querySelectorAll('.idm-nav-item').forEach(btn=>{btn.addEventListener('click',(e)=>{e.preventDefault();const tab=btn.getAttribute('data-tab');if(!tab)return;document.querySelectorAll('.idm-nav-item').forEach(nav=>{nav.classList.remove('idm-nav-active');nav.style.color='#71717a';nav.style.background='none';nav.style.borderLeft='3px solid transparent'});btn.classList.add('idm-nav-active');btn.style.color='#d4a017';btn.style.background='linear-gradient(90deg,rgba(212,160,23,0.15),transparent)';btn.style.borderLeft='3px solid #d4a017';document.querySelectorAll('.dashboard-view').forEach(v=>{if(v)v.style.display='none'});const target=document.getElementById('view-'+tab);if(target)target.style.display='flex';window.scrollTo(0,0)})});
  // Sign out
  const signOut = document.getElementById('idm-sign-out');
  if (signOut) {
    signOut.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.removeItem('ibg-admin-auth');
      window.location.hash = '/IBGAdminPg';
    });
  }

  // Nav item hover
  document.querySelectorAll('.idm-nav-item:not(.idm-nav-active)').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.color = '#d4a017';
      item.style.background = 'rgba(212,160,23,0.05)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.color = '#71717a';
      item.style.background = 'none';
    });
  });

  // FAB hover
  const fab = document.getElementById('idm-fab');
  if (fab) {
    fab.addEventListener('mouseenter', () => {
      fab.style.transform = 'scale(1.1) rotate(90deg)';
      fab.style.background = '#d4a017';
    });
    fab.addEventListener('mouseleave', () => {
      fab.style.transform = 'scale(1) rotate(0deg)';
      fab.style.background = '#0a0a0a';
    });
  }

  // New Shipment button hover
  const newShip = document.getElementById('idm-new-shipment');
  if (newShip) {
    newShip.addEventListener('mouseenter', () => {
      newShip.style.transform = 'translateY(-1px)';
      newShip.style.boxShadow = '0 4px 20px rgba(212,160,23,0.4)';
    });
    newShip.addEventListener('mouseleave', () => {
      newShip.style.transform = 'translateY(0)';
      newShip.style.boxShadow = 'none';
    });
  }

  // Mobile menu toggle
  const menuToggle = document.getElementById('idm-menu-toggle');
  const sidebar = document.querySelector('.idm-sidebar');
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      const isOpen = sidebar.style.transform === 'translateX(0px)';
      sidebar.style.transform = isOpen ? 'translateX(-100%)' : 'translateX(0)';
    });
  }

  // Table row hover effects
  document.querySelectorAll('.idm-dashboard tbody tr').forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.background = '#fafafa';
    });
    row.addEventListener('mouseleave', () => {
      row.style.background = 'none';
    });
  });
}
