import React from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
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
        />
      ))}
    </div>
  );
}
