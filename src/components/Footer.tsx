export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-credit">
          Built with <span style={{ color: 'var(--accent-blue)' }}>Terraform</span>
        </p>
        <nav aria-label="Footer navigation">
          <ul className="footer-links" role="list">
            <li>
              <a href="https://github.com" aria-label="View project on GitHub">
                GitHub Repository
              </a>
            </li>
          </ul>
        </nav>
        <p className="footer-copy">&copy; 2026 AI-PIP. All rights reserved.</p>
      </div>
    </footer>
  )
}
