import { ArrowRight } from 'lucide-react';
import { SigdefLogo } from '../ui/SigdefLogo';

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(45, 140, 80, 0.15)', background: 'rgba(13, 22, 36, 0.8)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '3rem', marginBottom: '3rem', textAlign: 'left' }}>
        <div>
          <SigdefLogo size="sm" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '1.25rem', lineHeight: 1.7, maxWidth: '280px' }}>
            Líderes en transformación digital para entidades deportivas en Argentina y Latinoamérica.
          </p>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.25rem', fontSize: '0.95rem' }}>Navegación</h4>
          <div style={{ display: 'grid', gap: '0.65rem', fontSize: '0.875rem' }}>
            {[['Inicio', '#'], ['Niveles', '#niveles'], ['Arquitectura', '#arquitectura'], ['Contacto', '#contacto']].map(([label, href]) => (
              <a key={label} href={href} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{label}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.25rem', fontSize: '0.95rem' }}>Legal</h4>
          <div style={{ display: 'grid', gap: '0.65rem', fontSize: '0.875rem' }}>
            {['Términos de Uso', 'Política de Privacidad', 'Protección de Datos'].map(label => (
              <a key={label} href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{label}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.25rem', fontSize: '0.95rem' }}>Newsletter</h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>Novedades y actualizaciones del sistema.</p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="email" placeholder="tu@email.com" style={{ marginBottom: 0, padding: '0.6rem 0.85rem', fontSize: '0.875rem' }} />
            <button className="btn-primary" style={{ padding: '0.6rem 1rem', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ borderTop: '1px solid rgba(45, 140, 80, 0.1)', paddingTop: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>
          © 2026 SIGDEF · Sistema de Gestión Deportiva Federativa · Todos los derechos reservados
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>
          Creado por <span style={{ color: 'var(--verde-sig)', fontWeight: 600 }}>Ezequiel Di Giacomo</span> · www.sigdef.com.ar
        </p>
      </div>
    </footer>
  );
}
