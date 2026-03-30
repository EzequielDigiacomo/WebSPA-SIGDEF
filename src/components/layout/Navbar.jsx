import { SigdefLogo } from '../ui/SigdefLogo';

export function Navbar() {
  return (
    <nav className="glass" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0.75rem 3rem', margin: '0.75rem 1rem', borderRadius: '1.25rem',
      boxShadow: '0 8px 32px rgba(13, 22, 36, 0.6)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(45, 140, 80, 0.2)',
    }}>
      <div style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <SigdefLogo size="sm" />
      </div>
      <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        <a href="#servicios" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'var(--transition)' }}
          onMouseEnter={e => e.target.style.color = 'var(--verde-sig)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Servicios</a>
        <a href="#mobile" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'var(--transition)' }}
          onMouseEnter={e => e.target.style.color = 'var(--verde-sig)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>App Móvil</a>
        <a href="#arquitectura" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'var(--transition)' }}
          onMouseEnter={e => e.target.style.color = 'var(--verde-sig)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Arquitectura</a>
        <a href="#contacto" className="btn-primary" style={{ padding: '0.55rem 1.5rem', textDecoration: 'none', fontSize: '0.9rem' }}>Contacto</a>
      </div>
    </nav>
  );
}
