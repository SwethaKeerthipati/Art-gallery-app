import { render, screen, cleanup } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

test("should render artpiece component", () => {
  render(<ArtPieces />);
  const artpieces = screen.getAllByAltText("list");
  expect(artpieces).toBeInTheDocument();
  // expect(artpieces).toHaveTextContent();
});
