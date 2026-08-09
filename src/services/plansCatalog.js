const DEFAULT_API = 'https://sporttrack-sigdef.onrender.com/api';

export function getApiBaseUrl() {
  const fromEnv = import.meta.env.VITE_API_URL;
  if (fromEnv && String(fromEnv).trim()) {
    return String(fromEnv).replace(/\/$/, '');
  }
  return DEFAULT_API;
}

const money = (n) =>
  `$${Number(n).toLocaleString('es-AR', { maximumFractionDigits: 0 })}`;

const formatLimit = (maxAtletas) => {
  const n = Number(maxAtletas);
  if (n === -1) return 'Atletas ilimitados';
  if (n > 0) return `Hasta ${n.toLocaleString('es-AR')} atletas activos`;
  return null;
};

const formatAnnual = (precioAnual, precioMensual) => {
  const anual = Number(precioAnual);
  const mensual = Number(precioMensual);
  if (!Number.isFinite(anual) || anual <= 0) return null;
  const equiv = Math.round(anual / 12);
  return `Anual: ${money(anual)}/año (~${money(equiv)}/mes)`;
};

/** Mapea planes de la API al shape de la web marketing */
export function applyCatalogPrices(plansData, apiPlanes = []) {
  if (!apiPlanes?.length) return plansData;

  const byKey = {};
  for (const p of apiPlanes) {
    const nombre = String(p.nombre ?? p.Nombre ?? '').toLowerCase();
    const precio = Number(p.precio ?? p.Precio ?? 0);
    const precioAnual = Number(p.precioAnual ?? p.PrecioAnual ?? 0);
    const maxAtletas = p.maxAtletas ?? p.MaxAtletas;
    const descuento = Number(p.descuentoAnualPorcentaje ?? p.DescuentoAnualPorcentaje ?? 0);

    let family = null;
    if (nombre.includes('pack') && (nombre.includes('dúo') || nombre.includes('duo'))) family = 'duo';
    else if (nombre.includes('sporttrack')) family = 'sporttrack';
    else if (nombre.includes('sigdef')) family = 'sigdef';

    let size = null;
    if (nombre.includes('(s)')) size = 's';
    else if (nombre.includes('(m)')) size = 'm';
    else if (nombre.includes('(l)')) size = 'l';

    if (family && size) {
      byKey[`${family}-${size}`] = { precio, precioAnual, maxAtletas, descuento };
    }
  }

  const next = { ...plansData };
  for (const family of Object.keys(next)) {
    next[family] = {
      ...next[family],
      tiers: next[family].tiers.map((tier) => {
        const size = tier.id?.split('-')?.pop(); // sigdef-s → s
        const cat = byKey[`${family}-${size}`];
        if (!cat) return tier;

        const limit = formatLimit(cat.maxAtletas) || tier.limit;
        const price = Number.isFinite(cat.precio) ? money(cat.precio) : tier.price;
        const annualPrice = formatAnnual(cat.precioAnual, cat.precio) || tier.annualPrice;

        return { ...tier, price, annualPrice, limit };
      }),
    };
  }
  return next;
}

export async function fetchPlanesCatalog() {
  const base = getApiBaseUrl();
  const res = await fetch(`${base}/saas/planes`, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`Planes HTTP ${res.status}`);
  return res.json();
}
