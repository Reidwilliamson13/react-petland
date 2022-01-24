import React, { useEffect, useState } from "react";
import Header from "./Header";
import PetCard from "./PetCard";
import PetForm from "./PetForm";
import { pets as petsArray } from "./data";
import "./style.css";


function App() {
  const [pets, setPets] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/pets")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);


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

  function addPet(petObj) {
    console.log("in App", petObj);
    setPets([...pets, petObj]);
  }

  return (
    <div>
      <Header user={user} setUser={setUser} />
      {user ? <p>Welcome, {user.username}</p> : <em>Please log in!</em>}
      <PetForm onAddPet={addPet} />
      <main>{petCards}</main>
    </div>
  );
}

export default App;
