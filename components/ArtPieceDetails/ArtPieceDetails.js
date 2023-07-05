import React from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { ArtPiecesContext } from "../ArtPiecesContext/ArtPiecesContext";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  const router = useRouter();
  const { artPiecesInfo, setArtPieceInfo } = useContext(ArtPiecesContext);
  const { slug } = router.query;
  const toggleFavorite = (slug) => {
    setArtPieceInfo(slug, { favorite: !isFavorite });
  };

  const isFavorite = artPiecesInfo[slug]?.favorite || false;
  return (
    <div>
      <Link href="/art-pieces">⬅️All Paintings</Link>
      <Image src={image} alt={title} width={500} height={500} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={() => toggleFavorite(slug)}
      />
    </div>
  );
}