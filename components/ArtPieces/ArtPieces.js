import React, { useState } from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import CommentForm from "../CommentForm/CommentForm";

export default function ArtPieces({ pieces, handleCommentSubmit }) {
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
        <div key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            isFavorite={favorites[piece.slug] || false}
            toggleFavorite={() => toggleFavorite(piece.slug)}
            colors={piece.colors}
          />
          <CommentForm
            onSubmitComment={(comment) =>
              handleCommentSubmit(piece.slug, comment)
            }
          />
        </div>
      ))}
    </div>
  );
}
