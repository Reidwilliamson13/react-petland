import React from "react";
import EmojiButton from "./EmojiButton";
import Header from "./Header";
import PetCard from "./PetCard";

const pets = [
  {
    id: 1,
    name: "Fezzik",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-small-dog-breeds-1610571819.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
    favSnacks: ["Peanut Butter", "Sweet Potato Treats"],
    isAdopted: false,
  },
  {
    id: 2,
    name: "Lucy",
    image:
      "https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg",
    favSnacks: ["DoggieRice", "Bacon"],
    isAdopted: true,
  },
  {
    id: 3,
    name: "Blaise",
    favSnacks: ["Cheetos", "Grass", "Beef"],
    isAdopted: true,
  },
];

function App() {
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
      <Header isLoggedIn={true} />
      <main>{petCards}</main>
    </div>
  );
}

export default App;
