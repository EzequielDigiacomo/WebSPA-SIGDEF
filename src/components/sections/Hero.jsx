import { ArrowRight, ExternalLink } from 'lucide-react';
import dashboardImg from '../../assets/dashboard-preview.png';

export function Hero() {
  return (
    <section className="container hero-grid" style={{
      paddingTop: '9rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'
    }}>
      <div className="hero-copy" style={{ textAlign: 'left', minWidth: 0 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(45, 140, 80, 0.1)', border: '1px solid rgba(45, 140, 80, 0.25)',
          borderRadius: '9999px', padding: '0.35rem 1rem', marginBottom: '1.5rem',
          fontSize: '0.8rem', fontWeight: 600, color: 'var(--verde-sig)', letterSpacing: '0.05em'
        }}>
          <span style={{ width: 8, height: 8, background: 'var(--verde-sig)', borderRadius: '50%', display: 'inline-block', animation: 'pulseDot 2s ease infinite' }} />
          DGOTECH · ECOSISTEMA DEPORTIVO
        </div>

        <h1 style={{ fontSize: '3.8rem', marginBottom: '1.5rem', lineHeight: 1.1, fontWeight: 800 }}>
          Gestión <span className="gradient-text">Administrativa</span> <br />
          y Resultados <span className="gradient-text-st">en Vivo</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          En <strong>DgoTech</strong> potenciamos federaciones con una solución digital unificada: controlá el padrón institucional e inscripciones con <strong>SIGDEF</strong> y transmití tiempos de regatas en tiempo real con <strong>SportTrack</strong>.
        </p>
        <div className="hero-btn-group" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <a
            href="https://sigdef.pro/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
          >
            Ir a SIGDEF <ExternalLink size={15} />
          </a>
          <a
            href="https://sporttrack.pro/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              borderColor: 'rgba(0, 112, 243, 0.45)',
              color: '#7dd3fc',
            }}
          >
            Ir a SportTrack <ExternalLink size={15} />
          </a>
        </div>
        <div className="hero-btn-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#sistemas" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            Conocer sistemas <ArrowRight size={14} />
          </a>
          <a href="#servicios" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
            Ver planes
          </a>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1rem', overflow: 'hidden' }}>
        <img src={dashboardImg} alt="Dashboard SIGDEF y SportTrack - Panel del Ecosistema DgoTech" style={{ width: '100%', borderRadius: '1rem', display: 'block' }} />
      </div>
    </section>
  );
}
