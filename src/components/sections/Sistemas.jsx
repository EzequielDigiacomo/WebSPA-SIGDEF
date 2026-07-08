import React from 'react';
import { Shield, Users, CreditCard, Award, Timer, Tv, ChevronRight } from 'lucide-react';

export function Sistemas() {
  return (
    <section id="sistemas" style={{ padding: '5rem 0 2rem 0' }}>
      <div className="container">
        
        {/* Encabezado Principal */}
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
          
          {/* TARJETA SIGDEF (Imagen 1 - SIGDEF) */}
          <div className="glass-card" style={{ 
            backgroundColor: 'rgba(17, 24, 39, 0.8)', 
            border: '1px solid rgba(16, 185, 129, 0.25)', 
            borderLeft: '5px solid #10b981', 
            borderRadius: '24px', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%', 
            padding: '2.5rem' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ 
                width: 48, 
                height: 48, 
                borderRadius: '12px', 
                background: 'rgba(16, 185, 129, 0.1)', 
                border: '1px solid rgba(16, 185, 129, 0.2)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#10b981'
              }}>
                <Shield size={24} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, color: '#ffffff', lineHeight: 1.1 }}>
                  SIGDEF
                </h3>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#94a3b8', fontWeight: 700, marginTop: '2px' }}>
                  Administración y Padrón Digital
                </span>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              La columna vertebral de tu federación. Controla la identidad institucional de atletas, entrenadores, tutores y clubes en un panel único y centralizado. Automatiza las acreditaciones y los cobros de matrículas de manera transparente.
            </p>

            <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '2.5rem', flexGrow: 1 }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Users size={20} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>Padrón Único y Descentralizado</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.4 }}>Los clubes cargan directamente a sus atletas, reduciendo la carga administrativa de la federación.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CreditCard size={20} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>Gestión de Afiliaciones</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.4 }}>Módulo de cobros integrado para el pago seguro de matrículas, habilitaciones y anualidades.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Shield size={20} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>Legajo y Documentación</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.4 }}>Almacenamiento de documentación médica, pasaportes y DNI, con flujos de aprobación y validación en tiempo real.</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#servicios" className="btn-acc-outline" style={{ padding: '0.65rem 1.75rem !important', fontSize: '0.85rem' }}>
                Ver Planes &nbsp; &rsaquo;
              </a>
              <a href="https://sigdef.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-acc-green" style={{ padding: '0.65rem 1.75rem !important', fontSize: '0.85rem' }}>
                Acceder a SIGDEF
              </a>
            </div>
          </div>

          {/* TARJETA SPORTTRACK (Imagen 1 - SportTrack) */}
          <div className="glass-card" style={{ 
            backgroundColor: 'rgba(17, 24, 39, 0.8)', 
            border: '1px solid rgba(0, 112, 243, 0.25)', 
            borderLeft: '5px solid #0070f3', 
            borderRadius: '24px', 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%', 
            padding: '2.5rem' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ 
                width: 48, 
                height: 48, 
                borderRadius: '12px', 
                background: 'rgba(0, 112, 243, 0.1)', 
                border: '1px solid rgba(0, 112, 243, 0.2)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#0070f3'
              }}>
                <Award size={24} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, color: '#ffffff', lineHeight: 1.1 }}>
                  SportTrack
                </h3>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: '#94a3b8', fontWeight: 700, marginTop: '2px' }}>
                  Competencias y Tiempos en Vivo
                </span>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              El centro de atención del público y los atletas. Gestiona regatas y torneos de remo o canotaje en tiempo real. Proporciona a jueces consolas especializadas de largada y llegada, y al público una pizarra interactiva en vivo mediante SignalR.
            </p>

            <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '2.5rem', flexGrow: 1 }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Timer size={20} style={{ color: '#0070f3', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>Cronometraje en Tiempo Real</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.4 }}>Consolas avanzadas para jueces que permiten marcar largadas y llegadas con extrema precisión.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Tv size={20} style={{ color: '#0070f3', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>Pizarra de Resultados en Vivo</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.4 }}>Transmisión instantánea de tiempos y posiciones de regatas mediante sockets, sin recargar el navegador.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Award size={20} style={{ color: '#0070f3', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>Globo 3D y Mapas de Eventos</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.4 }}>Visualizaciones de competencias y ubicaciones geográficas de clubes a través de un globo interactivo.</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#servicios" className="btn-acc-outline btn-acc-outline-blue" style={{ padding: '0.65rem 1.75rem !important', fontSize: '0.85rem' }}>
                Ver Planes &nbsp; &rsaquo;
              </a>
              <a href="https://oficialsporttrack.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-acc-blue" style={{ padding: '0.65rem 1.75rem !important', fontSize: '0.85rem' }}>
                Acceder a SportTrack
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
