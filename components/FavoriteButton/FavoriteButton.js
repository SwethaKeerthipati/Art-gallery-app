import React from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button onClick={onToggleFavorite}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}
