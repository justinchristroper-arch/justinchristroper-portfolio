import { Github, Linkedin, Mail } from 'lucide-react'
import { site } from '../data/site'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="footer">
      <Container className="flex flex-col gap-8 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">Justin Christroper</p>
          <p className="mt-1 text-sm text-muted">Built with React, TypeScript & curiosity.</p>
        </div>
        <div className="flex items-center gap-2">
          <a className="icon-link" href={`mailto:${site.email}`} aria-label="Email Justin"><Mail size={18} /></a>
          <a className="icon-link" href={site.github} target="_blank" rel="noreferrer" aria-label="Justin on GitHub"><Github size={18} /></a>
          <a className="icon-link" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="Justin on LinkedIn"><Linkedin size={18} /></a>
        </div>
        <p className="text-sm text-dim">© {new Date().getFullYear()} Justin Christroper</p>
      </Container>
    </footer>
  )
}
