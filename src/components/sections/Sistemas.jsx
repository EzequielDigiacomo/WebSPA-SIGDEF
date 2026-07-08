import { Shield, Users, CreditCard, Award, Timer, Tv, ChevronRight } from 'lucide-react';

export function Sistemas() {
  return (
    <section id="sistemas" style={{ padding: '5rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>
            Un Ecosistema Deportivo <span className="gradient-text-joint">De Extremo a Extremo</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Dos plataformas independientes y complementarias que se integran para resolver la gestión administrativa y potenciar la experiencia deportiva en vivo.
          </p>
          <div className="section-divider" />
        </div>

        <div className="grid-3" style={{ gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
          {/* TARJETA SIGDEF */}
          <div className="glass-card" style={{ borderLeft: '4px solid var(--verde-sig)', display: 'flex', flexDirection: 'column', height: '100%', padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '0.75rem', background: 'rgba(45, 140, 80, 0.1)', border: '1px solid rgba(45, 140, 80, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={24} color="var(--verde-sig-light)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
                  <span style={{ color: 'var(--verde-sig-light)' }}>SIG</span>DEF
                </h3>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Administración y Padrón Digital
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              La columna vertebral de tu federación. Controla la identidad institucional de atletas, entrenadores, tutores y clubes en un panel único y centralizado. Automatiza las acreditaciones y los cobros de matrículas de manera transparente.
            </p>

            <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '2.5rem', flexGrow: 1 }}>
              {[
                [Users, 'Padrón Único y Descentralizado', 'Los clubes cargan directamente a sus atletas, reduciendo la carga administrativa de la federación.'],
                [CreditCard, 'Gestión de Afiliaciones', 'Módulo de cobros integrado para el pago seguro de matrículas, habilitaciones y anualidades.'],
                [Shield, 'Legajo y Documentación', 'Almacenamiento de documentación médica, pasaportes y DNI, con flujos de aprobación y validación en tiempo real.'],
              ].map(([Icon, title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Icon size={18} color="var(--verde-sig-light)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.2rem' }}>{title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#servicios" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', border: '1px solid rgba(45, 140, 80, 0.3)', color: 'var(--text-main)', textDecoration: 'none', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                Ver Planes <ChevronRight size={14} />
              </a>
              <a href="https://sigdef.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                Acceder a SIGDEF
              </a>
            </div>
          </div>

          {/* TARJETA SPORTTRACK */}
          <div className="glass-card" style={{ borderLeft: '4px solid var(--azul-st)', display: 'flex', flexDirection: 'column', height: '100%', padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: '0.75rem', background: 'rgba(0, 112, 243, 0.1)', border: '1px solid rgba(0, 112, 243, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Award size={24} color="var(--azul-st-light)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
                  <span style={{ color: 'var(--azul-st-light)' }}>Sport</span>Track
                </h3>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Competencias y Tiempos en Vivo
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              El centro de atención del público y los atletas. Gestiona regatas y torneos de remo o canotaje en tiempo real. Proporciona a jueces consolas especializadas de largada y llegada, y al público una pizarra interactiva en vivo mediante SignalR.
            </p>

            <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '2.5rem', flexGrow: 1 }}>
              {[
                [Timer, 'Cronometraje en Tiempo Real', 'Consolas avanzadas para jueces que permiten marcar largadas y llegadas con extrema precisión.'],
                [Tv, 'Pizarra de Resultados en Vivo', 'Transmisión instantánea de tiempos y posiciones de regatas mediante sockets, sin recargar el navegador.'],
                [Award, 'Globo 3D y Mapas de Eventos', 'Visualizaciones de competencias y ubicaciones geográficas de clubes a través de un globo interactivo.'],
              ].map(([Icon, title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Icon size={18} color="var(--azul-st-light)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.2rem' }}>{title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#servicios" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', border: '1px solid rgba(0, 112, 243, 0.3)', color: 'var(--text-main)', textDecoration: 'none', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                Ver Planes <ChevronRight size={14} />
              </a>
              <a href="https://oficialsporttrack.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', padding: '0.6rem 1.2rem', fontSize: '0.85rem', background: 'var(--gradient-st)', boxShadow: '0 4px 15px rgba(0, 112, 243, 0.35)' }}>
                Acceder a SportTrack
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
