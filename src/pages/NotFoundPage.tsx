import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { Navbar } from '../components/Navbar'

export function NotFoundPage() {
  return (
    <><Navbar /><main className="not-found"><Container><span>404</span><h1>This page hasn’t been built.</h1><p>The useful route is back this way.</p><Link className="button button-primary" to="/"><ArrowLeft size={16} /> Back home</Link></Container></main></>
  )
}
