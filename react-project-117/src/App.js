import React, { useState } from "react";
import Header from "./Header";
import PetCard from "./PetCard";
import { pets as petsArray } from "./data";

/*

Component Hierarchy

  App
  ├───Header
  └───PetCard
  
*/

function App() {
  const [pets, setPets] = useState(petsArray)
  
  const petCards = pets.map((petObj) => {
    return (
      <PetCard
        key={petObj.id}
        name={petObj.name}
        image={petObj.image}
        favSnacks={petObj.favSnacks}
        isAdopted={petObj.isAdopted}
      />
    );
  });

  return (
    <div>
      <Header />
      <main>{petCards}</main>
    </div>
  );
}

export default App;