import { useState, useEffect } from 'react';
import { applyCatalogPrices, fetchPlanesCatalog } from '../../services/plansCatalog';
import { plansDataBase } from '../../data/plansData';
import { PlanTierCard } from '../ui/PlanTierCard';

export function Servicios({ selectNivel }) {
  const [selectedTab, setSelectedTab] = useState('duo');
  const [plansData, setPlansData] = useState(plansDataBase);

  useEffect(() => {
    let cancelled = false;
    fetchPlanesCatalog()
      .then((planes) => {
        if (!cancelled) setPlansData(applyCatalogPrices(plansDataBase, planes));
      })
      .catch((err) => {
        console.warn('No se pudieron cargar precios del catálogo; se usan valores locales.', err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const currentPlan = plansData[selectedTab];

  return (
    <section
      id="servicios"
      style={{
        background: 'rgba(26, 48, 85, 0.08)',
        borderTop: '1px solid rgba(45,140,80,0.1)',
        borderBottom: '1px solid rgba(45,140,80,0.1)',
        padding: '3.5rem 0',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>
            Nuestros <span className="gradient-text-joint">Planes de Servicio</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
            Seleccione el esquema que mejor se adapte al volumen y necesidades de su federación. Escale de plan cuando su institución lo requiera.
          </p>
          <div className="section-divider" />
        </div>

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
                onMouseEnter={(e) => {
                  if (!isSelected) e.target.style.borderColor = value.color;
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.target.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                {value.title}
              </button>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.15rem', color: '#ffffff' }}>{currentPlan.title}</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{currentPlan.subtitle}</p>
        </div>

        <div className="grid-3 plans-grid">
          {currentPlan.tiers.map((tier) => (
            <PlanTierCard
              key={tier.id}
              tier={tier}
              planFamily={currentPlan}
              selectedTab={selectedTab}
              onSelectNivel={selectNivel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
