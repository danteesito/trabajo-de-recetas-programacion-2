import React from 'react';
import pizzaImage from '@/home/pizza.jpg'; 

const PizzaReceta = () => {
  return (
    <div>
      <h2>Pizza Casera</h2>
      <img src={pizzaImage} alt="Pizza" />
      <h3>Ingredientes para realizar dos pizzas de ocho porciones cada una:</h3>
      <ul>
        <li>1/2 kilo de harina 000</li>
        <li>25 gramos de pan de levadura fresco</li>
        <li>1/2 cucharada de sal</li>
        <li>4 cucharadas de aceite de oliva</li>
        <li>1 cucharada de azúcar</li>
        <li>1 taza de agua tibia</li>
      </ul>
      <h3>Paso a paso: cómo realizar pizza casera</h3>
      <ol>
        <li>En un bol o taza, colocar la levadura y media taza de agua tibia, agregándole la cucharada de azúcar. Mezclar bien hasta que se formen burbujas, tapar con un nylon y dejar levar más o menos 10 minutos.</li>
        <li>En otro bol, colocar la harina y mezclarla con sal. Hacer un hueco en el centro y luego volcar la media taza de agua con la levadura dentro. Incorporar el resto del agua tibia. Unir, con ambas manos, todos los ingredientes y formar una masa. Agregar, en forma de hilo, el aceite y continuar amasando.</li>
        <li>Dejar descansar la masa para pizza alrededor de 15 minutos y luego volver a amasarla sobre una mesa con harina. Dividir la masa en dos bollos del mismo tamaño.</li>
        <li>Estirar la masa hasta lograr un círculo, poner la masa en una fuente para pizza y dejarla descansar en un lugar templado hasta que leve. Alrededor de 15 minutos.</li>
        <li>Llevar a un horno fuerte durante seis minutos. La importancia de este tiempo es para que la masa esté bien cocida.</li>
        <li>Agregar una cucharada abundante de salsa de tomate, desparramar y llevar al horno dos o tres minutos más. Se le puede agregar mozzarella, jamón cocido, cebolla y hasta algunas rodajas de tomate, según tu preferencia. ¡Receta finalizada y a disfrutar!</li>
      </ol>
    </div>
  );
}

export default PizzaReceta;
