import React, { useState, useEffect } from "react";
// import "./App.css";
import axios from "axios";
import Recipe from "./components/Recipe";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
function App() {
  const APP_ID = "80a1c867";
  const APP_KEY = "efac35bc94d4646f76094d6ca9b8cc04";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getRecipe = async () => {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
      console.log(response.data.hits);
    };

    getRecipe();
  }, [query]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar position="static">
          <Typography variant="h6" component="div">
            RecipeBOOKApp
          </Typography>
          <Paper
            style={{
              margin: "0px auto",
            }}
            onSubmit={updateQuery}
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              value={search}
              onChange={handleSearch}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>

            <IconButton
              color="primary"
              sx={{ p: "5px" }}
              aria-label="directions"
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>P</Avatar>
            </IconButton>
          </Paper>
        </AppBar>
      </Box>
      {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
