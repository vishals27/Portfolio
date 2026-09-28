import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const skills = [
  'C#', '.NET Core', 'ASP.NET Core', 'ASP.NET MVC', 'React.js',
  'TypeScript', 'Next.js', 'SQL Server', 'Azure Functions',
  'Azure Service Bus', 'Entity Framework Core', 'REST APIs',
  'OAuth 2.0', 'JWT', 'Microservices', 'CI/CD', 'xUnit', 'NUnit', 'Moq'
]

const projects = [
  {
    title: 'Insurance Policy Quoting Platform',
    text: 'Engineered a high-performance insurance quoting and issuance platform integrating multi-carrier REST APIs, policy rating flows, and automated document generation.',
    tags: ['.NET Core', 'REST APIs', 'SQL Server', 'DocxTemplater']
  },
  {
    title: 'Low-Code / No-Code Workflow Engine',
    text: 'Developed a configurable workflow engine using React.js and TypeScript for dynamic form rendering and automated backend process execution in .NET Core.',
    tags: ['React.js', 'TypeScript', '.NET Core', 'JSON Schema']
  },
  {
    title: 'Asynchronous Document Processing Pipeline',
    text: 'Architected cloud-based asynchronous workflows for decoupled document generation and mail-merge operations processing high-volume daily transactions.',
    tags: ['Azure Functions', 'Azure Service Bus', 'Blob Storage', 'C#']
  },
  {
    title: 'Policy Rating & Premium Calculations',
    text: 'Maintained and optimized complex rating algorithms, tax and fee computations, endorsements, and stored procedures, cutting database response times by 30%.',
    tags: ['C#', 'SQL Server', 'LINQ', 'Stored Procedures']
  }
]

function App() {
  return (
    <div className="app">
      <header className="nav">
        <a className="logo" href="#home">VP<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a href="/Resume.pdf" target="_blank" rel="noreferrer" className="resume-btn">Resume</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">FULL STACK .NET DEVELOPER</p>
            <h1>Hi, I'm <span>Vishal Pandey</span>.</h1>
            <h2>Building scalable enterprise software for the insurance industry.</h2>
            <p className="hero-text">
              4+ years of experience engineering high-performance web applications,
              microservices, and APIs using .NET Core, C#, SQL Server, React.js, and Azure Cloud.
            </p>
            <div className="buttons">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn secondary" href="/Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
              <a className="btn secondary" href="#contact">Contact Me</a>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-card-top">
              <div className="profile-badge">
                <span className="badge-avatar">VP</span>
                <div>
                  <h3 className="profile-name">Vishal Pandey</h3>
                  <p className="profile-role">Full Stack .NET Developer</p>
                </div>
              </div>
              <div className="status-indicator">
                <span className="pulse-dot"></span>
                <span>Available</span>
              </div>
            </div>

            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-val">4+</span>
                <span className="stat-lbl">Years Exp.</span>
              </div>
              <div className="stat-item">
                <span className="stat-val">Enterprise</span>
                <span className="stat-lbl">Insurance Tech</span>
              </div>
              <div className="stat-item">
                <span className="stat-val">Full Stack</span>
                <span className="stat-lbl">.NET & React</span>
              </div>
            </div>

            <div className="profile-section">
              <span className="profile-section-title">PRIMARY TECHNOLOGIES</span>
              <div className="stack-pills">
                <span className="pill">C#</span>
                <span className="pill">.NET Core</span>
                <span className="pill">React.js</span>
                <span className="pill">TypeScript</span>
                <span className="pill">SQL Server</span>
                <span className="pill">Azure Cloud</span>
              </div>
            </div>

            <div className="profile-footer">
              <div className="profile-info-row">
                <span className="info-key">Current Company</span>
                <span className="info-val">Cogitate Technology Solutions</span>
              </div>
              <div className="profile-info-row">
                <span className="info-key">Specialization</span>
                <span className="info-val">Rating, APIs & Transactions</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="section-label">01 — ABOUT</p>
          <h2>Turning business requirements into <span>clean software.</span></h2>
          <div className="about-grid">
            <p>
              I am a Full Stack .NET Developer with over 4 years of experience
              building enterprise-grade applications. My expertise spans C#, .NET Core,
              ASP.NET MVC, Web APIs, Entity Framework Core, SQL Server, React.js,
              and Azure cloud services.
            </p>
            <p>
              I have worked extensively in the insurance technology domain, including
              multi-carrier API integrations, policy rating, premium calculations,
              taxes & fees, automated document generation, and high-volume transaction processing.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="section-label">02 — SKILLS</p>
          <h2>My technical <span>toolbox.</span></h2>
          <div className="skills">
            {skills.map(skill => <div className="skill" key={skill}>{skill}</div>)}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-label">03 — PROJECTS</p>
          <h2>Selected <span>work.</span></h2>
          <div className="project-grid">
            {projects.map((project, i) => (
              <article className="project" key={project.title}>
                <div className="project-number">0{i + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <p className="section-label">04 — EXPERIENCE</p>
          <h2>What I've been <span>working on.</span></h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div>
                <p className="date">MAY 2023 — PRESENT</p>
                <h3>Software Developer — Cogitate Technology Solutions</h3>
                <p>
                  Engineering scalable enterprise backend microservices and insurance
                  solutions using C#, .NET Core, SQL Server, React.js, and Azure. Orchestrating
                  cloud document workflows, optimizing database indexing and stored procedures,
                  and implementing JWT/OAuth 2.0 security.
                </p>
              </div>
            </div>

            <div className="timeline-item" style={{ marginTop: '35px' }}>
              <div className="timeline-dot"></div>
              <div>
                <p className="date">MAY 2022 — APR 2023</p>
                <h3>Associate Developer — Cogitate Technology Solutions</h3>
                <p>
                  Built data-driven web applications using ASP.NET MVC, Razor Views, and
                  JavaScript. Created and consumed RESTful APIs for carrier integrations and
                  authored automated unit test suites using xUnit, NUnit, and Moq.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="section-label">05 — CONTACT</p>
          <h2>Let's build something <span>great.</span></h2>
          <p>I'm currently based in Mumbai, India and open to software development opportunities.</p>
          <div className="contact-links">
            <a href="mailto:vishal.ppp.9721@gmail.com">Email</a>
            <a href="tel:+919721489210">+91 9721489210</a>
            <a href="https://www.linkedin.com/in/vishal-pandey-46551b1b9" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="/resume.html" target="_blank" rel="noreferrer">Resume ↗</a>
          </div>
        </section>
      </main>

      <footer>© 2026 Vishal Pandey · Built with React</footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)