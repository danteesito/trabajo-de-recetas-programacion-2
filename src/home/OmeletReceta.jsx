import React from 'react';
import omeletImage from '@/home/omelet.jpg';

const OmeletReceta = () => {
  return (
    <div>
      <h2>Omelet Clásico </h2>
      <img src={omeletImage} alt="Omelet" />
      <h3>Ingredientes:</h3>
      <ul>
        <li>3 huevos</li>
        <li>2 cucharadas de leche</li>
        <li>Sal y pimienta al gusto</li>
        <li>1 cucharada de mantequilla</li>
        <li>Relleno opcional:</li>
        <ul>
          <li>Queso rallado (cheddar, mozzarella, etc.)</li>
          <li>Jamón, bacon o salchichas cocidas</li>
          <li>Champiñones en rodajas</li>
          <li>Tomates cherry cortados por la mitad</li>
          <li>Espinacas frescas</li>
        </ul>
      </ul>
      <h3>Pasos:</h3>
      <ol>
        <li>Preparación de Ingredientes:</li>
        <ul>
          <li>Rompe los huevos en un tazón.</li>
          <li>Añade la leche, la sal y la pimienta. Bate los ingredientes hasta que estén bien mezclados.</li>
        </ul>
        <li>Calentar la Sartén:</li>
        <ul>
          <li>Coloca una sartén antiadherente a fuego medio y añade la mantequilla. Deja que se derrita y cubra el fondo de la sartén.</li>
        </ul>
        <li>Verter la Mezcla de Huevos:</li>
        <ul>
          <li>Vierte la mezcla de huevos en la sartén caliente. Asegúrate de que se distribuya de manera uniforme.</li>
        </ul>
        <li>Cocinar la Base del Omelet:</li>
        <ul>
          <li>Deja que los huevos se cocinen ligeramente en los bordes. Con una espátula, levanta los bordes para permitir que la mezcla líquida fluya hacia los lados.</li>
        </ul>
        <li>Añadir el Relleno:</li>
        <ul>
          <li>Cuando la base del omelet esté casi lista pero aún un poco líquida en la parte superior, agrega el queso y los ingredientes de relleno de tu elección en un lado de los huevos.</li>
        </ul>
        <li>Doblar y Servir:</li>
        <ul>
          <li>Con cuidado, dobla la otra mitad del omelet sobre el relleno.</li>
        </ul>
      </ol>
    </div>
  );
}

export default OmeletReceta;
