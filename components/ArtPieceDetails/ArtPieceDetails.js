import React from "react";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const ArtPieceContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  colors,
  isFavorite,
  onToggleFavorite,
}) {
  // const backgroundColor = colors[0];
  // const backgroundColor = colors?.[0] || "#fff";
  const backgroundColor =
    colors && colors.length > 0 ? colors[0] : "transparent";

  return (
    <div>
      <ArtPieceContainer backgroundColor={backgroundColor}>
        <Link href="/art-pieces">⬅️All Paintings</Link>
        <Image src={image} alt={title} width={500} height={500} />
        <h2>{title}</h2>
        <p>Artist: {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </ArtPieceContainer>
    </div>
  );
}
