import './App.css'

const strengths = [
  'Security monitoring and anomaly analysis',
  'Cloud security controls in AWS',
  'IAM, access control, and secure architecture',
  'Python, TypeScript, and automation',
  'Threat-focused thinking from military training',
  'Clear technical communication and documentation',
]

const focusAreas = [
  {
    title: 'Security Operations Mindset',
    items: [
      'Investigating abnormal behavior patterns and backend failures',
      'Reviewing logs, tracing service issues, and validating suspicious activity',
      'Turning noisy technical data into actionable findings',
    ],
  },
  {
    title: 'Cloud & Identity Security',
    items: [
      'Worked with IAM roles, isolated VPC architectures, and secure remote access',
      'Supported domain-joined Windows environments and authentication workflows',
      'Built systems with auditability, access control, and compliance in mind',
    ],
  },
  {
    title: 'Technical Edge',
    items: [
      'Developer background in Python, TypeScript, FastAPI, React, and AWS',
      'Able to automate analysis, validate data integrity, and improve workflows',
      'Comfortable bridging security teams and engineering teams',
    ],
  },
]

const experience = [
  {
    role: 'Electronic Warfare Specialist',
    org: 'Army National Guard',
    meta: 'TS/SCI Cleared · Secure environments · Signals analysis · OPSEC',
    bullets: [
      'Trained in electromagnetic spectrum operations, signals monitoring, and adversary detection techniques.',
      'Identified signal patterns and analyzed communications activity to determine potential hostile or unauthorized activity.',
      'Applied operational security principles and classified information handling procedures in controlled secure environments.',
      'Built a strong foundation in threat awareness, secure communications, and mission-focused analysis.',
    ],
  },
  {
    role: 'Cybersecurity / Cloud Security Engineer',
    org: 'HiveTek',
    meta: 'AWS security · IAM · VPCs · secure remote access · system validation',
    bullets: [
      'Implemented secure AWS environments using IAM roles, access controls, and isolated VPC architectures.',
      'Designed domain-joined Windows environments and authentication workflows to strengthen identity and access management.',
      'Supported secure remote access infrastructure using AWS WorkSpaces and AppStream.',
      'Automated validation and logging workflows to improve auditability, integrity checking, and compliance review.',
    ],
  },
  {
    role: 'Security-Focused Software Engineer',
    org: 'Intelagen',
    meta: 'Sensitive data systems · monitoring · authentication · secure APIs',
    bullets: [
      'Supported systems handling sensitive financial and cryptocurrency data requiring strong security controls and monitoring.',
      'Monitored high-volume event streams and analyzed abnormal behavior patterns in activity and transactions.',
      'Investigated backend failures and anomalous responses through log analysis and system tracing.',
      'Implemented authentication, input validation, and data pipeline protections to reduce unauthorized access and malformed-input risk.',
    ],
  },
]

const projects = [
  {
    title: 'Cloud Security & Validation Automation',
    description:
      'Built automated workflows to validate large datasets, identify inconsistencies, and strengthen trust in business records through structured analysis, logging, and secure cloud workflows.',
    tags: ['Python', 'AWS', 'Validation', 'Auditability'],
  },
  {
    title: 'Secure AWS Desktop Environment POC',
    description:
      'Designed an AWS WorkSpaces proof of concept with domain join, Systems Manager, and access-focused architecture to demonstrate secure remote desktop workflows.',
    tags: ['AWS', 'WorkSpaces', 'SSM', 'Identity Security'],
  },
  {
    title: 'Monitoring & Anomaly Analysis in Data-Heavy Systems',
    description:
      'Worked on high-volume systems where logs, alerts, and abnormal behavior patterns had to be analyzed quickly to support reliable and secure operations.',
    tags: ['Monitoring', 'Log Analysis', 'Detection', 'Backend Systems'],
  },
]

function App() {
  return (
    <main className="portfolio">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Cybersecurity Analyst Candidate</p>
          <h1>
            I help secure cloud systems, investigate abnormal behavior, and turn
            technical risk into clear action.
          </h1>
          <p className="intro">
            I’m transitioning from software engineering into cybersecurity, bringing hands-on
            experience in AWS security controls, authentication workflows, monitoring,
            log analysis, and secure system design. My background combines military
            threat-focused training, cloud engineering, and real-world work on
            sensitive systems.
          </p>

          <div className="hero-highlights">
            <span>TS/SCI Cleared</span>
            <span>Cloud Security</span>
            <span>Monitoring & Analysis</span>
            <span>Developer-to-Security Transition</span>
          </div>

          <div className="hero-actions">
            <a
              className="button primary"
              href="/Elijah_Early_Resume%20(1).pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
            <a
              className="button secondary"
              href="mailto:elijah.early@gmail.com"
            >
              Email Me
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/elijah-early/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <section className="section summary">
        <div className="section-header">
          <span className="section-tag">Why me</span>
          <h2>A security candidate with an engineering advantage</h2>
        </div>
        <p>
          Many entry-level candidates understand security theory. I bring that mindset
          together with experience building and supporting production systems. That means
          I can read logs, understand application behavior, analyze access issues,
          communicate with developers, and contribute to practical remediation.
        </p>

        <ul className="pill-list">
          {strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-tag">Focus</span>
          <h2>What I bring to a cybersecurity analyst role</h2>
        </div>

        <div className="grid-list">
          {focusAreas.map((area) => (
            <article className="card" key={area.title}>
              <h3>{area.title}</h3>
              <ul>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience">
        <div className="section-header">
          <span className="section-tag">Experience</span>
          <h2>Relevant background</h2>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={`${item.role}-${item.org}`}>
              <h3>
                {item.role} <span>@ {item.org}</span>
              </h3>
              <p className="meta">{item.meta}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2>Projects that support my transition</h2>
        </div>

        <div className="grid-list">
          {projects.map((project) => (
            <article className="card project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="mini-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section grid-list">
        <article className="card">
          <h3>Tools & technologies</h3>
          <ul>
            <li>AWS IAM, VPC, Lambda, CloudFormation, WorkSpaces, AppStream, SSM</li>
            <li>Python, TypeScript, FastAPI, React, SQL, GitHub Actions</li>
            <li>Log analysis, API validation, authentication workflows, system tracing</li>
            <li>Secure data handling, auditability, and workflow automation</li>
          </ul>
        </article>

        <article className="card">
          <h3>What I’m targeting</h3>
          <ul>
            <li>Cybersecurity Analyst</li>
            <li>SOC Analyst</li>
            <li>Cloud Security Analyst</li>
            <li>Security Operations / Threat Monitoring roles</li>
          </ul>
        </article>
      </section>

      <section className="section contact">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2>Let’s connect</h2>
        </div>
        <p>
          I’m looking for cybersecurity analyst opportunities where I can apply my
          cloud, monitoring, and engineering background to help defend systems,
          investigate issues, and improve security operations.
        </p>

        <div className="contact-list">
          <a href="mailto:elijah.early@gmail.com">elijah.early@gmail.com</a>
          <a href="tel:8172336608">817.233.6608</a>
          <a href="https://github.com/eearly01" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/elijah-early/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}

export default App