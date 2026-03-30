import { useState } from 'react'
import {
  LayoutDashboard,
  Users,
  Tags,
  FileText,
  ShieldCheck,
  FileCheck2,
  BarChart3,
  Building2,
  Image,
  CreditCard,
  CheckCircle2,
  SlidersHorizontal,
  MessageSquare,
  Bell,
  ClipboardList,
  HardDrive,
  Code2,
  TrendingUp,
  Layers,
  Zap,
  Mail,
  MessageCircle,
  Send,
  ArrowRight,
  Smartphone,
  Wifi,
  Search,
} from 'lucide-react'
import dashboardImg from './assets/dashboard-preview.png'
import logoDark from './assets/logo oscuro.png'
import './App.css'

/* ─── Logo con PNG (navbar / footer sobre fondos oscuros) ── */
function SigdefLogo({ size = 'md' }) {
  const h = size === 'sm' ? 60 : size === 'lg' ? 96 : 76;
  const iconH = size === 'sm' ? 36 : size === 'lg' ? 56 : 44;
  const subFontSize = size === 'sm' ? '0.45rem' : size === 'lg' ? '0.7rem' : '0.55rem';
  return (
    <>
      {/* Full logo — hidden on mobile */}
      <div className="logo-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none' }}>
        <img
          src={logoDark}
          alt="SIGDEF — Sistema de Gestión de Federación"
          style={{ height: h, width: 'auto', objectFit: 'contain' }}
          aria-label="SIGDEF — Sistema Integral de Gestión de Federaciones"
        />
        <span style={{
          fontFamily: "'Montserrat', 'Arial', sans-serif",
          fontWeight: 600,
          fontSize: subFontSize,
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '1.8px',
          marginTop: '4px',
        }}>SISTEMA INTEGRAL DE GESTIÓN DE FEDERACIONES</span>
      </div>
      {/* Icon only — shown on mobile */}
      <img
        className="logo-icon"
        src="/faviconOscuro.png"
        alt="SIGDEF"
        style={{ height: iconH, width: 'auto', objectFit: 'contain', display: 'none' }}
      />
    </>
  );
}

/* ─── Icon Box helper ──────────────────────────────────── */
function IconBox({ icon: Icon, color = 'var(--verde-sig)' }) {
  return (
    <div style={{
      width: 48, height: 48, borderRadius: '0.75rem', flexShrink: 0,
      background: 'rgba(45, 140, 80, 0.1)', border: '1px solid rgba(45, 140, 80, 0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon size={22} color={color} strokeWidth={1.75} />
    </div>
  );
}

/* ─── Tier Icon helper ─────────────────────────────────── */
function TierIcon({ icon: Icon, color }) {
  return (
    <div style={{
      width: 56, height: 56, borderRadius: '1rem', marginBottom: '1rem',
      background: 'rgba(45, 140, 80, 0.08)', border: '1px solid rgba(45, 140, 80, 0.2)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon size={26} color={color} strokeWidth={1.5} />
    </div>
  );
}

/* ─── App ──────────────────────────────────────────────── */
function App() {
  const [nivelInteres, setNivelInteres] = useState('');

  const selectNivel = (nivel) => {
    setNivelInteres(nivel);
    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
          <a href="#servicios" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'var(--transition)' }}
            onMouseEnter={e => e.target.style.color = 'var(--verde-sig)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Servicios</a>
          <a href="#mobile" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'var(--transition)' }}
            onMouseEnter={e => e.target.style.color = 'var(--verde-sig)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>App Móvil</a>
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
            <a href="#niveles" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Ver Planes <ArrowRight size={16} />
            </a>
            <a href="#arquitectura" className="btn-secondary" style={{ textDecoration: 'none' }}>Cómo Funciona</a>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1rem', overflow: 'hidden' }}>
          <img src={dashboardImg} alt="Dashboard SIGDEF - Panel de Control" style={{ width: '100%', borderRadius: '1rem', display: 'block' }} />
        </div>
      </section>

      {/* ── NIVELES DE SERVICIO ── */}
      <section id="servicios" style={{ background: 'rgba(26, 48, 85, 0.08)', borderTop: '1px solid rgba(45,140,80,0.1)', borderBottom: '1px solid rgba(45,140,80,0.1)', padding: '3.5rem 0' }}>
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
              <TierIcon icon={LayoutDashboard} color="var(--verde-sig)" />
              <h3 style={{ fontSize: '1.6rem' }}>SIGDEF <span style={{ color: 'var(--verde-sig)' }}>Base</span></h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>El Padrón Digital</p>
              <ul className="feature-list">
                <li><LayoutDashboard size={14} style={{ flexShrink: 0 }} /> Panel de Control Único (Admin Federación)</li>
                <li><Users size={14} style={{ flexShrink: 0 }} /> Gestión de Identidad Federativa (Atletas, Entrenadores, Delegados, Tutores)</li>
                <li><Tags size={14} style={{ flexShrink: 0 }} /> Categorización Automática por rango de edad</li>
                <li><FileText size={14} style={{ flexShrink: 0 }} /> Legajo de Datos Personales (DNI, Pasaporte, Contacto)</li>
                <li><ShieldCheck size={14} style={{ flexShrink: 0 }} /> Módulo de Tutoría Legal para menores</li>
                <li><FileCheck2 size={14} style={{ flexShrink: 0 }} /> Validación de Documentación Interna</li>
                <li><BarChart3 size={14} style={{ flexShrink: 0 }} /> Reportes Excel en Tiempo Real</li>
              </ul>
              <button onClick={() => selectNivel('Base')} className="btn-secondary" style={{ width: '100%', textAlign: 'center', padding: '0.75rem', cursor: 'pointer' }}>Consultar Base</button>
            </div>

            {/* NIVEL 2: STANDARD */}
            <div className="tier-card featured">
              <div className="tier-badge">Más Popular</div>
              <div style={{ marginTop: '1rem' }}>
                <TierIcon icon={Building2} color="var(--verde-sig)" />
              </div>
              <h3 style={{ fontSize: '1.6rem' }}>SIGDEF <span className="gradient-text">Standard</span></h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>Gestión Institucional</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={14} style={{ flexShrink: 0, color: 'var(--verde-sig)' }} /><strong style={{ color: 'var(--verde-sig)' }}>Todo lo del Nivel Base +</strong></li>
                <li><Layers size={14} style={{ flexShrink: 0 }} /> Doble Dashboard (Federación + Club)</li>
                <li><Users size={14} style={{ flexShrink: 0 }} /> Carga Descentralizada desde los Clubes</li>
                <li><Image size={14} style={{ flexShrink: 0 }} /> Gestión de Fotos y Documentación (DNI/Pasaporte)</li>
                <li><CreditCard size={14} style={{ flexShrink: 0 }} /> Módulo de Matrícula y Afiliación</li>
                <li><FileCheck2 size={14} style={{ flexShrink: 0 }} /> Flujo de Aprobación Remota en Tiempo Real</li>
                <li><SlidersHorizontal size={14} style={{ flexShrink: 0 }} /> Filtros Avanzados por Club, Pago, Vigencia, Categoría</li>
              </ul>
              <button onClick={() => selectNivel('Standard')} className="btn-primary" style={{ width: '100%', textAlign: 'center', cursor: 'pointer' }}>Consultar Standard</button>
            </div>

            {/* NIVEL 3: PREMIUM */}
            <div className="tier-card">
              <TierIcon icon={Zap} color="var(--azul-def-light)" />
              <h3 style={{ fontSize: '1.6rem' }}>SIGDEF <span style={{ color: 'var(--azul-def-light)' }}>Premium</span></h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>El Ecosistema Conectado</p>
              <ul className="feature-list">
                <li><CheckCircle2 size={14} style={{ flexShrink: 0, color: 'var(--verde-sig)' }} /><strong style={{ color: 'var(--verde-sig)' }}>Todo lo del Nivel Standard +</strong></li>
                <li><MessageSquare size={14} style={{ flexShrink: 0 }} /> Mensajería Interna — Chat oficial entre clubes y federación</li>
                <li><Bell size={14} style={{ flexShrink: 0 }} /> Centro de Notificaciones Masivas con acuse de recibo</li>
                <li><ClipboardList size={14} style={{ flexShrink: 0 }} /> Auditoría de Actividad completa — Logs de seguridad</li>
                <li><HardDrive size={14} style={{ flexShrink: 0 }} /> Soporte de Archivos Multimedia de alta resolución</li>
                <li><ShieldCheck size={14} style={{ flexShrink: 0 }} /> Transparencia total ante cambios sensibles</li>
                <li><FileText size={14} style={{ flexShrink: 0 }} /> Resoluciones y circulares oficiales digitales</li>
                <li><Smartphone size={14} style={{ flexShrink: 0, color: 'var(--azul-def-light)' }} /><strong style={{ color: 'var(--azul-def-light)' }}> App Móvil Dedicada</strong> — Gestión completa desde Android e iOS</li>
              </ul>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <button onClick={() => selectNivel('Premium')} className="btn-secondary" style={{ width: '100%', textAlign: 'center', padding: '0.75rem', cursor: 'pointer' }}>Consultar Premium</button>
                <a href="#mobile" style={{ width: '100%', textAlign: 'center', padding: '0.5rem', textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.8rem', display: 'block', transition: 'var(--transition)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--azul-def-light)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                >Ver App Móvil ↓</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APP MÓVIL / MULTIPLATAFORMA ── */}
      <section id="mobile" className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

          {/* Texto izquierdo */}
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>
              También en tu <span className="gradient-text">Celular</span>
            </h2>
            <div className="section-divider" style={{ margin: '1rem 0 2rem', width: 50 }} />
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.75 }}>
              SIGDEF no se queda en el escritorio. Diseñamos una <strong style={{ color: 'var(--text-main)' }}>aplicación móvil nativa</strong> para que los delegados, entrenadores y administradores puedan gestionar su federación desde cualquier lugar.
            </p>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {[
                [Smartphone, 'Android e iOS', 'App nativa en React Native. Misma experiencia, mismo diseño, en cada dispositivo.'],
                [LayoutDashboard, 'Panel completo en el bolsillo', 'Acceso a todos los módulos: Atletas, Clubes, Pagos, Entrenadores y más.'],
                [Wifi, 'Sincronización en tiempo real', 'Los cambios se reflejan instantáneamente entre la app móvil y el panel web.'],
              ].map(([Icon, title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '0.75rem', flexShrink: 0,
                    background: 'rgba(45, 140, 80, 0.1)', border: '1px solid rgba(45, 140, 80, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Icon size={22} color="var(--verde-sig)" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.35rem' }}>{title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: 260,
              background: '#0a0f1e',
              borderRadius: '2.5rem',
              border: '3px solid rgba(45, 140, 80, 0.4)',
              boxShadow: '0 0 60px rgba(45, 140, 80, 0.15), 0 30px 60px rgba(0,0,0,0.5), inset 0 1px rgba(255,255,255,0.05)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Notch */}
              <div style={{
                height: 28, background: '#0a0f1e',
                display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 4,
                borderBottom: '1px solid rgba(255,255,255,0.04)'
              }}>
                <div style={{ width: 60, height: 6, background: '#1a2540', borderRadius: 9999 }} />
              </div>

              {/* Screen content */}
              <div style={{ padding: '1rem', background: '#0d1624', minHeight: 500 }}>
                {/* Header */}
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--verde-sig)', marginBottom: '0.2rem' }}>Bienvenido,</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2 }}>Ezequiel Di Giacomo</div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Panel de control de Federacion Argentina de Canoas</div>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem' }}>
                  {[['51', 'Total Atletas', '#3b82f6'], ['20', 'Clubes Registrados', 'var(--verde-sig)'], ['3', 'Atletas con Deuda', '#ef4444']].map(([n, l, c]) => (
                    <div key={l} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '0.6rem', padding: '0.5rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: 800, color: c }}>{n}</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{l}</span>
                    </div>
                  ))}
                </div>

                {/* Módulos */}
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Módulos de Gestión</div>
                <div style={{ display: 'grid', gap: '0.4rem' }}>
                  {[['Clubes', '#3b82f6'], ['Atletas', 'var(--verde-sig)'], ['Entrenadores', '#f59e0b'], ['Selecciones', '#a855f7'], ['Delegados', '#ef4444'], ['Tutores', '#ec4899']].map(([m, c]) => (
                    <div key={m} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '0.5rem', padding: '0.4rem 0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '0.2rem', background: c, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.6rem', color: 'var(--text-main)', fontWeight: 500 }}>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom nav */}
              <div style={{
                background: '#0a0f1e', borderTop: '1px solid rgba(255,255,255,0.06)',
                padding: '0.6rem 0', display: 'flex', justifyContent: 'space-around', alignItems: 'center'
              }}>
                {['Inicio', 'Atletas', '+', 'Clubes', 'Perfil'].map((t, i) => (
                  <div key={t} style={{ textAlign: 'center' }}>
                    {i === 2
                      ? <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--verde-sig)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Search size={16} color="white" strokeWidth={2.5} /></div>
                      : <div style={{ fontSize: '0.5rem', color: i === 0 ? 'var(--verde-sig)' : 'var(--text-muted)', fontWeight: i === 0 ? 700 : 400 }}>{t}</div>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── ARQUITECTURA ESCALABLE ── */}
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

      {/* ── CONTACTO ── */}
      <section id="contacto">
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
                <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={18} color="var(--verde-sig)" /> Contacto Directo
                </h4>
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Email</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600 }}>info@sigdef.com.ar</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>WhatsApp</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600 }}>+54 9 341 228 0901</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="https://wa.me/5493412280901?text=Hola%20SIGDEF%2C%20quiero%20conocer%20más%20sobre%20sus%20servicios"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary" style={{ flex: 1, textAlign: 'center', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a href="mailto:info@sigdef.com.ar"
                  className="btn-secondary" style={{ flex: 1, textAlign: 'center', padding: '0.75rem', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div className="glass-card">
              <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Send size={18} color="var(--verde-sig)" /> Envianos un Mensaje
              </h4>
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
                <input id="contact-email" type="email" placeholder="tuemail@institución.com" required />
                <label htmlFor="contact-nivel">Nivel de Interés</label>
                <select
                  id="contact-nivel"
                  value={nivelInteres}
                  onChange={(e) => setNivelInteres(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: nivelInteres ? 'rgba(45, 140, 80, 0.12)' : 'rgba(26, 48, 85, 0.2)',
                    border: nivelInteres ? '1px solid var(--verde-sig)' : '1px solid var(--border-navy)',
                    borderRadius: '0.75rem',
                    color: nivelInteres ? 'var(--text-main)' : 'var(--text-muted)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    transition: 'var(--transition)',
                    marginBottom: '1.25rem',
                    cursor: 'pointer',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238a9bb5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                  }}
                >
                  <option value="" style={{ background: 'var(--bg-primary)', color: 'var(--text-muted)' }}>Seleccioná un nivel...</option>
                  <option value="Base" style={{ background: 'var(--bg-primary)', color: 'var(--text-main)' }}>🟢 SIGDEF Base — El Padrón Digital</option>
                  <option value="Standard" style={{ background: 'var(--bg-primary)', color: 'var(--text-main)' }}>⭐ SIGDEF Standard — Gestión Institucional</option>
                  <option value="Premium" style={{ background: 'var(--bg-primary)', color: 'var(--text-main)' }}>⚡ SIGDEF Premium — El Ecosistema Conectado</option>
                </select>
                <label htmlFor="contact-mensaje">Mensaje</label>
                <textarea id="contact-mensaje" rows={3} placeholder="Contanos cómo podemos ayudarte a crear tu software acorde a tus necesidades"></textarea>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  Enviar Mensaje <Send size={16} />
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

    </div>
  )
}

export default App
