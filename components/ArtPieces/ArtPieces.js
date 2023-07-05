import React, { useState } from "react";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import CommentForm from "../CommentForm/CommentForm";
import styled from "styled-components";
import Comments from "../Comments/Comments";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export default function ArtPieces({ pieces, handleCommentSubmit }) {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (slug) => {
    const updatedFavorites = { ...favorites };
    updatedFavorites[slug] = !updatedFavorites[slug];
    setFavorites(updatedFavorites);
  };

  // const toggleFavorite = (slug) => {
  //   const updatedPieces = pieces.map((piece) => {
  //     if (piece.slug === slug) {
  //       return {
  //         ...piece,
  //         isFavorite: !piece.isFavorite,
  //       };
  //     }
  //     return piece;
  //   });
  //   setFavorites((prevFavorites) => ({
  //     ...prevFavorites,
  //     [slug]: !prevFavorites[slug],
  //   }));
  //   // Update artPiecesInfo or perform any other necessary actions
  //   // For example:
  //   // updateArtPiecesInfo(updatedPieces);
  // };

  if (!Array.isArray(pieces)) {
    return <div>No art pieces available.</div>;
  }

  return (
    <Container>
      {pieces.map((piece) => (
        <div key={piece.slug} data-testid="art-piece">
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            isFavorite={favorites[piece.slug] || false}
            toggleFavorite={() => toggleFavorite(piece.slug)}
            colors={piece.colors}
          />
          <Comments comments={piece.comments || []} />
          <CommentForm
            onSubmitComment={(comment) =>
              handleCommentSubmit(piece.slug, comment)
            }
          />
        </div>
      ))}
    </Container>
  );
}
