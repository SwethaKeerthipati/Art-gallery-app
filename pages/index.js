import React from "react";
import Spotlight from "../components/Spotlight/Spotlight";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";
import FavoritesPage from "../pages/favorites/favorites";

export default function SpotlightPage({
  data,
  artPiecesInfo,
  updateArtPiecesInfo,
}) {
  const pickRandomArtPiece = (artPieces) => {
    if (!artPieces || artPieces.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * artPieces.length);
    return artPieces[randomIndex];
  };

  const toggleFavorite = (slug) => {
    const updatedArtPiecesInfo = artPiecesInfo.map((piece) => {
      if (piece.slug === slug) {
        return {
          ...piece,
          isFavorite: !piece.isFavorite,
        };
      }
      return piece;
    });
    updateArtPiecesInfo(updatedArtPiecesInfo);
  };

  // const toggleFavorite = (slug) => {
  //   const updatedData = data.map((piece) => {
  //     if (piece.slug === slug) {
  //       const isFavorite = !piece.isFavorite;
  //       localStorage.setItem(slug, JSON.stringify(isFavorite));
  //       return {
  //         ...piece,
  //         isFavorite,
  //       };
  //     }
  //     return piece;
  //   });
  //   // setData(updatedData);
  //   updateArtPiecesInfo(updatedArtPiecesInfo);
  // };

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
