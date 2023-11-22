import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StyledComponent from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeDetails = () => {
  const [activeTab, setActiveTab] = useState("instructions");
  const location = useLocation();
  console.log(location.state.title);
  // const navigate = useNavigate();

  const backnavigate = useNavigate();

  const handleBack = () => {
    backnavigate("/");
  };

  const handleSave = () => {
    toast.success("Recipe Saved successfully", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
 
  };
  return (
    <>
      <DetailsWrapper>
        <div>
          <h2>{location.state.title}</h2>
          <Image src={location.state.image} alt={location.state.title} />
        </div>
        <Info>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
          {activeTab === "ingredients" && (
            <ul>
              {location.state.ingredientLines &&
                location.state.ingredientLines.map((ingredientsLine) => (
                  <li key={ingredientsLine.id}>{ingredientsLine}</li>
                ))}
            </ul>
          )}
          {activeTab === "instructions" && (
            <ul>
              {location.state.ingredients &&
                location.state.ingredients.map((ingredients) => (
                  <>
                    <li key={ingredients.id}>{ingredients.text}</li>
                  </>
                ))}
            </ul>
          )}
        </Info>
      </DetailsWrapper>
      <SaveContainer>
        <SaveButton onClick={handleSave} >Save Receipe</SaveButton>
      </SaveContainer>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <BackButton onClick={handleBack}>&larr; Go Back </BackButton>
    </>
  );
};

const DetailsWrapper = StyledComponent.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;
justify-content: center;

.active{
  background: linear-gradient(35deg, #494949, #313131);
  color: white;
}
h2{
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
}
li{
  font-size: 1.2rem;
  line-height: 2.5rem;
}
ul{
  margin-bottom: 2rem;
}
`;

const Button = StyledComponent.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
cursor: pointer;
font-family: 'Poppins', sans-serif;
`;

const Info = StyledComponent.div`
margin-left: 10rem;
`;

const Image = StyledComponent.img`
width:300px;
height: 300px;
`;

const SaveContainer = StyledComponent.div`
display:flex;
justify-content: center;
align-items: center;
`;

const SaveButton = StyledComponent.button`
   border: 2px solid green;
   background: green;
   cursor: pointer;
   color: white;
   border-radius: 4px;
   font-family: 'Poppins', sans-serif;
   padding: 0.75em 1em;
`;

const BackButton = StyledComponent.button`
position: absolute;
top: 8rem;
left:7rem;
font-weight: 800;
cursor: pointer;
border: 2px solid #E91E63;
background: #E91E63;
color: white;
border-radius: 4px;
font-family: 'Poppins', sans-serif;
padding: 0.75em 1em;
`;


export default RecipeDetails;
