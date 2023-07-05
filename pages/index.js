import React from "react";
import Spotlight from "../components/Spotlight/Spotlight";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";
import FavoritesPage from "../pages/favorites/favorites";

export default function SpotlightPage({ data }) {
  const pickRandomArtPiece = (artPieces) => {
    if (!artPieces || artPieces.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * artPieces.length);
    return artPieces[randomIndex];
  };
  const toggleFavorite = (slug) => {
    // console.log("Toggle favorite:", slug);
  };
  return (
    <div>
      {/* <ArtPieces pieces={data} /> */}
      <Spotlight
        artPieces={data}
        pickRandomArtPiece={pickRandomArtPiece}
        // isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
      {/* <FavoritesPage /> */}
    </div>
  );
}
