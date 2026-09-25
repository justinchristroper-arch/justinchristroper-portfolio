import { ArrowDown, ArrowRight, ArrowUpRight, ChartNoAxesCombined, Code2, Github, Layers3, Linkedin, Mail, MessageSquare, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { credentials, processSteps, site, skillGroups } from '../data/site'
import { projects } from '../data/projects'

const processIcons = [Search, ChartNoAxesCombined, Layers3, Code2, MessageSquare]

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-32 sm:pb-14 lg:pb-16">
        <div className="hero-topline">
          <span>PORTFOLIO ’26</span>
          <span className="hero-status"><i /> Available for internship opportunities</span>
        </div>

        <div className="hero-content">
          <p className="hero-name">JUSTIN CHRISTROPER</p>
          <h1 id="hero-title">Building useful systems where <em>business</em>, data, and software meet.</h1>
          <div className="hero-bottom">
            <p>Exploring software, data, and AI through practical projects built around real problems.</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/#projects">View projects <ArrowDown size={17} /></Link>
              <a className="button button-secondary" href={`mailto:${site.email}`}>Contact me <Mail size={17} /></a>
            </div>
          </div>
        </div>

        <div className="hero-footer">
          <span>Computer Science · Software · Data · AI</span>
          <div className="flex gap-2">
            <a className="icon-link" href={site.github} target="_blank" rel="noreferrer" aria-label="Justin on GitHub"><Github size={18} /></a>
            <a className="icon-link" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="Justin on LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </Container>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section section-rule">
      <Container>
        <FadeIn>
          <div className="about-grid">
            <div className="section-kicker"><span>01</span><span>About</span></div>
            <div className="about-main">
              <h2>Curious by nature.<br /><em>Always learning.</em></h2>
              <p>I’m a Computer Science student at BINUS University who enjoys learning new things and exploring how software, data, and AI can solve practical problems.</p>
            </div>
            <dl className="about-meta">
              <div><dt>Education</dt><dd>BINUS University<br />Computer Science<small>AI specialization</small></dd></div>
              <div><dt>Based in</dt><dd>Indonesia</dd></div>
              <div><dt>Currently</dt><dd>Learning · Building · Exploring</dd></div>
            </dl>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function SelectedProjects() {
  return (
    <section id="projects" className="section projects-section">
      <Container>
        <FadeIn><SectionHeading index="02" eyebrow="Selected work" title="Practical problems. Useful systems." description="Projects spanning AI-assisted software, business intelligence, and process automation—each grounded in a clear problem and documented decisions." /></FadeIn>
        <div className="mt-12 space-y-5 lg:mt-16 lg:space-y-7">
          {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
        </div>
      </Container>
    </section>
  )
}

function Process() {
  return (
    <section className="section section-rule">
      <Container>
        <FadeIn><SectionHeading index="03" eyebrow="How I solve problems" title="Start with the problem. Build toward clarity." description="A simple approach I use to move from an unclear need to a useful, explainable result." /></FadeIn>
        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = processIcons[index]
            return (
              <FadeIn className="process-step" delay={index * 0.05} key={step.number}>
                <div className="process-step-top"><span>{step.number}</span><Icon aria-hidden="true" /></div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <Container>
        <FadeIn><SectionHeading index="04" eyebrow="Capabilities" title="Tools for thinking, building, and communicating." description="A growing toolkit across software engineering, data, intelligent systems, and business analysis." /></FadeIn>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <FadeIn className="skill-group" delay={index * 0.04} key={group.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="skill-items">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Credentials() {
  return (
    <section id="certifications" className="section section-rule">
      <Container>
        <FadeIn><SectionHeading index="05" eyebrow="Certifications" title="Structured learning, applied in practice." /></FadeIn>
        <div className="credentials-grid">
          {credentials.map((credential, index) => (
            <FadeIn className="credential-card" delay={index * 0.06} key={credential.title}>
              <div className="credential-image">
                <img src={credential.image} alt={credential.imageAlt} loading="lazy" decoding="async" />
              </div>
              <div className="credential-copy">
                <span className="credential-issuer">{credential.issuer}</span>
                <h3>{credential.title}</h3>
                <p>{credential.detail}</p>
              </div>
              <div className="credential-footer">
                <span>{credential.date}</span>
                {'verificationUrl' in credential && credential.verificationUrl
                  ? <a href={credential.verificationUrl} target="_blank" rel="noopener noreferrer">Verify credential <ArrowUpRight size={13} /></a>
                  : <span>{credential.type}</span>}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Education() {
  return (
    <section className="education-section">
      <Container>
        <FadeIn className="education-card">
          <div className="section-kicker"><span>06</span><span>Education</span></div>
          <div><span className="education-label">University</span><h2>BINUS University</h2></div>
          <div><span className="education-label">Program</span><p>Computer Science<small>AI specialization</small></p></div>
          <div><span className="education-label">Period</span><p>2024—2028</p></div>
          <div><span className="education-label">GPA</span><p>3.27 / 4.00</p></div>
        </FadeIn>
      </Container>
    </section>
  )
}

function Resume() {
  return (
    <section id="resume" className="section">
      <Container>
        <FadeIn className="resume-card">
          <div><span className="eyebrow">Resume</span><h2>A concise view of my education, skills, and work.</h2></div>
          <div className="resume-status"><span>Resume coming soon</span><p>The download will be available here once the final document is ready.</p></div>
        </FadeIn>
      </Container>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <FadeIn>
          <div className="contact-kicker"><span>Have a project, opportunity, or idea?</span><i /></div>
          <h2>Let’s build<br /><em>something useful.</em></h2>
          <div className="contact-bottom">
            <a className="button button-light" href={`mailto:${site.email}`}>{site.email}<ArrowRight size={17} /></a>
            <div className="contact-socials"><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowRight size={14} /></a><a href={site.github} target="_blank" rel="noreferrer">GitHub <ArrowRight size={14} /></a></div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SelectedProjects />
        <Process />
        <Skills />
        <Credentials />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
