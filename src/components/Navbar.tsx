import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navItems } from '../data/site'
import { Container } from './Container'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <Container>
        <nav className="navbar" aria-label="Primary navigation">
          <Link to="/" className="brand" aria-label="Justin Christroper home" onClick={() => setOpen(false)}>
            <span>J</span>
            <span className="hidden sm:inline">Justin Christroper</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link className="nav-link" to={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>

          <Link to="/#contact" className="nav-cta hidden sm:inline-flex lg:hidden">Let’s talk</Link>
          <button className="menu-button lg:hidden" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link to="/#contact" className="nav-cta hidden lg:inline-flex">Let’s talk</Link>
        </nav>

        {open && (
          <div id="mobile-menu" className="mobile-menu lg:hidden">
            {navItems.map((item) => (
              <Link to={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
          </div>
        )}
      </Container>
    </header>
  )
}
