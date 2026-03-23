export default function Architecture() {
  return (
    <section className="section" id="architecture" aria-labelledby="archTitle">
      <div className="section-inner">
        <span className="section-label">System Design</span>
        <h2 className="section-title" id="archTitle">Architecture Overview</h2>
        <p className="section-desc">
          Five Azure services orchestrated into a cohesive, serverless inference pipeline.
          Every connection secured. Every component modular.
        </p>

        <div className="arch-grid">
          <div className="arch-card reveal">
            <div className="arch-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" /></svg>
            </div>
            <h3>Azure OpenAI Service</h3>
            <p>GPT-4o model deployment for real-time AI inference with RBAC-only authentication.</p>
            <span className="arch-tag">gpt-4o inference</span>
          </div>

          <div className="arch-card is-hub reveal">
            <div className="arch-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            </div>
            <h3>Azure Functions</h3>
            <p>Python 3.11 Linux Function App on Consumption plan. The compute hub orchestrating all services.</p>
            <span className="arch-tag">http trigger</span>
          </div>

          <div className="arch-card reveal">
            <div className="arch-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 5v6c0 1.66-4.03 3-9 3S3 12.66 3 11V5" /><path d="M21 11v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6" /></svg>
            </div>
            <h3>Azure Cosmos DB</h3>
            <p>Serverless SQL API for chat history with automatic indexing and global distribution capability.</p>
            <span className="arch-tag">serverless sql</span>
          </div>
        </div>

        <div className="arch-bridge" aria-hidden="true"><div className="arch-bridge-line" /></div>

        <div className="arch-grid-sub">
          <div className="arch-card reveal">
            <div className="arch-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2" /><path d="M2 8h20M2 16h20M8 2v20M16 2v20" /></svg>
            </div>
            <h3>Virtual Network</h3>
            <p>Network isolation with dedicated subnets and Network Security Groups for defense in depth.</p>
            <span className="arch-tag">nsg + subnets</span>
          </div>

          <div className="arch-card reveal">
            <div className="arch-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 015 5v2a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2V7a5 5 0 015-5z" /><circle cx="12" cy="13" r="1.5" /><path d="M12 14.5v2" /></svg>
            </div>
            <h3>Managed Identity</h3>
            <p>System-assigned identity with RBAC role assignments. Zero keys, zero connection strings.</p>
            <span className="arch-tag">zero-key rbac</span>
          </div>
        </div>
      </div>
    </section>
  )
}
