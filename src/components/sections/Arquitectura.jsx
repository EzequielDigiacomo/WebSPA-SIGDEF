import { Code2, TrendingUp, Layers, Zap } from 'lucide-react';
import { IconBox } from '../ui/IconBox';

export function Arquitectura() {
  return (
    <section id="arquitectura" style={{ background: 'rgba(26, 48, 85, 0.08)', borderTop: '1px solid rgba(45,140,80,0.1)', borderBottom: '1px solid rgba(45,140,80,0.1)' }}>
      <div className="container">
        <div className="arch-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>
              Arquitectura <span className="gradient-text">Escalable</span>
            </h2>
            <div className="section-divider" style={{ margin: '1rem 0 2rem', width: 50 }} />
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.75 }}>
              Nuestro sistema está diseñado para crecer junto a tu institución. Construido con <strong style={{ color: 'var(--text-main)' }}>React + .NET</strong>, garantizamos robustez, seguridad y máxima flexibilidad sin interrupciones.
            </p>
            <div style={{ display: 'grid', gap: '2rem' }}>
              {[
                [Code2, 'Reutilización de Código', 'El Dashboard del Club es una versión optimizada del de la Federación. Un solo sistema, múltiples roles configurables.'],
                [TrendingUp, 'Escalabilidad Técnica', 'Los servicios de identidad base permanecen intactos. Agregamos capas de mensajería y auditoría al hacer upgrade, sin migrar datos.'],
                [Layers, 'Crecimiento Sin Fricción', 'Tu sistema siempre está listo para el siguiente nivel. El cliente ve lo que viene y decide cuándo crecer.'],
              ].map(([Icon, title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <IconBox icon={Icon} />
                  <div>
                    <h4 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '1.25rem',
                background: 'rgba(45, 140, 80, 0.1)', border: '1px solid rgba(45, 140, 80, 0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Zap size={36} color="var(--verde-sig)" strokeWidth={1.5} />
              </div>
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.25rem' }}>Tecnología de <span className="gradient-text">Vanguardia</span></h3>
            <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
              {[
                ['Frontend', 'React + Vite', 'var(--verde-sig)'],
                ['Backend', '.NET Core API', 'var(--azul-def-light)'],
                ['Base de Datos', 'PostgreSQL', 'var(--verde-sig)'],
                ['Seguridad', 'JWT + Roles', 'var(--azul-def-light)'],
              ].map(([cat, tech, color]) => (
                <div key={cat} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.75rem 1rem',
                  background: 'rgba(26, 48, 85, 0.25)',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(45, 140, 80, 0.1)'
                }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{cat}</span>
                  <span style={{ color, fontWeight: 700, fontSize: '0.9rem' }}>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
