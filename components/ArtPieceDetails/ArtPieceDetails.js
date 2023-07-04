import React from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  const router = useRouter();
  return (
    <div>
      <Link href="/art-pieces">⬅️All Paintings</Link>
      <Image src={image} alt={title} width={500} height={500} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}
