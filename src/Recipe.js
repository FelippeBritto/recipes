import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, time }) => {
   var cal = calories.toFixed(2);

   return (
      <div className={style.recipe}>
         <h1>{title}</h1>

         <ol>
            {ingredients.map(ingredients => (
               <li>- {ingredients.text}</li>
            ))}
         </ol>
         <p><strong>Kcal: </strong>{cal}</p>
         <p>{time}</p>
         <img src={image} className={style.image} alt={title} />
      </div>
   );
};

export default Recipe;  