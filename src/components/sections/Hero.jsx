import { ArrowRight } from 'lucide-react';
import dashboardImg from '../../assets/dashboard-preview.png';

export function Hero() {
  return (
    <section className="container hero-grid" style={{
      paddingTop: '9rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'
    }}>
      <div style={{ textAlign: 'left' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(45, 140, 80, 0.1)', border: '1px solid rgba(45, 140, 80, 0.25)',
          borderRadius: '9999px', padding: '0.35rem 1rem', marginBottom: '1.5rem',
          fontSize: '0.8rem', fontWeight: 600, color: 'var(--verde-sig)', letterSpacing: '0.05em'
        }}>
          <span style={{ width: 8, height: 8, background: 'var(--verde-sig)', borderRadius: '50%', display: 'inline-block', animation: 'pulseDot 2s ease infinite' }} />
          PLATAFORMA DE GESTIÓN DEPORTIVA
        </div>

        <h1 style={{ fontSize: '4.2rem', marginBottom: '1.5rem', lineHeight: 1.05 }}>
          Potenciando <br />
          <span className="gradient-text">Federaciones</span><br />
          con Tecnología
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Software que optimiza la administración central de su federación con una plataforma integral diseñada para el control institucional.
        </p>
        <div className="hero-btn-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#niveles" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Ver Planes <ArrowRight size={16} />
          </a>
          <a href="#arquitectura" className="btn-secondary" style={{ textDecoration: 'none' }}>Nuestra Tecnología</a>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '1rem', overflow: 'hidden' }}>
        <img src={dashboardImg} alt="Dashboard SIGDEF - Panel de Control" style={{ width: '100%', borderRadius: '1rem', display: 'block' }} />
      </div>
    </section>
  );
}
