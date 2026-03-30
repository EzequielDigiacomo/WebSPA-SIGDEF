import logoDark from '../../assets/logo oscuro.png';

export function SigdefLogo({ size = 'md' }) {
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
