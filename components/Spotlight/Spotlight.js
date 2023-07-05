import React, { useContext } from "react";
import Image from "next/image";
import { ArtPiecesContext } from "../ArtPiecesContext/ArtPiecesContext";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({ artPieces, pickRandomArtPiece }) {
  const { artPiecesInfo, setArtPieceInfo } = useContext(ArtPiecesContext);
  const randomArtPiece = pickRandomArtPiece(artPieces);

  const imageSource = randomArtPiece?.imageSource || "";
  const artist =
    randomArtPiece && randomArtPiece.artist
      ? randomArtPiece.artist
      : "Unknown Artist";

  const toggleFavorite = (slug) => {
    setArtPieceInfo(slug, { favorite: !isFavorite });
  };
  const isFavorite = artPiecesInfo[randomArtPiece.slug]?.favorite || false;

  return (
    <div>
      <h2>Spotlight Piece</h2>
      <Image src={imageSource} alt="Spotlight Piece" width={500} height={500} />
      <p>Artist: {artist}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => toggleFavorite(randomArtPiece.slug)}
      />
    </div>
  );
}
