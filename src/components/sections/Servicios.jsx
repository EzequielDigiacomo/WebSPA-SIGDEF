import { useState } from 'react';
import { LayoutDashboard, Building2, Zap, Timer, Tv, Globe, Layers, Sparkles, Check, Star } from 'lucide-react';
import { TierIcon } from '../ui/TierIcon';

const plansData = {
  sigdef: {
    title: "Solo SIGDEF (Gestión)",
    subtitle: "Módulo Administrativo y Padrón Federativo",
    color: "#10b981",
    cardClass: "", 
    badgeClass: "",
    checkClass: "icon-check-green",
    btnFeaturedClass: "btn-acc-green",
    btnOutlineClass: "btn-acc-outline",
    tiers: [
      {
        id: "sigdef-s",
        name: "Plan Esencial",
        limit: "Hasta 500 atletas activos",
        price: "$50",
        period: "/mes",
        annualPrice: "Anual: $480/año (~$40/mes)",
        featured: false,
        icon: LayoutDashboard,
        color: "#10b981",
        features: [
          "Panel de Control Único (Admin Federación)",
          "Padrón Digital Básico de Afiliados",
          "Categorización por edad automática",
          "Legajo de Datos Personales (DNI, Pasaporte)",
          "Validación básica de documentación interna",
          "Módulo de tutoría legal para atletas menores",
          "Exportación de planillas a Excel"
        ]
      },
      {
        id: "sigdef-m",
        name: "Plan Profesional",
        limit: "501 a 2,000 atletas activos",
        price: "$120",
        period: "/mes",
        annualPrice: "Anual: $1,150/año (~$96/mes)",
        featured: true,
        icon: Building2,
        color: "#10b981",
        features: [
          "Todo lo del Plan Esencial",
          "Doble Dashboard (Federación + Clubes)",
          "Carga descentralizada desde cada Club",
          "Flujo de Aprobación Remota en tiempo real",
          "Gestión avanzada de fotos y legajos médicos",
          "Módulo de matrícula y control de afiliación",
          "Filtros avanzados por club, pago y vigencia"
        ]
      },
      {
        id: "sigdef-l",
        name: "Plan Ecosistema",
        limit: "Más de 2,000 atletas activos",
        price: "$250",
        period: "/mes",
        annualPrice: "Anual: $2,400/año (~$200/mes)",
        featured: false,
        icon: Star,
        color: "#10b981",
        features: [
          "Todo lo del Plan Profesional",
          "App Móvil Dedicada (Android / iOS)",
          "Mensajería interna oficial Federación-Clubes",
          "Centro de Notificaciones masivas con acuse",
          "Auditoría completa de logs y seguridad",
          "Resoluciones y circulares oficiales digitales",
          "Soporte multimedia de alta resolución"
        ]
      }
    ]
  },
  sporttrack: {
    title: "Solo SportTrack (Eventos)",
    subtitle: "Módulo de Competencias, Tiempos y Resultados",
    color: "#0070f3",
    cardClass: "st-theme",
    badgeClass: "st-badge",
    checkClass: "icon-check-blue",
    btnFeaturedClass: "btn-acc-blue",
    btnOutlineClass: "btn-acc-outline btn-acc-outline-blue",
    tiers: [
      {
        id: "st-s",
        name: "Plan Esencial",
        limit: "Hasta 500 atletas activos",
        price: "$40",
        period: "/mes",
        annualPrice: "Anual: $380/año (~$31/mes)",
        featured: false,
        icon: Timer,
        color: "#0070f3",
        features: [
          "Inscripción básica de atletas a regatas",
          "Pizarra de resultados en vivo (web pública)",
          "Consola para Juez Cronometrista",
          "Planillas de clasificación y series",
          "Soporte para 1 disciplina deportiva",
          "Reporte PDF automático de regatas",
          "Gráficos básicos de rendimiento"
        ]
      },
      {
        id: "st-m",
        name: "Plan Profesional",
        limit: "501 a 2,000 atletas activos",
        price: "$90",
        period: "/mes",
        annualPrice: "Anual: $860/año (~$71/mes)",
        featured: true,
        icon: Tv,
        color: "#0070f3",
        features: [
          "Todo lo del Plan Esencial",
          "Resultados en vivo dinámicos mediante SignalR",
          "Múltiples consolas de jueces (Largada + Llegada)",
          "Inscripción descentralizada directa por Clubes",
          "Control de penalidades y descalificaciones",
          "Cronograma interactivo de pruebas",
          "Filtros avanzados por series y categorías"
        ]
      },
      {
        id: "st-l",
        name: "Plan Ecosistema",
        limit: "Más de 2,000 atletas activos",
        price: "$190",
        period: "/mes",
        annualPrice: "Anual: $1,800/año (~$150/mes)",
        featured: false,
        icon: Globe,
        color: "#0070f3",
        features: [
          "Todo lo del Plan Profesional",
          "Globo terráqueo 3D interactivo de eventos",
          "Integración de telemetría y GPS en vivo",
          "Marca Blanca (Resultados en dominio propio)",
          "Soporte multidisciplinario avanzado",
          "API pública de resultados e integraciones",
          "Pantalla de resultados adaptada a Streaming/TV"
        ]
      }
    ]
  },
  duo: {
    title: "Pack Dúo (Ecosistema)",
    subtitle: "SIGDEF + SportTrack Integrados (Ahorro del 20%)",
    color: "#3daa94",
    cardClass: "duo-theme",
    badgeClass: "duo-badge",
    checkClass: "icon-check-green", // Mezcla de ambos, usamos verde como base
    btnFeaturedClass: "btn-acc-green",
    btnOutlineClass: "btn-acc-outline",
    tiers: [
      {
        id: "duo-s",
        name: "Plan Esencial",
        limit: "Hasta 500 atletas activos",
        price: "$75",
        period: "/mes",
        annualPrice: "Anual: $720/año (~$60/mes)",
        featured: false,
        icon: Layers,
        color: "#3daa94",
        features: [
          "Plataformas integradas (SIGDEF + SportTrack)",
          "Sincronización básica de padrón a regatas",
          "Legajo básico y 1 consola de cronometrista",
          "Pizarra de resultados en vivo",
          "50% de descuento en setup inicial",
          "1.5% fee de inscripción en torneos de pago",
          "Soporte técnico prioritario por email"
        ]
      },
      {
        id: "duo-m",
        name: "Plan Profesional",
        limit: "501 a 2,000 atletas activos",
        price: "$170",
        period: "/mes",
        annualPrice: "Anual: $1,600/año (~$133/mes)",
        featured: true,
        icon: Sparkles,
        color: "#3daa94",
        features: [
          "SIGDEF Standard + SportTrack Standard",
          "Sincronización automática de atletas de clubes",
          "Inscripción descentralizada con validación",
          "Pagos unificados (Afiliación + Inscripción torneo)",
          "Consolas multi-juez SignalR sincronizadas",
          "Setup inicial e inducción técnica incluidos",
          "2.0% fee de inscripción en torneos de pago"
        ]
      },
      {
        id: "duo-l",
        name: "Plan Ecosistema",
        limit: "Más de 2,000 atletas activos",
        price: "$350",
        period: "/mes",
        annualPrice: "Anual: $3,360/año (~$280/mes)",
        featured: false,
        icon: Zap,
        color: "#3daa94",
        features: [
          "SIGDEF Premium + SportTrack Premium",
          "App Móvil Integrada (Legajo + Live Tracking)",
          "Marca Blanca (Dominio propio y logos incluidos)",
          "Mensajería y notificaciones masivas oficiales",
          "Globo 3D y telemetría avanzada de regatas",
          "Soporte VIP 24/7 y Setup prioritario incluido",
          "Fee de inscripción reducido al 1.0%"
        ]
      }
    ]
  }
};

export function Servicios({ selectNivel }) {
  const [selectedTab, setSelectedTab] = useState('duo'); // Dúo recomendado por defecto

  const currentPlan = plansData[selectedTab];

  return (
    <section id="servicios" style={{ background: 'rgba(26, 48, 85, 0.08)', borderTop: '1px solid rgba(45,140,80,0.1)', borderBottom: '1px solid rgba(45,140,80,0.1)', padding: '3.5rem 0' }}>
      <div className="container">
        
        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>
            Nuestros <span className="gradient-text-joint">Planes de Servicio</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
            Seleccione el esquema que mejor se adapte al volumen y necesidades de su federación. Escale de plan cuando su institución lo requiera.
          </p>
          <div className="section-divider" />
        </div>

        {/* Selector de pestañas */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.65rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {Object.entries(plansData).map(([key, value]) => {
            const isSelected = selectedTab === key;
            let activeBg = 'linear-gradient(135deg, var(--verde-sig), var(--verde-sig-light))';
            if (key === 'sporttrack') {
              activeBg = 'linear-gradient(135deg, var(--azul-st), var(--azul-st-light))';
            } else if (key === 'duo') {
              activeBg = 'linear-gradient(135deg, var(--verde-sig) 0%, var(--azul-st) 100%)';
            }
            return (
              <button
                key={key}
                onClick={() => setSelectedTab(key)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  border: '1px solid ' + (isSelected ? 'transparent' : 'rgba(255,255,255,0.08)'),
                  background: isSelected ? activeBg : 'rgba(26, 48, 85, 0.25)',
                  color: isSelected ? 'white' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  boxShadow: isSelected ? '0 8px 24px rgba(0,0,0,0.2)' : 'none',
                }}
                onMouseEnter={e => {
                  if (!isSelected) e.target.style.borderColor = value.color;
                }}
                onMouseLeave={e => {
                  if (!isSelected) e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                {value.title}
              </button>
            );
          })}
        </div>

        {/* Grilla de 3 tarjetas correspondientes al plan seleccionado */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.15rem', color: '#ffffff' }}>{currentPlan.title}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{currentPlan.subtitle}</p>
        </div>

        <div className="grid-3 plans-grid">
          {currentPlan.tiers.map((tier) => {
            const isFeatured = tier.featured;
            const CardIcon = tier.icon;
            
            // Colores anuales de acento
            const annualColor = selectedTab === 'sporttrack' ? '#0070f3' : selectedTab === 'duo' ? '#3daa94' : '#10b981';

            return (
              <div
                key={tier.id}
                className={`tier-card plans-card ${currentPlan.cardClass} ${isFeatured ? 'featured' : ''}`}
                style={{ 
                  border: isFeatured 
                    ? `2px solid ${currentPlan.color}` 
                    : '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                {isFeatured && (
                  <div className={`plan-badge`} style={{ backgroundColor: currentPlan.color }}>
                    Más Popular
                  </div>
                )}
                
                <div className="plans-card-body">
                  <div className="plan-icon-wrapper" style={{
                    color: isFeatured ? currentPlan.color : '#94a3b8',
                  }}>
                    <CardIcon size={18} />
                  </div>

                  <h3 className="plans-card-title">{tier.name}</h3>
                  <span className="plans-card-limit">{tier.limit}</span>

                  <div className="plans-card-price">
                    <span className="plans-price-value">{tier.price}</span>
                    <span className="plans-price-period">{tier.period}</span>
                  </div>
                  
                  <span className="plans-card-annual" style={{ color: annualColor }}>
                    {tier.annualPrice}
                  </span>

                  <ul className="feature-list plans-feature-list">
                    {tier.features.map((feat, idx) => (
                      <li key={idx}>
                        <Check size={14} className={currentPlan.checkClass} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="plans-card-cta">
                  <button
                    onClick={() => selectNivel(`${selectedTab === 'duo' ? 'Pack Dúo' : selectedTab === 'sporttrack' ? 'Solo SportTrack' : 'Solo SIGDEF'} - ${tier.name}`)}
                    className={isFeatured ? currentPlan.btnFeaturedClass : currentPlan.btnOutlineClass}
                    style={{
                      width: '100%',
                      margin: 0,
                      padding: '0.55rem 1rem !important',
                      fontSize: '0.85rem',
                    }}
                  >
                    Consultar Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
