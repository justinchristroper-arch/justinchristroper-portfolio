import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { ProjectVisual } from '../components/ProjectVisual'
import { getProject, projects, type CaseStudySection } from '../data/projects'

function CaseSection({ section, index }: { section: CaseStudySection; index: number }) {
  return (
    <section className="case-section">
      <FadeIn className="case-section-grid">
        <div className="case-section-label"><span>{String(index + 1).padStart(2, '0')}</span><p>{section.eyebrow}</p></div>
        <div className="case-section-content">
          <h2>{section.title}</h2>
          {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.flow && <div className="case-flow">{section.flow.map((step, flowIndex) => <div key={step}><span>{String(flowIndex + 1).padStart(2, '0')}</span><b>{step}</b>{flowIndex < section.flow!.length - 1 && <ArrowRight aria-hidden="true" size={14} />}</div>)}</div>}
          {section.metrics && <div className="case-metrics">{section.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span>{metric.note && <small>{metric.note}</small>}</div>)}</div>}
          {section.bullets && <ul className="case-list">{section.bullets.map((bullet) => <li key={bullet}><span />{bullet}</li>)}</ul>}
          {section.callout && <div className="case-callout"><span>Important note</span><p>{section.callout}</p></div>}
        </div>
      </FadeIn>
    </section>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <Navigate to="/404" replace />

  const projectIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return (
    <>
      <Navbar />
      <main className="case-page">
        <section className="case-hero">
          <Container>
            <Link className="back-link" to="/#projects"><ArrowLeft size={16} /> All projects</Link>
            <div className="case-hero-grid">
              <FadeIn className="case-hero-copy">
                <div className="case-meta"><span>{project.index} / {String(projects.length).padStart(2, '0')}</span><span>{project.status}</span><span>{project.year}</span></div>
                <p className="case-category">{project.category}</p>
                <h1>{project.name}</h1>
                <p className="case-summary">{project.summary}</p>
                <div className="case-actions">
                  {project.links.map((link) => <a className={link.kind === 'primary' ? 'button button-primary' : 'button button-secondary'} href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label}<ArrowUpRight size={16} /></a>)}
                </div>
              </FadeIn>
              <FadeIn className="case-visual" delay={0.1}><ProjectVisual project={project} eager /></FadeIn>
            </div>
            <div className="case-tech-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
          </Container>
        </section>

        <Container className="case-body">
          {project.sections.map((section, index) => <CaseSection section={section} index={index} key={`${section.eyebrow}-${section.title}`} />)}
        </Container>

        <section className="next-project">
          <Container>
            <span>Next case study</span>
            <Link to={`/projects/${nextProject.slug}`}><span>{nextProject.name}</span><ArrowRight /></Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
