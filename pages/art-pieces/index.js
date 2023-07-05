import React from "react";
import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function ArtsPiecesPage({ data, toggleFavorite }) {
  const handleCommentSubmit = (slug, comment) => {
    const pieceIndex = data.findIndex((piece) => piece.slug === slug);
    if (pieceIndex !== -1) {
      const updatedData = [...data];
      const piece = updatedData[pieceIndex];
      piece.comments = [...(piece.comments || []), comment];
      updatedData[pieceIndex] = piece;

      console.log(updatedData);
    }
  };
  return (
    <>
      {/* <ArtPieces pieces={data} handleCommentSubmit={handleCommentSubmit} /> */}
      <ArtPieces
        pieces={data}
        toggleFavorite={toggleFavorite}
        handleCommentSubmit={handleCommentSubmit}
      />
    </>
  );
}
