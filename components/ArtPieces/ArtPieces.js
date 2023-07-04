import React, { useState } from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (slug) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [slug]: !prevFavorites[slug],
    }));
  };

  if (!Array.isArray(pieces)) {
    return <div>No art pieces available.</div>;
  }

  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          image={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
          slug={piece.slug}
          isFavorite={favorites[piece.slug] || false}
          toggleFavorite={() => toggleFavorite(piece.slug)}
        />
      ))}
    </div>
  );
}
