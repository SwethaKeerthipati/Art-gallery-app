import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  toggleFavorite,
}) {
  const handleToggleFavorite = () => {
    if (typeof toggleFavorite === "function") {
      toggleFavorite(slug);
    }
  };
  return (
    <div>
      <Image src={image} alt={title} width={500} height={500} />
      <h2>{title}</h2>
      <p>{artist}</p>
      <Link href={`/art-pieces/${slug}`}>More Details</Link>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
