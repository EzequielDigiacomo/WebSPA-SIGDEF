import { Mail, MessageCircle, Send } from 'lucide-react';

export function Contacto({ nivelInteres, setNivelInteres }) {
  return (
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
  );
}
