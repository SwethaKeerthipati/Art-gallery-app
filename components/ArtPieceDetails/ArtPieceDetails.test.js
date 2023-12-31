import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";
import React from "react";

test("displays image, title, artist, year, genre of art piece", () => {
  // const mockUseContext = jest.fn();
  // mockUseContext.mockReturnValue({
  //   artPiecesInfo: {},
  //   setArtPieceInfo: () => {},
  // });
  // React.useContext = mockUseContext;
  render(
    <ArtPieceDetails
      artist="Min An"
      title="Silhouette Photo of Trees"
      image="https://example-apis.vercel.app/assets/art/silhouette-trees.jpg"
      year="2017"
      genre="Nature"
    />
  );
  // const image = screen.getByAltText("Min An: Silhouette Photo of Trees");
  const image = screen.getByAltText("Silhouette Photo of Trees");

  // const artist = screen.getByText("Min An");
  const artist = screen.getByText(/Artist: Min An/i);
  const title = screen.getByRole("heading", {
    level: 2,
    name: "Silhouette Photo of Trees",
  });
  // const year = screen.getByText("2017");
  const year = screen.getByText(/Year: 2017/i);
  const genre = screen.getByText(/Genre: Nature/i);
  // const backButton = screen.getByRole("button", { name: "navigate back" });

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
  // expect(backButton).toBeInTheDocument();
});
