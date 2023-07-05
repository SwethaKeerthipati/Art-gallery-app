import React from "react";
import ArtPieces from "../../components/ArtPieces/ArtPieces";

// export default function FavoritesPage({
//   pieces,
//   artPiecesInfo,
//   onArtPiecesInfo,
//   onToggleFavorite,
// }) {
// const favorites = pieces.filter((piece) =>
//   artPiecesInfo.find(
//     (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
//   )
// );
// const favorites = pieces.filter(
//   (piece) => artPiecesInfo?.[piece.slug]?.isFavorite
// );
//   export default function FavoritesPage({ artPieces, toggleFavorite }) {
//     const favorites = artPieces.filter((piece) => piece.isFavorite);

//     return (
//       <div>
//         <ArtPieces
//           pieces={favorites}
//           toggleFavorite={toggleFavorite}
//         />
//       </div>
//     );
//   }

//   const favorites = artPieces.filter((piece) => piece.isFavorite);

//   return (
//     <ArtPieces
//       pieces={favorites}
//       onArtPiecesInfo={onArtPiecesInfo}
//       artPiecesInfo={artPiecesInfo}
//       onToggleFavorite={onToggleFavorite}
//     />
//   );
// }

export default function FavoritesPage({ artPieces, toggleFavorite }) {
  const favorites = artPieces.filter((piece) => piece.isFavorite);

  return (
    <div>
      <ArtPieces pieces={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}
