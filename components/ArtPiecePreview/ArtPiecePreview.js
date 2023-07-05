import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArtPiecesContext } from "../ArtPiecesContext/ArtPiecesContext";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  const { artPiecesInfo, setArtPieceInfo } = useContext(ArtPiecesContext);
  const toggleFavorite = (slug) => {
    setArtPieceInfo(slug, { favorite: !isFavorite });
  };
  const isFavorite = artPiecesInfo[slug]?.favorite || false;

  return (
    <div>
      <Image src={image} alt={title} width={500} height={500} />
      <h2>{title}</h2>
      <p>{artist}</p>
      <Link href={`/art-pieces/${slug}`}>More Details</Link>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => toggleFavorite(slug)}
      />
    </div>
  );
}
