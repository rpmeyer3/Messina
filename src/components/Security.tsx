export default function Security() {
  return (
    <section className="section section-alt" id="security" aria-labelledby="secTitle">
      <div className="section-inner">
        <span className="section-label">Defense in Depth</span>
        <h2 className="section-title" id="secTitle">Zero-Key Security</h2>
        <p className="section-desc">
          No API keys. No connection strings. No secrets in code. Every service authenticates
          through Azure RBAC and Managed Identity.
        </p>

        <div className="sec-grid">
          <div className="sec-card reveal">
            <div className="sec-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3>Managed Identity RBAC</h3>
            <p>System-assigned identity with least-privilege role assignments across all services.</p>
          </div>
          <div className="sec-card reveal">
            <div className="sec-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
            </div>
            <h3>TLS 1.2 Everywhere</h3>
            <p>Minimum TLS 1.2 enforced on every service endpoint without exception.</p>
          </div>
          <div className="sec-card reveal">
            <div className="sec-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
            </div>
            <h3>No Connection Strings</h3>
            <p>All service-to-service auth uses identity-based access. No secrets to rotate or leak.</p>
          </div>
          <div className="sec-card reveal">
            <div className="sec-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" y1="22" x2="4" y2="15" /></svg>
            </div>
            <h3>FTPS Disabled</h3>
            <p>FTP deployment fully disabled. Deployed only through secure CI/CD pipelines.</p>
          </div>
          <div className="sec-card reveal">
            <div className="sec-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M18.36 6.64A9 9 0 015.64 18.36M5.64 5.64A9 9 0 0118.36 18.36" /><line x1="2" y1="2" x2="22" y2="22" /></svg>
            </div>
            <h3>Local Auth Disabled</h3>
            <p>OpenAI local authentication disabled. Only RBAC-authenticated requests accepted.</p>
          </div>
          <div className="sec-card reveal">
            <div className="sec-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>
            </div>
            <h3>Storage MI Access</h3>
            <p>Function App storage accessed exclusively via Managed Identity. No account keys.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
