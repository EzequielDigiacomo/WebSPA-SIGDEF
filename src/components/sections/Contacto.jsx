import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function Contacto({ nivelInteres, setNivelInteres }) {
  return (
    <section id="contacto" className="contacto-section">
      <div className="container">
        <div className="contacto-head">
          <h2>
            Ponete en <span className="gradient-text">Contacto</span>
          </h2>
          <p>
            ¿Listo para digitalizar tu federación? Nuestro equipo te asesora personalmente.
          </p>
          <div className="app-line-decorator" />
        </div>

        <div className="contact-grid">
          <div className="contacto-side">
            <div className="glass-card contacto-card">
              <h4 className="contacto-card-title">
                <span className="contacto-card-icon">
                  <Mail size={16} />
                </span>
                Contacto Directo
              </h4>

              <div className="contacto-field">
                <div className="contacto-label">Email</div>
                <div className="contacto-value">dgotech13@gmail.com</div>
              </div>

              <div className="contacto-field">
                <div className="contacto-label">WhatsApp</div>
                <div className="contacto-value">+54 9 341 228 0901</div>
              </div>
            </div>

            <div className="contacto-actions">
              <a
                href="https://wa.me/5493412280901?text=Hola%20DgoTech%2C%20quiero%20conocer%20más%20sobre%20SIGDEF%20y%20SportTrack"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-acc-green contacto-action-btn"
              >
                <MessageSquare size={16} /> WhatsApp
              </a>
              <a href="mailto:info@dgotech.org" className="btn-acc-outline contacto-action-btn">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          <div className="glass-card contacto-card">
            <h4 className="contacto-card-title">
              <span className="contacto-card-icon">
                <Send size={16} />
              </span>
              Envianos un Mensaje
            </h4>

            <form
              className="contacto-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert('¡Mensaje enviado! Nos contactaremos pronto.');
              }}
            >
              <div className="contact-form-row">
                <div className="contacto-form-field">
                  <label htmlFor="contact-nombre">Nombre</label>
                  <input
                    id="contact-nombre"
                    type="text"
                    placeholder="Tu nombre"
                    required
                    className="contact-input-dark"
                  />
                </div>
                <div className="contacto-form-field">
                  <label htmlFor="contact-org">Institución</label>
                  <input
                    id="contact-org"
                    type="text"
                    placeholder="Federación / Club"
                    className="contact-input-dark"
                  />
                </div>
              </div>

              <div className="contacto-form-field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="tuemail@institución.com"
                  required
                  className="contact-input-dark"
                />
              </div>

              <div className="contacto-form-field">
                <label htmlFor="contact-nivel">Nivel de Interés</label>
                <select
                  id="contact-nivel"
                  value={nivelInteres}
                  onChange={(e) => setNivelInteres(e.target.value)}
                  className="contact-input-dark contacto-select"
                >
                  <option value="">Seleccioná un plan...</option>
                  <optgroup label="Pack Dúo (Ecosistema Integrado)">
                    <option value="Pack Dúo - Plan Esencial">Pack Dúo — Plan Esencial (Hasta 500 atletas)</option>
                    <option value="Pack Dúo - Plan Profesional">Pack Dúo — Plan Profesional (501 a 2,000 atletas)</option>
                    <option value="Pack Dúo - Plan Ecosistema">Pack Dúo — Plan Ecosistema (Más de 2,000 atletas)</option>
                  </optgroup>
                  <optgroup label="Solo SIGDEF (Gestión)">
                    <option value="Solo SIGDEF - Plan Esencial">Solo SIGDEF — Plan Esencial (Hasta 500 atletas)</option>
                    <option value="Solo SIGDEF - Plan Profesional">Solo SIGDEF — Plan Profesional (501 a 2,000 atletas)</option>
                    <option value="Solo SIGDEF - Plan Ecosistema">Solo SIGDEF — Plan Ecosistema (Más de 2,000 atletas)</option>
                  </optgroup>
                  <optgroup label="Solo SportTrack (Competencias)">
                    <option value="Solo SportTrack - Plan Esencial">Solo SportTrack — Plan Esencial (Hasta 500 atletas)</option>
                    <option value="Solo SportTrack - Plan Profesional">Solo SportTrack — Plan Profesional (501 a 2,000 atletas)</option>
                    <option value="Solo SportTrack - Plan Ecosistema">Solo SportTrack — Plan Ecosistema (Más de 2,000 atletas)</option>
                  </optgroup>
                </select>
              </div>

              <div className="contacto-form-field">
                <label htmlFor="contact-mensaje">Mensaje</label>
                <textarea
                  id="contact-mensaje"
                  rows={3}
                  placeholder="Contanos cómo podemos ayudarte"
                  className="contact-input-dark"
                />
              </div>

              <button type="submit" className="btn-acc-green contacto-submit">
                Enviar Mensaje <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
