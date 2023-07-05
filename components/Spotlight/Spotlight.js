import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { useState } from "react";

export default function Spotlight({
  artPieces,
  pickRandomArtPiece,
  isFavorite,
  toggleFavorite,
}) {
  const { imageSource, artist, slug } = pickRandomArtPiece(artPieces) || {};
  const artistName = artist || "Unknown Artist";
  const [artPiecesInfo, setArtPiecesInfo] = useState(artPieces);

  const handleToggleFavorite = () => {
    if (typeof toggleFavorite === "function") {
      toggleFavorite(slug);
    }
  };
  const handleCommentSubmit = (comment) => {
    setArtPiecesInfo((prevState) => ({
      ...prevState,
      [slug]: {
        ...prevState[slug],
        comments: [...(prevState[slug]?.comments || []), comment],
      },
    }));
  };

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
      <CommentForm onSubmitComment={handleCommentSubmit} />
      <Comments comments={artPiecesInfo[slug]?.comments || []} />
    </div>
  );
}
