import React from "react";
import EmojiButton from "./EmojiButton";

function PetCard(props) {
  const snackLis = props.favSnacks.map((snack) => <li key={snack}>{snack}</li>);

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <EmojiButton label="Adopt" />
      <h3>Favorite Snacks</h3>
      <ul>{snackLis}</ul>
    </div>
  );
}

export default PetCard;
