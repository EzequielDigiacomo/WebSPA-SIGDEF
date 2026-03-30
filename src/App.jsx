import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Servicios } from './components/sections/Servicios';
import { AppMovil } from './components/sections/AppMovil';
import { Arquitectura } from './components/sections/Arquitectura';
import { Contacto } from './components/sections/Contacto';

import './App.css';

function App() {
  const [nivelInteres, setNivelInteres] = useState('');

  const selectNivel = (nivel) => {
    setNivelInteres(nivel);
    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="animate-fade-in">
      {/* ── NAVBAR ── */}
      <Navbar />

      {/* ── HERO ── */}
      <Hero />

      {/* ── NIVELES DE SERVICIO ── */}
      <Servicios selectNivel={selectNivel} />

      {/* ── APP MÓVIL / MULTIPLATAFORMA ── */}
      <AppMovil />

      {/* ── ARQUITECTURA ESCALABLE ── */}
      <Arquitectura />

      {/* ── CONTACTO ── */}
      <Contacto nivelInteres={nivelInteres} setNivelInteres={setNivelInteres} />

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}

export default App;
