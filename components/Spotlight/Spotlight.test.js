import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

test("renders the art piece image and artist", () => {
  const artPieces = [
    {
      artist: "Steve Johnson",
      imageSource:
        "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    },
  ];

  const pickRandomArtPiece = (artPieces) => {
    const randomIndex = Math.floor(Math.random() * artPieces.length);
    return artPieces[randomIndex];
  };

  render(
    <Spotlight artPieces={artPieces} pickRandomArtPiece={pickRandomArtPiece} />
  );

  const imageElement = screen.getByAltText("Spotlight Piece");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement.tagName).toBe("imageSource");
  expect(imageElement).toHaveAttribute("imageSource", artPieces[0].imageSource);

  const artistElement = screen.getByText(artPieces[0].artist);
  expect(artistElement).toBeInTheDocument();
});
