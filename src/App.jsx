import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RecipeDetails from "./components/RecipeBookCard/RecipeDetails";
import SaveRecipe from "./components/ProfileSection/SaveRecipe";
import Profile from "./components/ProfileSection/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:id" element={<RecipeDetails />} />
        <Route path="/saverecipe" element={<SaveRecipe />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
