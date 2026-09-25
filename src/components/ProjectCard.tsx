import { ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { FadeIn } from './FadeIn'
import { ProjectVisual } from './ProjectVisual'

export function ProjectCard({ project }: { project: Project }) {
  const liveLink = project.links.find((link) => link.kind === 'primary')
  const github = project.links.find((link) => link.label === 'GitHub')

  return (
    <FadeIn>
      <article className="project-card group">
        <div className="project-card-copy">
          <div className="project-meta"><span>{project.index}</span><span>{project.category}</span><span>{project.year}</span></div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="tag-list">{project.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-actions">
            <Link className="text-link" to={`/projects/${project.slug}`}>View case study <ArrowRight size={17} /></Link>
            {liveLink && <a className="quiet-link" href={liveLink.href} target="_blank" rel="noreferrer">{liveLink.label}<ArrowUpRight size={15} /></a>}
            {github && <a className="quiet-link" href={github.href} target="_blank" rel="noreferrer" aria-label={`${project.name} on GitHub`}><Github size={15} /> GitHub</a>}
          </div>
        </div>
        <Link to={`/projects/${project.slug}`} className="project-visual-link" aria-label={`Read the ${project.name} case study`}>
          <ProjectVisual project={project} />
        </Link>
      </article>
    </FadeIn>
  )
}
