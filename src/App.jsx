import dashboardImg from './assets/dashboard-preview.png'
import './App.css'

/* Logo inline SVG inspirado en el logo oficial SIGDEF */
function SigdefLogo({ size = 'md' }) {
  const h = size === 'sm' ? 36 : size === 'lg' ? 60 : 44;
  return (
    <svg height={h} viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SIGDEF Logo">
      {/* Figura atlética geométrica */}
      <g stroke="#2d8c50" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Cabeza */}
        <circle cx="17" cy="9" r="5" fill="none" stroke="#3daa64" />
        {/* Torso */}
        <line x1="17" y1="14" x2="14" y2="30" />
        {/* Brazo izquierdo */}
        <line x1="17" y1="19" x2="9" y2="25" />
        {/* Pierna delantera (sprint) */}
        <line x1="14" y1="30" x2="22" y2="44" />
        {/* Pierna trasera */}
        <line x1="14" y1="30" x2="8" y2="42" />
        {/* Nodos articulares */}
        <circle cx="9" cy="25" r="2.5" fill="#1a3055" stroke="#3daa64" />
        <circle cx="22" cy="44" r="2.5" fill="#1a3055" stroke="#2d8c50" />
        <circle cx="8" cy="42" r="2.5" fill="#1a3055" stroke="#2d8c50" />
        {/* Engranaje en el brazo */}
        <circle cx="9" cy="25" r="5.5" fill="none" stroke="#1a3055" strokeWidth="1.5" strokeDasharray="2.5 2" />
      </g>
      {/* Texto SIG */}
      <text x="32" y="38" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="30" fill="#2d8c50" letterSpacing="-0.5">SIG</text>
      {/* Texto DEF */}
      <text x="96" y="38" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="30" fill="#1a3055" letterSpacing="-0.5">DEF</text>
      {/* Subtítulo */}
      <text x="32" y="50" fontFamily="Inter, sans-serif" fontWeight="500" fontSize="7.5" fill="#8a9bb5" letterSpacing="1.2">SISTEMA DE GESTIÓN DE FEDERACIÓN</text>
    </svg>
  );
}

function App() {
  return (
    <div className="animate-fade-in">

      {/* ── NAVBAR ── */}
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
          <a href="#niveles" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'var(--transition)' }}
            onMouseEnter={e => e.target.style.color = 'var(--verde-sig)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Niveles</a>
          <a href="#arquitectura" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'var(--transition)' }}
            onMouseEnter={e => e.target.style.color = 'var(--verde-sig)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Arquitectura</a>
          <a href="#contacto" className="btn-primary" style={{ padding: '0.55rem 1.5rem', textDecoration: 'none', fontSize: '0.9rem' }}>Contacto</a>
        </div>
      </nav>

      {/* ── HERO ── */}
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
            Software integral diseñado específicamente para federaciones deportivas. Desde la gestión de atletas hasta torneos y finanzas, todo en un solo sistema.
          </p>
          <div className="hero-btn-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#niveles" className="btn-primary" style={{ textDecoration: 'none' }}>Ver Planes</a>
            <a href="#arquitectura" className="btn-secondary" style={{ textDecoration: 'none' }}>Cómo Funciona</a>
          </div>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
            {[['🏆', '+50', 'Federaciones'], ['👤', '+1.000', 'Atletas activos'], ['📊', '3', 'Planes de servicio']].map(([icon, val, label]) => (
              <div key={label}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{icon} {val}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1rem', overflow: 'hidden' }}>
          <img src={dashboardImg} alt="Dashboard SIGDEF - Panel de Control" style={{ width: '100%', borderRadius: '1rem', display: 'block' }} />
        </div>
      </section>

      {/* ── NIVELES DE SERVICIO ── */}
      <section id="niveles" style={{ background: 'rgba(26, 48, 85, 0.08)', borderTop: '1px solid rgba(45,140,80,0.1)', borderBottom: '1px solid rgba(45,140,80,0.1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>
              Niveles de Servicio <span className="gradient-text">SIGDEF</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Desde la digitalización básica hasta un ecosistema totalmente conectado. Tu federación elige el nivel y crece cuando lo decide.
            </p>
            <div className="section-divider" />
          </div>

          <div className="grid-3">

            {/* NIVEL 1: BASE */}
            <div className="tier-card">
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📦</div>
                <h3 style={{ fontSize: '1.6rem' }}>SIGDEF <span style={{ color: 'var(--verde-sig)' }}>Base</span></h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>El Padrón Digital</p>
              </div>
              <ul className="feature-list">
                <li>Panel de Control Único (Admin Federación)</li>
                <li>Gestión de Identidad Federativa (Atletas, Entrenadores, Delegados, Tutores)</li>
                <li>Categorización Automática por rango de edad</li>
                <li>Legajo de Datos Personales (DNI, Pasaporte, Contacto)</li>
                <li>Módulo de Tutoría Legal para menores</li>
                <li>Validación de Documentación Interna</li>
                <li>Reportes Excel en Tiempo Real</li>
              </ul>
              <a href="#contacto" className="btn-secondary" style={{ width: '100%', textAlign: 'center', padding: '0.75rem', textDecoration: 'none' }}>Consultar Base</a>
            </div>

            {/* NIVEL 2: STANDARD — DESTACADO */}
            <div className="tier-card featured">
              <div className="tier-badge">⭐ Más Popular</div>
              <div style={{ marginBottom: '1.5rem', marginTop: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📦📦</div>
                <h3 style={{ fontSize: '1.6rem' }}>SIGDEF <span className="gradient-text">Standard</span></h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Gestión Institucional</p>
              </div>
              <ul className="feature-list">
                <li><strong style={{ color: 'var(--verde-sig)' }}>Todo lo del Nivel Base +</strong></li>
                <li>Doble Dashboard (Federación + Club)</li>
                <li>Carga Descentralizada desde los Clubes</li>
                <li>Gestión de Fotos y Documentación (DNI/Pasaporte)</li>
                <li>Módulo de Matrícula y Afiliación</li>
                <li>Flujo de Aprobación Remota en Tiempo Real</li>
                <li>Filtros Avanzados por Club, Pago, Vigencia, Categoría</li>
              </ul>
              <a href="#contacto" className="btn-primary" style={{ width: '100%', textAlign: 'center', textDecoration: 'none' }}>Consultar Standard</a>
            </div>

            {/* NIVEL 3: PREMIUM */}
            <div className="tier-card">
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📦📦📦</div>
                <h3 style={{ fontSize: '1.6rem' }}>SIGDEF <span style={{ color: 'var(--azul-def-light)' }}>Premium</span></h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>El Ecosistema Conectado</p>
              </div>
              <ul className="feature-list">
                <li><strong style={{ color: 'var(--verde-sig)' }}>Todo lo del Nivel Standard +</strong></li>
                <li>Mensajería Interna — Chat oficial entre clubes y federación</li>
                <li>Centro de Notificaciones Masivas con acuse de recibo</li>
                <li>Auditoría de Actividad completa — Logs de seguridad</li>
                <li>Soporte de Archivos Multimedia de alta resolución</li>
                <li>Transparencia total ante cambios sensibles</li>
                <li>Resoluciones y circulares oficiales digitales</li>
              </ul>
              <a href="#contacto" className="btn-secondary" style={{ width: '100%', textAlign: 'center', padding: '0.75rem', textDecoration: 'none' }}>Consultar Premium</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARQUITECTURA ESCALABLE ── */}
      <section id="arquitectura" className="container">
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
                ['🏗️', 'Reutilización de Código', 'El Dashboard del Club es una versión optimizada del de la Federación. Un solo sistema, múltiples roles configurables.'],
                ['🚀', 'Escalabilidad Técnica', 'Los servicios de identidad base permanecen intactos. Agregamos capas de mensajería y auditoría al hacer upgrade, sin migrar datos.'],
                ['📈', 'Crecimiento Sin Fricción', 'Tu sistema siempre está listo para el siguiente nivel. El cliente ve lo que viene y decide cuándo crecer.'],
              ].map(([icon, title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '0.75rem', flexShrink: 0,
                    background: 'rgba(45, 140, 80, 0.1)', border: '1px solid rgba(45, 140, 80, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem'
                  }}>{icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>{title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            <div style={{ marginBottom: '2rem', fontSize: '4rem' }}>⚡</div>
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
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" style={{ background: 'rgba(26, 48, 85, 0.06)', borderTop: '1px solid rgba(45,140,80,0.1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '0.75rem' }}>
              Ponete en <span className="gradient-text">Contacto</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '550px', margin: '0 auto' }}>
              ¿Listo para digitalizar tu federación? Nuestro equipo te asesora personalmente.
            </p>
            <div className="section-divider" />
          </div>

          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '3rem' }}>

            {/* Panel izquierdo */}
            <div>
              <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '1.5rem', fontSize: '1.15rem' }}>📬 Contacto Directo</h4>
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Email</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600 }}>info@sigdef.com.ar</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>WhatsApp</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600 }}>+54 9 341 228 0901</div>
                </div>
                <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Sitio Web</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600 }}>www.sigdef.com.ar</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="https://wa.me/5491112345678?text=Hola%20SIGDEF%2C%20quiero%20conocer%20más%20sobre%20sus%20servicios"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary" style={{ flex: 1, textAlign: 'center', textDecoration: 'none', fontSize: '0.9rem' }}>
                  💬 WhatsApp
                </a>
                <a href="mailto:info@sigdef.com.ar"
                  className="btn-secondary" style={{ flex: 1, textAlign: 'center', padding: '0.75rem', textDecoration: 'none', fontSize: '0.9rem' }}>
                  ✉️ Email
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div className="glass-card">
              <h4 style={{ marginBottom: '1.5rem', fontSize: '1.15rem' }}>✍️ Envianos un Mensaje</h4>
              <form onSubmit={(e) => { e.preventDefault(); alert('¡Mensaje enviado! Nos contactaremos pronto.'); }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="contact-nombre">Nombre</label>
                    <input id="contact-nombre" type="text" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label htmlFor="contact-org">Institución</label>
                    <input id="contact-org" type="text" placeholder="Federación / Club" />
                  </div>
                </div>
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" type="email" placeholder="email@institución.com" required />
                <label htmlFor="contact-nivel">Nivel de Interés</label>
                <input id="contact-nivel" type="text" placeholder="Base / Standard / Premium" />
                <label htmlFor="contact-mensaje">Mensaje</label>
                <textarea id="contact-mensaje" rows={3} placeholder="Contanos sobre tu federación y cómo podemos ayudarte..."></textarea>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}>
                  Enviar Mensaje →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid rgba(45, 140, 80, 0.15)', background: 'rgba(13, 22, 36, 0.8)', paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '3rem', marginBottom: '3rem', textAlign: 'left' }}>

          <div>
            <SigdefLogo size="sm" />
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '1.25rem', lineHeight: 1.7, maxWidth: '280px' }}>
              Líderes en transformación digital para entidades deportivas en Argentina y Latinoamérica.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>Navegación</h4>
            <div style={{ display: 'grid', gap: '0.65rem', fontSize: '0.875rem' }}>
              {[['Inicio', '#'], ['Niveles', '#niveles'], ['Arquitectura', '#arquitectura'], ['Contacto', '#contacto']].map(([label, href]) => (
                <a key={label} href={href} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>Legal</h4>
            <div style={{ display: 'grid', gap: '0.65rem', fontSize: '0.875rem' }}>
              {['Términos de Uso', 'Política de Privacidad', 'Protección de Datos'].map(label => (
                <a key={label} href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '0.95rem', color: 'var(--text-main)' }}>Newsletter</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>Novedades oficiales y actualizaciones del sistema.</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="email" placeholder="tu@email.com" style={{ marginBottom: 0, padding: '0.6rem 0.85rem', fontSize: '0.875rem' }} />
              <button className="btn-primary" style={{ padding: '0.6rem 1rem', fontSize: '0.9rem', flexShrink: 0 }}>→</button>
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

    </div>
  )
}

export default App
