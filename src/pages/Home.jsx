import React from "react";
import useGetPets from "../hooks/index.js";
import PetItem from "../components/PetItem";
import {Link} from 'react-router-dom';

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
            <Link to={{
              pathname: `/mascotas/${index}-${pet.name}`,
              state: { ...pet}
            }}>
            <PetItem pet={pet} key={`pet-${index}`} />
            </Link>
         
        ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
