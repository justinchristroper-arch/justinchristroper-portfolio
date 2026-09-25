import type { Project } from '../data/projects'

export function ProjectVisual({ project, eager = false }: { project: Project; eager?: boolean }) {
  return (
    <div className="visual-window project-screenshot-frame">
      <div className="visual-topbar" aria-hidden="true"><span /><span /><span /><b>{project.name}</b></div>
      <img
        src={project.image}
        alt={project.imageAlt}
        width="1440"
        height="1000"
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
      />
    </div>
  )
}
