import React, { createContext } from "react";
import { useImmer } from "use-immer";

export const ArtPiecesContext = createContext();

export const ArtPiecesProvider = ({ children }) => {
  const [state, setState] = useImmer({
    artPieces: [],
    artPiecesInfo: {}, // New state for additional information about art pieces
    isLoading: false,
  });

  const setArtPieces = (newArtPieces) => {
    setState((draft) => {
      draft.artPieces = newArtPieces;
    });
  };

  const setArtPieceInfo = (slug, info) => {
    setState((draft) => {
      draft.artPiecesInfo[slug] = info;
    });
  };

  const setLoading = (isLoading) => {
    setState((draft) => {
      draft.isLoading = isLoading;
    });
  };

  return (
    <ArtPiecesContext.Provider
      value={{
        artPieces: state.artPieces,
        artPiecesInfo: state.artPiecesInfo,
        isLoading: state.isLoading,
        setArtPieces,
        setArtPieceInfo,
        setLoading,
      }}
    >
      {children}
    </ArtPiecesContext.Provider>
  );
};
