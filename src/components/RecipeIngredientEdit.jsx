import React from 'react';

export default function RecipeIngredientEdit(props) {
  const { ingredient, handleIngredientChange } = props;

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        onInput={(event) => handleChange({ name: event.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onInput={(event) => handleChange({ amount: event.target.value })}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  );
}
