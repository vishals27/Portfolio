import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const skills = [
  'C#', '.NET', '.NET Core', 'ASP.NET MVC', 'Web API',
  'Entity Framework', 'SQL Server', 'React', 'JavaScript',
  'jQuery', 'Azure Functions', 'Git', 'Azure DevOps', 'Postman',
  'xUnit', 'NUnit', 'Moq'
]

const projects = [
  {
    title: 'Insurance RPS Portal',
    text: 'Enterprise insurance application supporting policy lifecycle, rating, transactions and document workflows.',
    tags: ['.NET Core', 'ASP.NET MVC', 'SQL Server']
  },
  {
    title: 'Policy Rating & Premium',
    text: 'Developed and maintained rating flows, premium calculations, taxes and fees for insurance policies and endorsements.',
    tags: ['C#', 'APIs', 'SQL']
  },
  {
    title: 'API Integrations',
    text: 'Worked on insurance carrier and third-party API integrations, request/response transformations and production support.',
    tags: ['Web API', 'JSON', 'Azure']
  },
  {
    title: 'Document Generation',
    text: 'Built document generation and mail-merge workflows for policy and transaction documents.',
    tags: ['C#', 'DOCX', 'JavaScript']
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
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="nav-resume">Resume ↗</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">SOFTWARE DEVELOPER</p>
            <h1>Hi, I'm <span>Vishal Pandey</span>.</h1>
            <h2>Building reliable software for the insurance industry.</h2>
            <p className="hero-text">
              4 years of experience developing scalable web applications and APIs
              using .NET, C#, SQL Server and React, with strong experience in the
              insurance domain.
            </p>
            <div className="buttons">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn secondary" href="/resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
              <a className="btn secondary" href="#contact">Contact Me</a>
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-card-top">
              <div className="profile-badge">
                <span className="badge-avatar">VP</span>
                <div>
                  <h3 className="profile-name">Vishal Pandey</h3>
                  <p className="profile-role">Software Developer</p>
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
                <span className="stat-lbl">Domain</span>
              </div>
              <div className="stat-item">
                <span className="stat-val">Full Stack</span>
                <span className="stat-lbl">Focus</span>
              </div>
            </div>

            <div className="profile-section">
              <span className="profile-section-title">PRIMARY TECHNOLOGIES</span>
              <div className="stack-pills">
                <span className="pill">C#</span>
                <span className="pill">.NET Core</span>
                <span className="pill">React</span>
                <span className="pill">SQL Server</span>
                <span className="pill">Web APIs</span>
                <span className="pill">Azure</span>
              </div>
            </div>

            <div className="profile-footer">
              <div className="profile-info-row">
                <span className="info-key">Industry</span>
                <span className="info-val">Insurance & Policy Systems</span>
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
              I am a Software Developer focused on building and maintaining
              enterprise applications with C#, .NET and .NET Core. My experience
              includes ASP.NET MVC, Web APIs, Entity Framework, SQL Server and
              React.
            </p>
            <p>
              I have worked extensively in the insurance domain, including policy
              processing, rating, premium calculations, taxes and fees, API
              integrations, document generation and production support.
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
                <p className="date">2022 — PRESENT</p>
                <h3>Software Developer</h3>
                <p>
                  Developing enterprise insurance solutions using .NET, ASP.NET
                  MVC, .NET Core APIs, SQL Server and React. Working on policy
                  transactions, rating flows, carrier integrations, document
                  generation, database optimization and production issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="section-label">05 — CONTACT</p>
          <h2>Let's build something <span>great.</span></h2>
          <p>I'm currently exploring new software development opportunities.</p>
          <div className="contact-links">
            <a href="mailto:vishal.ppp.9721@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/vishal-pandey-46551b1b9" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
            {/* <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a> */}
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