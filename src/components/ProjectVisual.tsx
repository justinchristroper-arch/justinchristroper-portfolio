import type { Project } from '../data/projects'

export function ProjectVisual({ project, eager = false }: { project: Project; eager?: boolean }) {
  return (
    <div className="visual-window project-screenshot-frame">
      <div className="visual-topbar" aria-hidden="true"><span /><span /><span /><b>{project.name}</b></div>
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt ?? `${project.name} project screenshot`}
          width="1440"
          height="1000"
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
        />
      ) : (
        <div className="flex aspect-[1.44/1] flex-col items-center justify-center gap-3 bg-[#0d1117] px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#82aef9]">{project.index}</span>
          <strong className="max-w-sm text-3xl font-semibold tracking-[-0.05em] text-[#f4f6f8]">{project.name}</strong>
          <span className="max-w-xs text-xs leading-5 text-[#98a2ae]">No repository screenshot supplied yet.</span>
        </div>
      )}
    </div>
  )
}
