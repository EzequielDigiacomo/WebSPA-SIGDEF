/**
 * Logo.jsx — Componentes SVG de la identidad visual de SIGDEF
 * 
 * Exporta tres versiones del logo oficial:
 *  - LogoFigura   → solo el atleta geométrico (ideal para favicon, ícono de app)
 *  - LogoTexto    → solo el texto "SIGDEF" + subtítulo (ideal para navbar estrecho)
 *  - LogoCompleto → figura + texto juntos (versión oficial completa)
 */

/* ─── Colores de marca ─────────────────────────────────── */
const C = {
  sigGreen:   '#2d8c50',   // Verde "SIG"
  sigLight:   '#8bc34a',   // Verde lima (figura superior)
  defNavy:    '#1a3055',   // Azul marino "DEF"
  subtitle:   '#1a3055',   // Color subtítulo
  jointLight: '#8bc34a',
  jointDark:  '#1a3055',
}

/* ─── Gradiente compartido ─────────────────────────────── */
function FigureGradientDefs({ id = 'figGrad' }) {
  return (
    <defs>
      <linearGradient id={id} x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor={C.sigLight} />
        <stop offset="45%"  stopColor={C.sigGreen} />
        <stop offset="100%" stopColor={C.defNavy}  />
      </linearGradient>
      <linearGradient id={`${id}-arm`} x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor={C.sigLight} />
        <stop offset="100%" stopColor={C.sigGreen} />
      </linearGradient>
    </defs>
  )
}

/* ─── Figura atletica SVG ──────────────────────────────── */
function FiguraPath({ id = 'figGrad', strokeW = 2.5 }) {
  const sw = strokeW
  return (
    <>
      {/* Cabeza */}
      <circle cx="77" cy="13" r="8"  fill="none" stroke={C.sigLight} strokeWidth={sw} />

      {/* Torso (desde cuello hasta cadera, inclinado) */}
      <line x1="72" y1="21" x2="54" y2="60" stroke={`url(#${id})`} strokeWidth={sw} />

      {/* Brazo derecho (adelante y arriba — sprint) */}
      <line x1="70" y1="27" x2="92" y2="13" stroke={`url(#${id}-arm)`} strokeWidth={sw} />
      <line x1="92" y1="13" x2="100" y2="22" stroke={C.sigLight} strokeWidth={sw} />

      {/* Brazo izquierdo (atrás, hacia el engranaje) */}
      <line x1="68" y1="31" x2="47" y2="47" stroke={C.defNavy} strokeWidth={sw} />
      <line x1="47" y1="47" x2="40" y2="60" stroke={C.defNavy} strokeWidth={sw} />

      {/* Pierna derecha (adelante) */}
      <line x1="54" y1="60" x2="68" y2="84" stroke={`url(#${id})`} strokeWidth={sw} />
      <line x1="68" y1="84" x2="80" y2="110" stroke={C.sigGreen} strokeWidth={sw} />

      {/* Pierna izquierda (atrás/arriba — sprint) */}
      <line x1="54" y1="60" x2="36" y2="78" stroke={C.defNavy} strokeWidth={sw} />
      <line x1="36" y1="78" x2="22" y2="106" stroke={C.defNavy} strokeWidth={sw} />

      {/* Articulaciones — nodos */}
      {/* Hombro derecho */}
      <circle cx="70" cy="27" r="3.5" fill={C.defNavy} stroke={C.sigLight} strokeWidth="1.5" />
      {/* Codo derecho */}
      <circle cx="92" cy="13" r="3"   fill={C.defNavy} stroke={C.sigLight} strokeWidth="1.5" />
      {/* Codo izquierdo */}
      <circle cx="47" cy="47" r="3"   fill={C.defNavy} stroke={C.sigGreen} strokeWidth="1.5" />
      {/* Rodilla derecha */}
      <circle cx="68" cy="84" r="3.5" fill={C.defNavy} stroke={C.sigGreen} strokeWidth="1.5" />
      {/* Rodilla izquierda */}
      <circle cx="36" cy="78" r="3"   fill={C.defNavy} stroke={C.defNavy}  strokeWidth="1.5" />

      {/* Engranaje grande (principal) */}
      <circle cx="34" cy="70" r="14.5" fill="none" stroke={C.defNavy} strokeWidth="2.5"
              strokeDasharray="4 2.8" />
      <circle cx="34" cy="70" r="7.5"  fill="none" stroke={C.defNavy} strokeWidth="1.8" />

      {/* Engranaje pequeño (superpuesto) */}
      <circle cx="21" cy="81" r="9.5"  fill="none" stroke={C.sigGreen} strokeWidth="2"
              strokeDasharray="3 2.2" />
      <circle cx="21" cy="81" r="4.5"  fill="none" stroke={C.sigGreen} strokeWidth="1.5" />
    </>
  )
}

/* ══════════════════════════════════════════════════════════
   LogoFigura — solo el atleta geométrico
   Uso: favicon, ícono de app, avatar, marca de agua
   ══════════════════════════════════════════════════════════ */
export function LogoFigura({ height = 80, className = '' }) {
  return (
    <svg
      height={height}
      viewBox="0 0 115 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SIGDEF — Figura atlética"
      className={className}
    >
      <FigureGradientDefs id="fig-solo" />
      <FiguraPath id="fig-solo" />
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════
   LogoTexto — solo "SIGDEF" + subtítulo
   Uso: situaciones donde el espacio horizontal es limitado
        y ya se usa la figura por separado
   ══════════════════════════════════════════════════════════ */
export function LogoTexto({ height = 60, className = '' }) {
  return (
    <svg
      height={height}
      viewBox="0 0 295 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SIGDEF — Logotipo"
      className={className}
    >
      {/* "SIG" — verde corporativo */}
      <text
        x="0" y="54"
        fontFamily="'Montserrat', 'Arial Black', 'Impact', sans-serif"
        fontWeight="900"
        fontSize="56"
        fill={C.sigGreen}
        letterSpacing="-1"
      >SIG</text>

      {/* "DEF" — azul marino corporativo */}
      <text
        x="113" y="54"
        fontFamily="'Montserrat', 'Arial Black', 'Impact', sans-serif"
        fontWeight="900"
        fontSize="56"
        fill={C.defNavy}
        letterSpacing="-1"
      >DEF</text>

      {/* Subtítulo */}
      <text
        x="2" y="69"
        fontFamily="'Montserrat', 'Arial', sans-serif"
        fontWeight="600"
        fontSize="10"
        fill={C.defNavy}
        letterSpacing="1.8"
      >SISTEMA DE GESTIÓN DE FEDERACIÓN</text>
    </svg>
  )
}

/* ══════════════════════════════════════════════════════════
   LogoCompleto — figura + texto (versión oficial)
   Uso: header principal, presentaciones, documentos
   ══════════════════════════════════════════════════════════ */
export function LogoCompleto({ height = 90, className = '' }) {
  return (
    <svg
      height={height}
      viewBox="0 0 440 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SIGDEF — Sistema de Gestión de Federación"
      className={className}
    >
      <FigureGradientDefs id="fig-completo" />

      {/* Figura (zona izquierda, ancho ≈ 115px) */}
      <g>
        <FiguraPath id="fig-completo" />
      </g>

      {/* Separador sutil */}
      <line x1="122" y1="18" x2="122" y2="108"
            stroke="rgba(26, 48, 85, 0.2)" strokeWidth="1" />

      {/* Texto: "SIG" */}
      <text
        x="132" y="82"
        fontFamily="'Montserrat', 'Arial Black', 'Impact', sans-serif"
        fontWeight="900"
        fontSize="72"
        fill={C.sigGreen}
        letterSpacing="-2"
      >SIG</text>

      {/* Texto: "DEF" */}
      <text
        x="277" y="82"
        fontFamily="'Montserrat', 'Arial Black', 'Impact', sans-serif"
        fontWeight="900"
        fontSize="72"
        fill={C.defNavy}
        letterSpacing="-2"
      >DEF</text>

      {/* Subtítulo */}
      <text
        x="133" y="103"
        fontFamily="'Montserrat', 'Arial', sans-serif"
        fontWeight="600"
        fontSize="12.5"
        fill={C.defNavy}
        letterSpacing="1.6"
      >SISTEMA DE GESTIÓN DE FEDERACIÓN</text>
    </svg>
  )
}

/* Exportación por defecto: el logo completo */
export default LogoCompleto
