import React from "react";

// Destructuring!

// <EmojiButton emoji label

// function EmojiButton(props) {
//   return (
//     <button>
//       <span role="img">{props.emoji}</span>
//       {props.label}
//     </button>
//   )
// }

function EmojiButton({ emoji = "🐕", label }) {
  console.log(emoji);
  return (
    <button>
      <span role="img">{emoji}</span>
      {label}
    </button>
  );
}

export default EmojiButton;
