import React from "react";
import useGetPets from "../hooks/index.js";
import PetItem from "../components/PetItem";

const API = "https://us-central1-patitas-ea95e.cloudfunctions.net/api";

const Home = () => {
  const pets = useGetPets(API);
  console.log(pets);

  return pets.length === 0 ? (
    <h1>cargando...</h1>
  ) : (
    <div className="Home">
      <div className="Home-container">
        <div className="Home-items">
          {pets.map( (pet, index) => (
            <PetItem pet={pet} key={`pet-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
