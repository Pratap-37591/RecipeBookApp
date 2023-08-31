import React from "react";
import { useLocation } from "react-router-dom";

const SaveRecipe = () => {
  const saveLocation = useLocation();

  return <div style={{marginTop: '200px'}}>
        SaveRecipe
    </div>;
};

export default SaveRecipe;
