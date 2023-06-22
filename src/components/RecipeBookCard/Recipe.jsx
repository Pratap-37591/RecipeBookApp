import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import StyledComponent from "styled-components";
import { useNavigate } from "react-router-dom";

const ViewButton = StyledComponent.button`
border: 2px solid #BF4F74;
   background: #BF4F74;
   color: white;
   border-radius: 4px;
   padding: 0.65em 1em;
   
   font-family: 'Poppins', sans-serif;
   font-size: 12px;
`;

// const SaveButton = StyledComponent.button`
//    border: 2px solid green;
//    background: green;
//    color: white;
//    border-radius: 4px;
//    font-family: 'Poppins', sans-serif;
//    padding: 0.50em 1em;
// `;

const Recipe = ({ id, title, image, ingredients, ingredientLines }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/details/${id}`, {
      state: {
        id: id,
        title: title,
        image: image,
        ingredients: ingredients,
        ingredientLines: ingredientLines,
      },
    });
  };
  return (
    <Card sx={{ maxWidth: 325, margin: "0px auto 20px" }}>
      <CardMedia component="img" height="194" image={image} alt={image.title} />
      <CardHeader
        titleTypographyProps={{ variant: "h6" }}
        sx={{
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
        }}
        title={title}
      />
      {/* <div>Ingredients: {ingredients[0].text}....</div> */}
      {/* {console.log("Ingrede", title, ingredients[0].text)} */}
      {/* {ingredients.map((ingredient, index) => (
        <div>
          {/* {console.log("ingredient", ingredient)} */}
      {/* <span style={{ color: "black" }}>Recipe:{ingredient.text[8]}</span> */}
      {/* </div> */}
      {/* ))} */}

      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <ViewButton onClick={handleView}>View Details</ViewButton>

        {/* <SaveButton>Save Receipe</SaveButton> */}
      </CardActions>
    </Card>
  );
};

export default Recipe;
