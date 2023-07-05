import React from "react";
import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";
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
test("renders the art piece image and artist", () => {
  render(
    <Spotlight artPieces={artPieces} pickRandomArtPiece={pickRandomArtPiece} />
  );

  const imageElement = screen.getByAltText("Spotlight Piece");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement.tagName).toBe("IMG");
  // expect(imageElement).toHaveAttribute("imageSource", artPieces[0].imageSource);

  // const artistElement = screen.getByText(artPieces[0].artist);
  const artistElement = screen.getByText((content, element) => {
    return (
      element.tagName.toLowerCase() === "p" &&
      content.includes(artPieces[0].artist)
    );
  });
  expect(artistElement).toBeInTheDocument();
});
