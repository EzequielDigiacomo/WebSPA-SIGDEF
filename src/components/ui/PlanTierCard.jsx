import { Check } from 'lucide-react';

const annualColorFor = (tab) =>
  tab === 'sporttrack' ? '#0070f3' : tab === 'duo' ? '#3daa94' : '#10b981';

const tabLabel = (tab) =>
  tab === 'duo' ? 'Pack Dúo' : tab === 'sporttrack' ? 'Solo SportTrack' : 'Solo SIGDEF';

export function PlanTierCard({ tier, planFamily, selectedTab, onSelectNivel }) {
  const isFeatured = tier.featured;
  const CardIcon = tier.icon;
  const annualColor = annualColorFor(selectedTab);

  return (
    <div
      className={`tier-card plans-card ${planFamily.cardClass} ${isFeatured ? 'featured' : ''}`}
      style={{
        border: isFeatured ? `2px solid ${planFamily.color}` : '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {isFeatured && (
        <div className="plan-badge" style={{ backgroundColor: planFamily.color }}>
          Más Popular
        </div>
      )}

      <div className="plans-card-body">
        <div
          className="plan-icon-wrapper"
          style={{
            color: isFeatured ? planFamily.color : '#94a3b8',
          }}
        >
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
              <Check size={14} className={planFamily.checkClass} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="plans-card-cta">
        <button
          onClick={() => onSelectNivel(`${tabLabel(selectedTab)} - ${tier.name}`)}
          className={isFeatured ? planFamily.btnFeaturedClass : planFamily.btnOutlineClass}
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
}
