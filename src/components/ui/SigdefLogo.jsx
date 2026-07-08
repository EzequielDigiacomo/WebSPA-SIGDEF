import logoDark from '../../assets/logo oscuro.png';
import logoSporttrack from '../../assets/logo-sporttrack.png';

export function SigdefLogo({ size = 'md' }) {
  if (size === 'sm') {
    // NAVBAR Variant: Side-by-side row, no subtexts, small images (h=24)
    const h = 24;
    const iconH = 22;
    return (
      <>
        {/* Row layout for desktop navbar */}
        <div className="logo-full" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', userSelect: 'none' }}>
          {/* SIGDEF */}
          <img
            src={logoDark}
            alt="SIGDEF"
            style={{ height: h, width: 'auto', objectFit: 'contain' }}
          />

          {/* Vertical Divider with & */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            paddingLeft: '0.25rem',
            paddingRight: '0.25rem'
          }}>
            <span style={{ 
              fontSize: '1rem', 
              fontWeight: 800, 
              color: '#8bc34a',
              lineHeight: 1
            }}>&</span>
          </div>

          {/* SportTrack */}
          <img
            src={logoSporttrack}
            alt="SportTrack"
            style={{ height: h, width: 'auto', objectFit: 'contain' }}
          />
        </div>

        {/* Mobile Icon view */}
        <div
          className="logo-icon"
          style={{ display: 'none', alignItems: 'center', gap: '0.35rem', userSelect: 'none' }}
        >
          <img
            src="/faviconOscuro.png"
            alt="SIGDEF"
            style={{ height: iconH, width: 'auto', objectFit: 'contain' }}
          />
          <span style={{ color: '#8bc34a', fontWeight: 800, fontSize: '0.95rem', lineHeight: 1 }}>&</span>
          <img
            src={logoSporttrack}
            alt="SportTrack"
            style={{ height: iconH, width: 'auto', objectFit: 'contain' }}
          />
        </div>
      </>
    );
  }

  // DEFAULT/FOOTER Variant: Vertical column, large images, with subtexts
  const h = size === 'lg' ? 70 : 54;
  const iconH = size === 'lg' ? 54 : 40;
  const subFontSize = size === 'lg' ? '0.45rem' : '0.36rem';

  return (
    <>
      {/* Full vertical column logos — hidden on mobile */}
      <div className="logo-full" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.65rem', userSelect: 'none' }}>
        
        {/* SIGDEF */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={logoDark}
            alt="SIGDEF"
            style={{ height: h, width: 'auto', objectFit: 'contain' }}
            aria-label="SIGDEF — Sistema Integral de Gestión de Federaciones"
          />
          <span style={{
            fontFamily: "'Montserrat', 'Arial', sans-serif",
            fontWeight: 600,
            fontSize: subFontSize,
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '1.2px',
            marginTop: '3px',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap'
          }}>SISTEMA INTEGRAL DE GESTIÓN DE FEDERACIONES</span>
        </div>

        {/* Horizontal Divider with & */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          borderTop: '1px solid rgba(255,255,255,0.12)', 
          width: size === 'lg' ? '150px' : '110px',
          paddingTop: '0.45rem',
          paddingBottom: '0.25rem',
          margin: '0.15rem 0'
        }}>
          <span style={{ 
            fontSize: size === 'lg' ? '1.5rem' : '1.15rem', 
            fontWeight: 800, 
            color: '#8bc34a',
            lineHeight: 1
          }}>&</span>
        </div>

        {/* SportTrack */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={logoSporttrack}
            alt="SportTrack"
            style={{ height: h, width: 'auto', objectFit: 'contain' }}
            aria-label="SportTrack — Gestión de Competencias Deportivas"
          />
          <span style={{
            fontFamily: "'Montserrat', 'Arial', sans-serif",
            fontWeight: 600,
            fontSize: subFontSize,
            color: 'rgba(255,255,255,0.7)',
            letterSpacing: '1.2px',
            marginTop: '3px',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap'
          }}>GESTIÓN Y CONTROL DE COMPETENCIAS DEPORTIVAS</span>
        </div>

      </div>

      {/* Dual Icon view — shown on mobile only */}
      <div
        className="logo-icon"
        style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '0.45rem', userSelect: 'none' }}
      >
        <img
          src="/faviconOscuro.png"
          alt="SIGDEF"
          style={{ height: iconH, width: 'auto', objectFit: 'contain' }}
        />
        <span style={{ color: '#8bc34a', fontWeight: 800, fontSize: size === 'lg' ? '1.35rem' : '1.1rem', lineHeight: 1 }}>&</span>
        <img
          src={logoSporttrack}
          alt="SportTrack"
          style={{ height: iconH, width: 'auto', objectFit: 'contain' }}
        />
      </div>
    </>
  );
}

