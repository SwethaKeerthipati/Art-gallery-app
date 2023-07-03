import Image from "next/image";
export default function Spotlight({ artPieces, pickRandomArtPiece }) {
  const randomArtPiece = pickRandomArtPiece(artPieces);

  return (
    <div>
      <h2>Spotlight Piece</h2>
      <Image
        src={randomArtPiece.imageSource}
        alt="Spotlight Piece"
        width={500}
        height={500}
      />
      <p>Artist: {randomArtPiece.artist}</p>
    </div>
  );
}
