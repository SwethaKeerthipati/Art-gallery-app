import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";
import Spotlight from "../components/Spotlight/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art/`,
    fetcher
  );
  const pickRandomArtPiece = (artPieces) => {
    const randomIndex = Math.floor(Math.random() * artPieces.length);
    return artPieces[randomIndex];
  };

  // console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <ArtPieces pieces={data} />
      <Spotlight artPieces={data} pickRandomArtPiece={pickRandomArtPiece} />
    </div>
  );
}
