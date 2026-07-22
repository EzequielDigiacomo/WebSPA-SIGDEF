import React from 'react';
import { Mail, MessageSquare, Send, Smartphone } from 'lucide-react';

export function Contacto({ nivelInteres, setNivelInteres }) {
  return (
    <section id="contacto" style={{ padding: '6rem 0' }}>
      <div className="container">
        
        {/* Encabezado */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 850, color: '#ffffff', margin: 0, lineHeight: 1.15 }}>
            Ponete en <span className="text-gradient-green">Contacto</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0.5rem auto 0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            ¿Listo para digitalizar tu federación? Nuestro equipo te asesora personalmente.
          </p>
          <div className="app-line-decorator"></div>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '3rem' }}>

          {/* Panel Izquierdo: Contacto Directo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="glass-card" style={{ 
              backgroundColor: 'rgba(17, 24, 39, 0.75)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}>
              <h4 style={{ 
                color: '#ffffff', 
                marginBottom: '1.5rem', 
                fontSize: '1.15rem', 
                fontWeight: 700, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.65rem' 
              }}>
                <div style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#10b981',
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                  <Mail size={16} />
                </div>
                Contacto Directo
              </h4>
              
              <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Email</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>info@dgotech.org</div>
              </div>
              
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>WhatsApp</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>+54 9 341 228 0901</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="https://wa.me/5493412280901?text=Hola%20DgoTech%2C%20quiero%20conocer%20más%20sobre%20SIGDEF%20y%20SportTrack"
                target="_blank" rel="noopener noreferrer"
                className="btn-acc-green" style={{ flex: 1, padding: '0.75rem 1rem !important', fontSize: '0.925rem' }}>
                <MessageSquare size={16} /> WhatsApp
              </a>
              <a href="mailto:info@dgotech.org"
                className="btn-acc-outline" style={{ flex: 1, padding: '0.75rem 1rem !important', fontSize: '0.925rem' }}>
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          {/* Panel Derecho: Formulario de Mensaje */}
          <div className="glass-card" style={{ 
            backgroundColor: 'rgba(17, 24, 39, 0.75)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}>
            <h4 style={{ 
              color: '#ffffff', 
              marginBottom: '1.5rem', 
              fontSize: '1.15rem', 
              fontWeight: 700, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.65rem' 
            }}>
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: '#10b981',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <Send size={16} />
              </div>
              Envianos un Mensaje
            </h4>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('¡Mensaje enviado! Nos contactaremos pronto.'); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="contact-nombre" style={{ color: '#cbd5e1', fontWeight: 600, fontSize: '0.85rem' }}>Nombre</label>
                  <input id="contact-nombre" type="text" placeholder="Tu nombre" required className="contact-input-dark" style={{ marginBottom: 0 }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="contact-org" style={{ color: '#cbd5e1', fontWeight: 600, fontSize: '0.85rem' }}>Institución</label>
                  <input id="contact-org" type="text" placeholder="Federación / Club" className="contact-input-dark" style={{ marginBottom: 0 }} />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="contact-email" style={{ color: '#cbd5e1', fontWeight: 600, fontSize: '0.85rem' }}>Email</label>
                <input id="contact-email" type="email" placeholder="tuemail@institución.com" required className="contact-input-dark" style={{ marginBottom: 0 }} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="contact-nivel" style={{ color: '#cbd5e1', fontWeight: 600, fontSize: '0.85rem' }}>Nivel de Interés</label>
                <select
                  id="contact-nivel"
                  value={nivelInteres}
                  onChange={(e) => setNivelInteres(e.target.value)}
                  className="contact-input-dark"
                  style={{
                    marginBottom: 0,
                    cursor: 'pointer',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238a9bb5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                  }}
                >
                  <option value="" style={{ background: '#0b0f19', color: '#64748b' }}>Seleccioná un plan...</option>
                  <optgroup label="🎁 Pack Dúo (Ecosistema Integrado)" style={{ background: '#0b0f19', color: '#ffffff', fontWeight: 600 }}>
                    <option value="Pack Dúo - Plan Esencial" style={{ background: '#0b0f19', color: '#cbd5e1' }}>Pack Dúo — Plan Esencial (Hasta 500 atletas)</option>
                    <option value="Pack Dúo - Plan Profesional" style={{ background: '#0b0f19', color: '#cbd5e1' }}>Pack Dúo — Plan Profesional (501 a 2,000 atletas)</option>
                    <option value="Pack Dúo - Plan Ecosistema" style={{ background: '#0b0f19', color: '#cbd5e1' }}>Pack Dúo — Plan Ecosistema (Más de 2,000 atletas)</option>
                  </optgroup>
                  <optgroup label="🟢 Solo SIGDEF (Gestión)" style={{ background: '#0b0f19', color: '#ffffff', fontWeight: 600 }}>
                    <option value="Solo SIGDEF - Plan Esencial" style={{ background: '#0b0f19', color: '#cbd5e1' }}>Solo SIGDEF — Plan Esencial (Hasta 500 atletas)</option>
                    <option value="Solo SIGDEF - Plan Profesional" style={{ background: '#0b0f19', color: '#cbd5e1' }}>Solo SIGDEF — Plan Profesional (501 a 2,000 atletas)</option>
                    <option value="Solo SIGDEF - Plan Ecosistema" style={{ background: '#0b0f19', color: '#cbd5e1' }}>Solo SIGDEF — Plan Ecosistema (Más de 2,000 atletas)</option>
                  </optgroup>
                  <optgroup label="🔵 Solo SportTrack (Competencias)" style={{ background: '#0b0f19', color: '#ffffff', fontWeight: 600 }}>
                    <option value="Solo SportTrack - Plan Esencial" style={{ background: '#0b0f19', color: '#cbd5e1' }}>Solo SportTrack — Plan Esencial (Hasta 500 atletas)</option>
                    <option value="Solo SportTrack - Plan Profesional" style={{ background: '#0b0f19', color: '#cbd5e1' }}>Solo SportTrack — Plan Profesional (501 a 2,000 atletas)</option>
                    <option value="Solo SportTrack - Plan Ecosistema" style={{ background: '#0b0f19', color: '#cbd5e1' }}>Solo SportTrack — Plan Ecosistema (Más de 2,000 atletas)</option>
                  </optgroup>
                </select>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="contact-mensaje" style={{ color: '#cbd5e1', fontWeight: 600, fontSize: '0.85rem' }}>Mensaje</label>
                <textarea id="contact-mensaje" rows={3} placeholder="Contanos cómo podemos ayudarte a crear tu software acorde a tus necesidades" className="contact-input-dark" style={{ marginBottom: 0, resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" className="btn-acc-green" style={{ width: '100%', marginTop: '0.75rem', height: 'auto', padding: '0.85rem' }}>
                Enviar Mensaje <Send size={16} />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
