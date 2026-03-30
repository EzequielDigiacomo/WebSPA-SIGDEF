import { Smartphone, LayoutDashboard, Wifi, Search } from 'lucide-react';

export function AppMovil() {
  return (
    <section id="mobile" className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="mobile-grid">

        {/* Texto superior */}
        <div className="mobile-text-top" style={{ textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>
            App Nativa para tu <span className="gradient-text">Celular</span>
          </h2>
          <div className="section-divider" style={{ margin: '1rem 0 2rem', width: 50 }} />
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '0', lineHeight: 1.75 }}>
            SIGDEF no se queda en el escritorio. Diseñamos una <strong style={{ color: 'var(--text-main)' }}>aplicación móvil nativa</strong> para que los delegados, entrenadores y administradores puedan gestionar su federación o clubes desde cualquier lugar.
          </p>
        </div>

        {/* Features */}
        <div className="mobile-features" style={{ textAlign: 'left' }}>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {[
              [Smartphone, 'Android', 'App nativa en React Native. Misma experiencia, mismo diseño, en cada dispositivo.'],
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
        <div className="mobile-mockup" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
  );
}
