export default function Cost() {
  return (
    <section className="section section-alt" id="cost" aria-labelledby="costTitle">
      <div className="section-inner">
        <span className="section-label">Efficiency</span>
        <h2 className="section-title" id="costTitle">Pay Only for What You Use</h2>
        <p className="section-desc">
          Every component runs serverless. No idle compute. No over-provisioned databases.
          Costs scale linearly with actual usage.
        </p>

        <div className="cost-grid">
          <div className="cost-card reveal">
            <div className="cost-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            </div>
            <h3>Consumption Plan</h3>
            <p>Azure Functions on the Consumption tier. Pay per execution with automatic scale-to-zero when idle.</p>
          </div>
          <div className="cost-card reveal">
            <div className="cost-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 5v6c0 1.66-4.03 3-9 3S3 12.66 3 11V5" /><path d="M21 11v6c0 1.66-4.03 3-9 3s-9-1.34-9-3v-6" /></svg>
            </div>
            <h3>Serverless Cosmos DB</h3>
            <p>Request-unit billing with no pre-provisioned throughput. Ideal for variable and bursty workloads.</p>
          </div>
          <div className="cost-card reveal">
            <div className="cost-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
            </div>
            <h3>Infracost Integration</h3>
            <p>Automated cost estimation in the pipeline. Know the price before you deploy, every time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
