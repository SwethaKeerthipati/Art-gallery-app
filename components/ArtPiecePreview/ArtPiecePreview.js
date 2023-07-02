import React from "react";
import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <div>
      <Image src={image} alt={title} width={500} height={500} />
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
