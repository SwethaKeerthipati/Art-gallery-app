import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <div>
      <Image src={image} alt={title} width={500} height={500} />
      <h2>{title}</h2>
      <p>{artist}</p>
      <Link href={`/art-pieces/${slug}`}>More Details</Link>
    </div>
  );
}
