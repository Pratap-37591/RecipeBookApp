import React from 'react'
const Recipe = ({title,image,ingredients}) => {
  return (
        <div>
       <p>{title}</p>
        <img src={image} alt="" />
        <ol>
        {ingredients.map((ingredient) =>(
          <li>{ingredient.text}</li>
        ))}
        </ol>
        </div>
  )
}

export default Recipe;