import React from "react";
import Image from "next/image";

import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({
  artPieces,
  pickRandomArtPiece,
  isFavorite,
  toggleFavorite,
}) {
  // console.log(artPieces);
  const { imageSource, artist, slug } = pickRandomArtPiece(artPieces) || {};
  // console.log(pickRandomArtPiece);
  const artistName = artist || "Unknown Artist";
  // console.log(imageSource);

  const handleToggleFavorite = () => {
    toggleFavorite(slug);
  };
  // console.log(toggleFavorite);

  return (
    <div>
      <h2>Spotlight Piece</h2>
      {imageSource && (
        <Image
          src={imageSource}
          alt="Spotlight Piece"
          width={500}
          height={500}
        />
      )}
      <p>Artist: {artistName}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
