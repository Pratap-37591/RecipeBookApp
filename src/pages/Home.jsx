import React, { useState, useEffect } from "react";
import axios from "axios";
import Recipe from "../components/RecipeBookCard/Recipe";
import Navbar from "../components/navbar/Navbar";
import { Grid } from "@mui/material";

const Home = () => {
  const APP_ID = "80a1c867";
  const APP_KEY = "efac35bc94d4646f76094d6ca9b8cc04";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const getRandomSearchQuery = () => {
    const searchQueries = [
      "banana",
      "milk",
      "vada",
      "icecream",
      "dessert",
      "dose",
      "pizza",
    ];
    const randomIndex = Math.floor(Math.random() * searchQueries.length);
    return searchQueries[randomIndex];
  };

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const query = search || getRandomSearchQuery();
        const response = await axios.get(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        setRecipes(response.data.hits);
        console.log(response.data.hits);
      } catch (error) {
        console.error(error);
      }
    };

    getRecipe();
  }, [query]);

  if (!recipes) {
    return <div>Is loading</div>;
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div>
      <Navbar
        handleSearch={handleSearch}
        updateQuery={updateQuery}
        search={search}
      />
      <div style={{ margin: "30px", paddingTop: "4rem" }}>
        <Grid container>
          {recipes.map((recipe, index) => {
            const recipeId = recipe.recipe.uri.split("_").pop();
            return (
              <Grid item xs={3}>
                <Recipe
                  key={index}
                  id={recipeId}
                  title={recipe.recipe.label}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  ingredientLines={recipe.recipe.ingredientLines}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
