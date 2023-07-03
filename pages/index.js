import ArtPieces from "../components/ArtPieces/ArtPieces";
import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage() {
  const pickRandomArtPiece = (artPieces) => {
    const randomIndex = Math.floor(Math.random() * artPieces.length);
    return artPieces[randomIndex];
  };

  return (
    <div>
      {/* <ArtPieces pieces={data} /> */}
      <Spotlight artPieces={data} pickRandomArtPiece={pickRandomArtPiece} />
    </div>
  );
}
