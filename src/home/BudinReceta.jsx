import React from 'react';
import budinImage from '@/home/budin.jpg';

const BudinReceta = () => {
  return (
    <div>
      <h2>Budín de Vainilla</h2>
      <img src={budinImage} alt="Budín" />
      <h3>Ingredientes:</h3>
      <ul>
        <li>2 tazas de harina leudante</li>
        <li>2 huevos</li>
        <li>¾ taza de azúcar</li>
        <li>½ taza de aceite</li>
        <li>2 chorritos de leche</li>
        <li>Esencia de vainilla (cantidad necesaria)</li>
      </ul>
      <h3>Cómo hacer budín de vainilla:</h3>
      <p>IMPORTANTE: Precalentar el horno a 180°C</p>
      <ol>
        <li>En un bol grande, batir los huevos con el azúcar y la vainilla hasta homogeneizar y lograr que estén espumosos y cremosos.</li>
        <li>Agregar las tazas de harina y remover hasta unir completamente. Esta parte y a partir de aquí se hace con espátula o cuchara, no con batidora.</li>
        <li>Agregar la taza de aceite y hacer lo mismo: remover hasta unir.</li>
        <li>Llevar a horno moderado a 180°C por más o menos 40 o 45 minutos (siempre depende mucho de cada horno). Chequear su cocción con un palito de madera; al pinchar el budín de vainilla, el palito debe salir seco.</li>
        <li>Listo, si lo quieres glasear para hacer un budín más elegante, lo haces. Si no, no hace falta. Es buenísimo así solo. ¡Ya tienes la merienda de hoy resuelta!</li>
      </ol>
    </div>
  );
}

export default BudinReceta;
