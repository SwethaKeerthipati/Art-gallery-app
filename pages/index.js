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
  const randomArtPiece = pickRandomArtPiece(data);
  const colors = randomArtPiece?.colors || [];

  return (
    <div>
      {/* <ArtPieces pieces={data} /> */}
      <Spotlight
        artPieces={data}
        pickRandomArtPiece={pickRandomArtPiece}
        colors={colors}
        // isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
      {/* <FavoritesPage /> */}
    </div>
  );
}
