import { useState } from "react";
import { useLocation } from "react-router-dom";
import StyledComponent from "styled-components";
const RecipeDetails = () => {
  const [activeTab, setActiveTab] = useState("instructions");
  const location = useLocation();
  console.log(location.state.title);

  return (
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
        {activeTab === "instructions" && (
          <ul>
            {location.state.ingredients &&
              location.state.ingredients.map((ingredients) => (
                <li key={ingredients.id}>{ingredients.text}</li>
              ))}
          </ul>
        )}
      </Info>
    </DetailsWrapper>
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
font-family: 'Poppins', sans-serif;
`;

const Info = StyledComponent.div`
margin-left: 10rem;
`;

const Image = StyledComponent.img`
width:300px;
height: 300px;
`;
export default RecipeDetails;
