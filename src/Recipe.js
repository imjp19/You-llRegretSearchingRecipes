import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt="" />
      <h2>{title}</h2>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        <b>Calories</b>
        <br />
        {calories.toFixed(2)}
      </p>
    </div>
  );
};

export default Recipe;
