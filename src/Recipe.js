import React from "react";
import "./Recipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <img src={image} alt={title} />
      <div className="detail">
        <h1>{title}</h1>
        <p>{calories} cal.</p>
        <p id="ingd-title">Ingredients:</p>
        <hr />
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
