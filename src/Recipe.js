import React from "react";
import "./Recipe.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>{calories} cal.</p>
      <img src={image} alt={title} />
      <ul>
        {" "}
        <span id="ingd-title">Ingredients:</span>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;