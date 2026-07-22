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
      <div
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span style={{
          fontFamily: 'Montserrat, Inter, sans-serif',
          fontWeight: 800,
          fontSize: '1.15rem',
          letterSpacing: '0.02em',
          color: 'var(--text-main)',
          lineHeight: 1,
        }}>
          Dgo<span style={{ color: 'var(--verde-sig-light)' }}>Tech</span>
        </span>
        <span style={{ height: '1.35rem', width: '1px', background: 'rgba(255,255,255,0.12)' }} className="logo-full" />
        <SigdefLogo size="sm" />
      </div>
      <div className="nav-links" style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
        <a href="#sistemas" className="nav-desktop-only" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', transition: 'var(--transition)' }}
          onMouseEnter={e => e.target.style.color = 'var(--verde-sig-light)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Sistemas</a>
        <a href="#servicios" className="nav-desktop-only" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', transition: 'var(--transition)' }}
          onMouseEnter={e => e.target.style.color = 'var(--verde-sig-light)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Planes</a>
        <a href="#mobile" className="nav-desktop-only" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', transition: 'var(--transition)' }}
          onMouseEnter={e => e.target.style.color = 'var(--verde-sig-light)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>App Móvil</a>
        <a href="#arquitectura" className="nav-desktop-only" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem', transition: 'var(--transition)' }}
          onMouseEnter={e => e.target.style.color = 'var(--verde-sig-light)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Tecnología</a>
        <span style={{ height: '1.5rem', width: '1px', background: 'rgba(255,255,255,0.1)' }} className="logo-full" />
        <a href="https://sigdef.pro/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, fontSize: '0.82rem', border: '1px solid rgba(45, 140, 80, 0.3)', padding: '0.35rem 0.75rem', borderRadius: '0.5rem', transition: 'var(--transition)' }} className="logo-full"
          onMouseEnter={e => e.target.style.borderColor = 'var(--verde-sig-light)'} onMouseLeave={e => e.target.style.borderColor = 'rgba(45, 140, 80, 0.3)'}>Ingresar SIGDEF</a>
        <a href="https://sporttrack.pro/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, fontSize: '0.82rem', border: '1px solid rgba(0, 112, 243, 0.3)', padding: '0.35rem 0.75rem', borderRadius: '0.5rem', transition: 'var(--transition)' }} className="logo-full"
          onMouseEnter={e => e.target.style.borderColor = 'var(--azul-st-light)'} onMouseLeave={e => e.target.style.borderColor = 'rgba(0, 112, 243, 0.3)'}>Ingresar SportTrack</a>
        <a href="#contacto" className="btn-primary" style={{ padding: '0.55rem 1.25rem', textDecoration: 'none', fontSize: '0.85rem' }}>Contacto</a>
      </div>
    </nav>
  );
}
