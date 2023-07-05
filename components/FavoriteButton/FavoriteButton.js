import React from "react";

// export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
//   const handleToggle = () => {
//     if (typeof onToggleFavorite === "function") {
//       onToggleFavorite(!isFavorite);
//     }
//   };

//   return (
//     <button onClick={handleToggle}>
//       {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
//     </button>
//   );
// }

import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavoriteButton = ({ isFavorite, onToggleFavorite }) => {
  const handleToggle = () => {
    if (typeof onToggleFavorite === "function") {
      onToggleFavorite(); // Invoke the onToggleFavorite function from props
    }
  };

  return (
    <button onClick={handleToggle}>
      {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
    </button>
  );
};

export default FavoriteButton;
