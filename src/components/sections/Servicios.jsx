import { LayoutDashboard, Users, Tags, FileText, ShieldCheck, FileCheck2, BarChart3, Building2, Image, CreditCard, SlidersHorizontal, MessageSquare, Bell, ClipboardList, HardDrive, Smartphone, CheckCircle2, Zap, Layers } from 'lucide-react';
import { TierIcon } from '../ui/TierIcon';

export function Servicios({ selectNivel }) {
  return (
    <section id="servicios" style={{ background: 'rgba(26, 48, 85, 0.08)', borderTop: '1px solid rgba(45,140,80,0.1)', borderBottom: '1px solid rgba(45,140,80,0.1)', padding: '3.5rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>
            Servicios de <span className="gradient-text">SIGDEF</span>
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
  );
}
