import React from 'react';
import OmeletReceta from './home/OmeletReceta';
import BudinReceta from './home/BudinReceta';
import PizzaReceta from './home/PizzaReceta';
import './App.css';
function App() {
  return (
    <div>
      <h1>Mi Aplicación de Recetas Faciles</h1>
      <OmeletReceta />
      <BudinReceta />
      <PizzaReceta />
    </div>
  );
}

export default App;
