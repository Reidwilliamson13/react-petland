import React from "react";
import EmojiButton from "./EmojiButton";
import Header from "./Header";
import PetCard from "./PetCard";

const pets = [
  {
    id: 1,
    name: "Fezzik",
    image:
      "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/23124207/Old-English-Sheepdog-running-in-the-park.jpg",
    favSnacks: ["Peanut Butter", "Soccer Balls"],
  },
  {
    id: 2,
    name: "Lucy",
    image:
      "https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg",
    favSnacks: ["Cake", "Bacon"],
  },
  {
    id: 3,
    name: "Blaise",
    image:
      "https://www.thesprucepets.com/thmb/P8d4QM0bI4rJh1WygZDI8f8kNV4=/1000x1000/smart/filters:no_upscale()/GettyImages-870255568-8639765b08c6441dbe35ed72e2d8fb48.jpg",
    favSnacks: ["Pigeons", "Grass", "Chicken"],
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
