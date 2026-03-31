/* IndusBridge Global — Blog Page */

export function renderBlogPage() {
  const posts = [
    {
      tag: 'Market Intelligence',
      date: 'March 28, 2024',
      title: 'Why Charcoal-Free Incense Is Dominating GCC Retail Shelves',
      excerpt: 'Consumer preferences in the UAE and Qatar are shifting toward cleaner, premium home fragrance products. Here\'s what distributors need to know about the charcoal-free revolution.',
      readTime: '6 min read',
      featured: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhRVyTfbNg2JdVJLhaqaGHr3ejKMJle72s2fzfN3iKfS37o96nzXa7eSSXaF0Sm8c7RpnMkOCZPS30fcGkWWfHapJgWAp7isTeRWgXkL_ps0RCoKp_O5_hLlbXYrtMvnuPRJ0tofG2Rh15bXK9ulY_x3AGnhsYVaNI_7F-VK5Bkj-Ybsbr8bdJBHn4AnM5ywe_C0YLeg9rZjI-ntnGKZ9TcPYT566gdBlxwirAJ0ittaDcSfuOpZyBASGj88qCBzB5HdqMCwN_7yIC'
    },
    {
      tag: 'Supply Chain',
      date: 'March 15, 2024',
      title: 'Building Resilient India-to-GCC Supply Chains: Lessons from 2024',
      excerpt: 'Logistics disruptions have reshaped how distributors think about sourcing. We share our framework for building supply chains that withstand volatility.',
      readTime: '8 min read',
      featured: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1ig3tKlyBI_IenX9AmXZ_et4jFCj3sDjXbpqXKNAriK-n1gavqSdPB8JBzqvUwdKcQnHjeDf9QAkPiwLTsKpCitztwLjWBEo3hM1jZUIhYYpn98lQMP9ECVBdTuo-oFkE_cJjWJ5deL4p4kDlFODLKfMSXHS4UJ2Vo4a4rChJBGwK5BwhemQNwhJjcOPzPFmjM1deTF-Ho5oCaYZing92p6DhPHfS-XdPk0Jq0Di2G7IPsi0PqXLbSxPrmaYfKj_YNjoDe1jPZS6u'
    },
    {
      tag: 'Distribution Strategy',
      date: 'March 3, 2024',
      title: 'The Margin Equation: How Premium Products Outperform Volume Plays',
      excerpt: 'Our analysis of 200+ GCC retail channels reveals that premium-positioned products deliver 3.2x better margin stability than commodity alternatives.',
      readTime: '5 min read',
      featured: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOTfztsjnjtqOYJDsnSW_NWxaAuYJbND_q9SSpOX13HehIcawIA6ckgAsTx5jqJGKbnfs0jVA6cuX0usOTzO61Vwb7cXAWkr2F-XPEWAabw6btJItvFz2S844VtIALwp1gAQYDN3Za4oyDCY4E6p9QvtJlYxMs0K20OBPGkynzsYgaq7LMMYo9lx82DZNiYQcve2PLmYKo-_u6rub7MrvO2-E9jWDFSceHGjNylqHvkouLzMX462N-BlctOgFWs9RImEwrGXLUfrDb'
    },
    {
      tag: 'Compliance',
      date: 'February 20, 2024',
      title: 'Navigating GCC Import Regulations: A Distributor\'s Complete Guide',
      excerpt: 'From HSN codes to halal certification — everything you need to know about importing Indian consumer goods into UAE, Oman, and Qatar markets.',
      readTime: '10 min read',
      featured: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcI5FNcZpygNfyCH85-2Olbx-uQJopuP_HFJ5VxzNToGqF_gj8dc7RE2llNb0Lhvm42k7QuurLdagIZ53xLEnfRkLLSZ_KEduqG1AXA8ekFt1LUz3n5jGivNHCRY0knOZ0ETA0bLndfde5y17IoLMM5fiv-7bf4-f_UBjSChxRDyka3eNlDrXVrBGIFWDFrjQKJ7HVmPWbsq7o0AuUNxUlwmC9zqacoUJ0LDDy8ZIrO0PwuUZu4T7gkyOi9ARyW2pXQfaLULetQikJ'
    },
    {
      tag: 'Partnership',
      date: 'February 8, 2024',
      title: 'What Makes a Great Distribution Partner? Our Selection Framework',
      excerpt: 'We apply a rigorous 14-point assessment to every potential distributor. Here\'s what we look for and why selectivity drives mutual success.',
      readTime: '7 min read',
      featured: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh3v_lugu2MraatB7wQXQtAWuVwX35qQTG10lCDcHLjvGlM_MU593wkQXri_2gpvPRXIRr7Km7I2vPMzhXgcQNODG8Xi8-tlLv9JFHJkV78WBvPv6YbrhgaHLp6_2HQe2M-gLkrlfDta3U345IAs5XcLGrp_vKGQnczp2S_mgBkKxMUfIfwZy8OISw6Nd52sAROwlREK29_Tut9prFME-xHaB3qOpZ0qR4RpGISV7p-5mt6rMw3p1Lq67R2RkrnkbgPmH_hPbN_pSg'
    },
    {
      tag: 'Product Insight',
      date: 'January 25, 2024',
      title: 'The Science Behind Our Sandalwood: From Mysore to Muscat',
      excerpt: 'A deep dive into the sourcing, formulation, and quality control process that makes our Chandan Divine the benchmark for premium incense in the GCC.',
      readTime: '9 min read',
      featured: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-mGulB1GV0lilNnN1hTIghWu3cKfOW3X_85PaEYs0ykTpQXw9AqFenWYuqCi4sbDhBy8gFpL3QtM0tLqfX5NuX4CRDdApRuPaJenx92a5lAs7vzoSIj9hq7DGgYEwQTyTaMaxsZfP9LQeJ6F6TWZVn5suVfwnwuRBqpoDMS0CIHgkXYIbRF_AUjC9BIsfGvYvYdmXQ9ajyhRWKyWckNX58LiRdUMPI7N2HYY7pq8N2-R3WadMM5Ph1aJHW5T2a0cAhFkGWmsjFokL'
    }
  ];

  const featured = posts[0];
  const rest = posts.slice(1);

  return `
    <!-- Blog Hero -->
    <section style="padding:5rem 0 3rem;background:var(--surface);">
      <div class="container">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:1rem;flex-wrap:wrap;gap:1rem;">
          <div>
            <span class="font-mono reveal-up" style="color:var(--secondary);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.2em;display:block;margin-bottom:1rem;">The Sovereign Ledger</span>
            <h1 class="reveal-up" style="font-size:clamp(2.5rem,5vw,4rem);letter-spacing:-0.04em;">Insights & Intelligence</h1>
          </div>
          <span class="font-mono reveal-up" style="font-size:0.75rem;color:var(--outline);">Showing ${posts.length} dispatches</span>
        </div>
        <div style="height:1px;background:var(--outline-variant);opacity:0.3;"></div>
      </div>
    </section>

    <!-- Thank You Banner (shown after form submission) -->
    <section id="thank-you-banner" style="display:none;background:var(--primary);padding:1.25rem 0;">
      <div class="container" style="display:flex;align-items:center;justify-content:center;gap:1rem;">
        <span class="material-symbols-outlined" style="color:var(--secondary-container);">check_circle</span>
        <p style="color:white;font-family:var(--font-headline);font-weight:600;font-size:1rem;">Thank you for your inquiry! Our team will connect with you within 48 hours.</p>
      </div>
    </section>

    <!-- Featured Post -->
    <section style="padding:3rem 0;background:var(--surface);">
      <div class="container">
        <div class="reveal-up r-blog-featured" style="display:grid;grid-template-columns:1.2fr 1fr;gap:0;background:var(--surface-container-lowest);overflow:hidden;cursor:pointer;" onmouseover="this.querySelector('img').style.transform='scale(1.05)'" onmouseout="this.querySelector('img').style.transform='scale(1)'">
          <div style="aspect-ratio:16/10;overflow:hidden;">
            <img src="${featured.image}" alt="${featured.title}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.7s cubic-bezier(0.16,1,0.3,1);" />
          </div>
          <div style="padding:3rem;display:flex;flex-direction:column;justify-content:center;">
            <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">
              <span style="background:var(--secondary-container);color:var(--on-secondary-container);font-family:var(--font-mono);font-size:0.625rem;text-transform:uppercase;letter-spacing:0.15em;padding:0.375rem 0.75rem;font-weight:700;">${featured.tag}</span>
              <span class="font-mono" style="font-size:0.6875rem;color:var(--outline);">${featured.date}</span>
            </div>
            <h2 style="font-size:2rem;letter-spacing:-0.02em;margin-bottom:1rem;line-height:1.2;">${featured.title}</h2>
            <p style="font-size:1rem;line-height:1.7;color:var(--on-surface-variant);margin-bottom:2rem;">${featured.excerpt}</p>
            <div style="display:flex;align-items:center;justify-content:space-between;">
              <span class="font-mono" style="font-size:0.6875rem;color:var(--outline);">${featured.readTime}</span>
              <span style="display:inline-flex;align-items:center;gap:0.5rem;font-family:var(--font-headline);font-weight:700;font-size:0.875rem;color:var(--primary);">
                Read Dispatch <span class="material-symbols-outlined" style="font-size:1.125rem;">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Post Grid -->
    <section style="padding:3rem 0 6rem;background:var(--surface);">
      <div class="container">
        <div class="r-blog-grid reveal-up" style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;">
          ${rest.map(post => `
            <article style="background:var(--surface-container-lowest);cursor:pointer;overflow:hidden;transition:transform 0.3s,box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 20px 40px rgba(0,0,0,0.08)';this.querySelector('img').style.transform='scale(1.05)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none';this.querySelector('img').style.transform='scale(1)'">
              <div style="aspect-ratio:16/10;overflow:hidden;">
                <img src="${post.image}" alt="${post.title}" style="width:100%;height:100%;object-fit:cover;transition:transform 0.7s cubic-bezier(0.16,1,0.3,1);" />
              </div>
              <div style="padding:1.5rem;">
                <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
                  <span style="background:var(--surface-container-high);color:var(--on-surface-variant);font-family:var(--font-mono);font-size:0.5625rem;text-transform:uppercase;letter-spacing:0.12em;padding:0.25rem 0.5rem;font-weight:600;">${post.tag}</span>
                  <span class="font-mono" style="font-size:0.625rem;color:var(--outline);">${post.date}</span>
                </div>
                <h3 style="font-size:1.25rem;letter-spacing:-0.01em;margin-bottom:0.75rem;line-height:1.3;">${post.title}</h3>
                <p style="font-size:0.875rem;line-height:1.6;color:var(--on-surface-variant);margin-bottom:1.5rem;">${post.excerpt.substring(0, 120)}...</p>
                <div style="display:flex;align-items:center;justify-content:space-between;padding-top:1rem;border-top:1px solid rgba(201,197,203,0.2);">
                  <span class="font-mono" style="font-size:0.625rem;color:var(--outline);">${post.readTime}</span>
                  <span class="material-symbols-outlined" style="font-size:1rem;color:var(--primary);">arrow_forward</span>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section style="background:var(--primary);padding:5rem 0;">
      <div class="container" style="text-align:center;">
        <h2 class="reveal-up" style="font-size:clamp(1.75rem,4vw,2.5rem);color:white;margin-bottom:1rem;">Stay informed. Stay ahead.</h2>
        <p class="reveal-up" style="color:var(--on-primary-container);font-size:1.125rem;max-width:480px;margin:0 auto 2rem;">Receive our market intelligence dispatches directly. No noise, only signal.</p>
        <div class="reveal-up" style="display:flex;justify-content:center;gap:0;max-width:480px;margin:0 auto;">
          <input type="email" placeholder="your@email.com" style="flex:1;border:none;border-bottom:2px solid var(--outline);padding:1rem;font-family:var(--font-mono);font-size:0.875rem;background:rgba(255,255,255,0.05);color:white;outline:none;" onfocus="this.style.borderBottomColor='var(--secondary-container)'" onblur="this.style.borderBottomColor='var(--outline)'" />
          <button class="btn" style="background:var(--secondary-container);color:var(--on-secondary-fixed);padding:1rem 2rem;">
            Subscribe <span class="material-symbols-outlined" style="font-size:1rem;">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  `;
}

export function initBlogPage() {
  // Show thank-you banner if redirected from form
  const banner = document.getElementById('thank-you-banner');
  if (banner && sessionStorage.getItem('inquiry-submitted')) {
    banner.style.display = 'block';
    sessionStorage.removeItem('inquiry-submitted');
    
    // Auto-hide after 8 seconds
    setTimeout(() => {
      banner.style.transition = 'all 0.5s ease';
      banner.style.opacity = '0';
      banner.style.maxHeight = '0';
      banner.style.padding = '0';
      banner.style.overflow = 'hidden';
    }, 8000);
  }
}
