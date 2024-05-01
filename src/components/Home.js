import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido a la Página de Inicio</h1>
      <p>Explora nuestro sitio y aprende más sobre nosotros.</p>
      <Link to="/login" className="link-button">Iniciar Sesión</Link>
    </div>
  );
}

export default Home;