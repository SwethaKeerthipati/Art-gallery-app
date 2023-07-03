import React, { createContext } from "react";
import { useImmer } from "use-immer";

export const ArtPiecesContext = createContext();

export const ArtPiecesProvider = ({ children }) => {
  const [state, setState] = useImmer({
    artPieces: [],
    isLoading: false,
  });

  const setArtPieces = (newArtPieces) => {
    setState((draft) => {
      draft.artPieces = newArtPieces;
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
        isLoading: state.isLoading,
        setArtPieces,
        setLoading,
      }}
    >
      {children}
    </ArtPiecesContext.Provider>
  );
};
