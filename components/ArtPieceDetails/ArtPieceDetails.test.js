import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "../components/ArtPieceDetails/ArtPieceDetails.js";

test("displays image, title, artist, year, genre, back link and colors of art piece", () => {
  render(
    <ArtPieceDetails
      artist="Min An"
      title="Silhouette Photo of Trees"
      image="https://example-apis.vercel.app/assets/art/silhouette-trees.jpg"
      year="2017"
      genre="Nature"
    />
  );
  const image = screen.getByAltText("Min An: Silhouette Photo of Trees");
  const artist = screen.getByText("Min An");
  const title = screen.getByRole("heading", {
    level: 2,
    name: "Silhouette Photo of Trees",
  });
  const year = screen.getByText("2017");
  const genre = screen.getByText("Nature");
  const backButton = screen.getByRole("button", { name: "navigate back" });

  expect(image).toHaveAttribute(
    "src",
    expect.stringContaining(
      encodeURIComponent(
        "https://example-apis.vercel.app/assets/art/silhouette-trees.jpg"
      )
    )
  );
  expect(title).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
  expect(year).toBeInTheDocument();
  expect(genre).toBeInTheDocument();
  expect(backButton).toBeInTheDocument();
});
