import './App.css'

function App() {
  return (
    <main className="portfolio">
      <header className="hero">
        <div>
          <p className="eyebrow">Junior Cybersecurity Analyst</p>
          <h1>Securing systems with practical threat intelligence and risk-driven defense.</h1>
          <p className="intro">
            I build reliable monitoring, incident response, and vulnerability management workflows for enterprise environments.
            My focus is on security operations, control validation, and continuous improvement.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/Elijah_Early_Resume%20(1).pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a className="button secondary" href="mailto:hello@example.com">
              Contact Me
            </a>
          </div>
        </div>
      </header>

      <section className="section summary">
        <div className="section-header">
          <span className="section-tag">Profile</span>
          <h2>Professional summary</h2>
        </div>
        <p>
          Junior cybersecurity analyst with hands-on experience in security assessments, log analysis, and policy enforcement.
          Comfortable working across SIEM tools, endpoint protection, and identity security to support secure operations.
        </p>
        <ul className="pill-list">
          <li>Threat detection and incident investigation</li>
          <li>Vulnerability assessment and remediation</li>
          <li>Security policy and framework alignment</li>
        </ul>
      </section>

      <section className="section grid-list">
        <article className="card">
          <h3>Core skills</h3>
          <ul>
            <li>Security operations center (SOC) monitoring</li>
            <li>SIEM & EDR tool management</li>
            <li>Vulnerability scanning (Nessus, OpenVAS)</li>
            <li>Network security fundamentals</li>
          </ul>
        </article>
        <article className="card">
          <h3>Security knowledge</h3>
          <ul>
            <li>MITRE ATT&amp;CK use cases</li>
            <li>Incident response lifecycle</li>
            <li>Cloud security controls</li>
            <li>Compliance frameworks: NIST, ISO 27001</li>
          </ul>
        </article>
      </section>

      <section className="section experience">
        <div className="section-header">
          <span className="section-tag">Experience</span>
          <h2>Relevant projects & roles</h2>
        </div>
        <div className="experience-list">
          <article className="experience-item">
            <h3>Security analyst internship</h3>
            <p className="meta">Threat monitoring · Incident response · Policy review</p>
            <ul>
              <li>Supported daily review of alerts and validated suspicious activity across endpoint and network logs.</li>
              <li>Documented findings for escalation, improving triage accuracy and reducing false positives.</li>
              <li>Maintained vulnerability reports and helped coordinate remediation tasks with IT teams.</li>
            </ul>
          </article>
          <article className="experience-item">
            <h3>Security operations project</h3>
            <p className="meta">Log analysis · SIEM use cases · Control mapping</p>
            <ul>
              <li>Built dashboards and rules to detect suspicious authentication and lateral movement patterns.</li>
              <li>Performed risk assessments on cloud assets and documented mitigation recommendations.</li>
              <li>Collaborated with cross-functional teams to improve access control and audit readiness.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section grid-list">
        <article className="card">
          <h3>Certifications</h3>
          <ul>
            <li>CompTIA Security+</li>
            <li>Certified Cybersecurity Analyst (CySA+)</li>
            <li>Cloud Security Fundamentals</li>
          </ul>
        </article>
        <article className="card">
          <h3>Tools & technologies</h3>
          <ul>
            <li>Splunk, Elastic Security, Graylog</li>
            <li>Wireshark, Nmap, Burp Suite</li>
            <li>Microsoft Defender, CrowdStrike, Prisma Cloud</li>
            <li>PowerShell, Python, Bash</li>
          </ul>
        </article>
      </section>

      <section className="section contact">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2>Let's connect</h2>
        </div>
        <p>
          I’m available for junior analyst and SOC support roles. I enjoy turning security data into clear action items and building stronger defenses.
        </p>
        <div className="contact-list">
          <a href="mailto:hello@example.com">hello@example.com</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>
    </main>
  )
}

export default App
