import React from "react";
import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function ArtsPiecesPage({ data }) {
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
