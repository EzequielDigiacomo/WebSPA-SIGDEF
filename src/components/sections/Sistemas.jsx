import React from 'react';
import { Shield, Users, CreditCard, Award, Timer, Tv } from 'lucide-react';

export function Sistemas() {
  return (
    <section id="sistemas" className="sistemas-section">
      <div className="container">
        <div className="sistemas-head">
          <h2>
            Un Ecosistema Deportivo <span className="gradient-text-joint">De Extremo a Extremo</span>
          </h2>
          <p>
            Dos plataformas independientes y complementarias que se integran para resolver la gestión administrativa y potenciar la experiencia deportiva en vivo.
          </p>
          <div className="section-divider" />
        </div>

        <div className="sistemas-grid">
          <div className="glass-card sistemas-card sistemas-card-sig">
            <div className="sistemas-card-top">
              <div className="sistemas-icon sistemas-icon-sig">
                <Shield size={24} />
              </div>
              <div>
                <h3>SIGDEF</h3>
                <span className="sistemas-eyebrow">Administración y Padrón Digital</span>
              </div>
            </div>

            <p className="sistemas-lead">
              La columna vertebral de tu federación. Controla la identidad institucional de atletas, entrenadores, tutores y clubes en un panel único y centralizado. Automatiza las acreditaciones y los cobros de matrículas de manera transparente.
            </p>

            <div className="sistemas-features">
              <div className="sistemas-feature">
                <Users size={20} className="sistemas-feature-icon-sig" />
                <div>
                  <h4>Padrón Único y Descentralizado</h4>
                  <p>Los clubes cargan directamente a sus atletas, reduciendo la carga administrativa de la federación.</p>
                </div>
              </div>
              <div className="sistemas-feature">
                <CreditCard size={20} className="sistemas-feature-icon-sig" />
                <div>
                  <h4>Gestión de Afiliaciones</h4>
                  <p>Módulo de cobros integrado para el pago seguro de matrículas, habilitaciones y anualidades.</p>
                </div>
              </div>
              <div className="sistemas-feature">
                <Shield size={20} className="sistemas-feature-icon-sig" />
                <div>
                  <h4>Legajo y Documentación</h4>
                  <p>Almacenamiento de documentación médica, pasaportes y DNI, con flujos de aprobación y validación en tiempo real.</p>
                </div>
              </div>
            </div>

            <div className="sistemas-actions">
              <a href="#servicios" className="btn-acc-outline">Ver Planes &nbsp; &rsaquo;</a>
              <a href="https://sigdef.pro/" target="_blank" rel="noopener noreferrer" className="btn-acc-green">
                Acceder a SIGDEF
              </a>
            </div>
          </div>

          <div className="glass-card sistemas-card sistemas-card-st">
            <div className="sistemas-card-top">
              <div className="sistemas-icon sistemas-icon-st">
                <Award size={24} />
              </div>
              <div>
                <h3>SportTrack</h3>
                <span className="sistemas-eyebrow">Competencias y Tiempos en Vivo</span>
              </div>
            </div>

            <p className="sistemas-lead">
              El centro de atención del público y los atletas. Gestiona regatas y torneos de remo o canotaje en tiempo real. Proporciona a jueces consolas especializadas de largada y llegada, y al público una pizarra interactiva en vivo mediante SignalR.
            </p>

            <div className="sistemas-features">
              <div className="sistemas-feature">
                <Timer size={20} className="sistemas-feature-icon-st" />
                <div>
                  <h4>Cronometraje en Tiempo Real</h4>
                  <p>Consolas avanzadas para jueces que permiten marcar largadas y llegadas con extrema precisión.</p>
                </div>
              </div>
              <div className="sistemas-feature">
                <Tv size={20} className="sistemas-feature-icon-st" />
                <div>
                  <h4>Pizarra de Resultados en Vivo</h4>
                  <p>Transmisión instantánea de tiempos y posiciones de regatas mediante sockets, sin recargar el navegador.</p>
                </div>
              </div>
              <div className="sistemas-feature">
                <Award size={20} className="sistemas-feature-icon-st" />
                <div>
                  <h4>Globo 3D y Mapas de Eventos</h4>
                  <p>Visualizaciones de competencias y ubicaciones geográficas de clubes a través de un globo interactivo.</p>
                </div>
              </div>
            </div>

            <div className="sistemas-actions">
              <a href="#servicios" className="btn-acc-outline btn-acc-outline-blue">Ver Planes &nbsp; &rsaquo;</a>
              <a href="https://sporttrack.pro/" target="_blank" rel="noopener noreferrer" className="btn-acc-blue">
                Acceder a SportTrack
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
