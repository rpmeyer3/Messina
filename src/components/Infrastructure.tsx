export default function Infrastructure() {
  return (
    <section className="section" id="infrastructure" aria-labelledby="iacTitle">
      <div className="section-inner">
        <span className="section-label">Infrastructure as Code</span>
        <h2 className="section-title" id="iacTitle">Modular Terraform</h2>
        <p className="section-desc">
          Clean, auditable infrastructure defined in HCL. Three focused modules, zero
          hardcoded secrets, validated and ready to deploy.
        </p>

        <div className="iac-layout">
          <div className="iac-panel reveal">
            <div className="iac-bar">
              <span className="iac-dot iac-dot--r" aria-hidden="true" />
              <span className="iac-dot iac-dot--y" aria-hidden="true" />
              <span className="iac-dot iac-dot--g" aria-hidden="true" />
              <span className="iac-bar-title">Explorer</span>
            </div>
            <div
              className="tree-body"
              role="img"
              aria-label="Project file tree: root Terraform files and three modules — compute, database, and network"
            >
              <span className="td">ai-pip/</span>{'\n'}
              <span className="tc">{'├──'}</span> <span className="tf">main.tf</span>{'\n'}
              <span className="tc">{'├──'}</span> <span className="tf">outputs.tf</span>{'\n'}
              <span className="tc">{'├──'}</span> <span className="tf">providers.tf</span>{'\n'}
              <span className="tc">{'├──'}</span> <span className="tf">variables.tf</span>{'\n'}
              <span className="tc">{'├──'}</span> <span className="tf">terraform.tfvars</span>{'\n'}
              <span className="tc">{'└──'}</span> <span className="td">modules/</span>{'\n'}
              {'    '}<span className="tc">{'├──'}</span> <span className="td">compute/</span>{'\n'}
              {'    '}<span className="tc">{'│   ├──'}</span> <span className="tf">main.tf</span>{'\n'}
              {'    '}<span className="tc">{'│   ├──'}</span> <span className="tf">outputs.tf</span>{'\n'}
              {'    '}<span className="tc">{'│   └──'}</span> <span className="tf">variables.tf</span>{'\n'}
              {'    '}<span className="tc">{'├──'}</span> <span className="td">database/</span>{'\n'}
              {'    '}<span className="tc">{'│   ├──'}</span> <span className="tf">main.tf</span>{'\n'}
              {'    '}<span className="tc">{'│   ├──'}</span> <span className="tf">outputs.tf</span>{'\n'}
              {'    '}<span className="tc">{'│   └──'}</span> <span className="tf">variables.tf</span>{'\n'}
              {'    '}<span className="tc">{'└──'}</span> <span className="td">network/</span>{'\n'}
              {'        '}<span className="tc">{'├──'}</span> <span className="tf">main.tf</span>{'\n'}
              {'        '}<span className="tc">{'├──'}</span> <span className="tf">outputs.tf</span>{'\n'}
              {'        '}<span className="tc">{'└──'}</span> <span className="tf">variables.tf</span>
            </div>
          </div>

          <div className="iac-col">
            <div className="iac-stats">
              <div className="iac-stat reveal">
                <div className="iac-stat-val">~15</div>
                <div className="iac-stat-lbl">Resources</div>
              </div>
              <div className="iac-stat reveal">
                <div className="iac-stat-val">3</div>
                <div className="iac-stat-lbl">Modules</div>
              </div>
              <div className="iac-stat reveal">
                <div className="iac-stat-val">0</div>
                <div className="iac-stat-lbl">Hardcoded Secrets</div>
              </div>
            </div>

            <div className="iac-panel reveal">
              <div className="iac-bar">
                <span className="iac-dot iac-dot--r" aria-hidden="true" />
                <span className="iac-dot iac-dot--y" aria-hidden="true" />
                <span className="iac-dot iac-dot--g" aria-hidden="true" />
                <span className="iac-bar-title">Terminal</span>
              </div>
              <div className="term-body">
                <div><span className="tp">$ </span><span className="tc2">terraform validate</span></div>
                <div><span className="to">Success! The configuration is valid.</span></div>
                <div><span className="tp">$ </span><span className="term-cursor" aria-hidden="true" /></div>
              </div>
            </div>

            <div className="iac-badge reveal">
              <span className="iac-badge-label">Provider</span>
              <code className="iac-badge-val">azurerm v4.64.0</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
