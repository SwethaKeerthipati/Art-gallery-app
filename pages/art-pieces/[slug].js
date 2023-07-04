import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPiecePage({ data: pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  if (!pieces) {
    return <div>Loading</div>;
  }

  const pieceIndex = pieces.findIndex((piece) => piece.slug === slug);
  const piece = pieces[pieceIndex];

  return (
    <div>
      <ArtPieceDetails
        image={piece.imageSource}
        title={piece.title}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
      />
    </div>
  );
}
