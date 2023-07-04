import React from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  const handleToggle = () => {
    if (typeof onToggleFavorite === "function") {
      onToggleFavorite();
    }
  };

  return (
    <button onClick={handleToggle}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}
