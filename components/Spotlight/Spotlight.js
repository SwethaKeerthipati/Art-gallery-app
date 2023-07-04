import React from "react";
import Image from "next/image";

export default function Spotlight({ artPieces, pickRandomArtPiece }) {
  const randomArtPiece = pickRandomArtPiece(artPieces);

  const imageSource = randomArtPiece?.imageSource || "";
  const artist =
    randomArtPiece && randomArtPiece.artist
      ? randomArtPiece.artist
      : "Unknown Artist";

  return (
    <div>
      <h2>Spotlight Piece</h2>
      <Image src={imageSource} alt="Spotlight Piece" width={500} height={500} />
      <p>Artist: {artist}</p>
    </div>
  );
}
