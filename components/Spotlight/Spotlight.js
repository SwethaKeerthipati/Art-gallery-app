import React from "react";
import Image from "next/image";
// import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { useState } from "react";
// import Link from "next/link";

import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

const SpotlightContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  position: relative;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
`;

const SpotlightImageWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`;
const SpotlightImage = styled(Image)`
  border-radius: 10px;
`;

const ArtistName = styled.p`
  margin: 10px 0;
  font-weight: bold;
`;

export default function Spotlight({
  artPieces,
  pickRandomArtPiece,
  isFavorite,
  toggleFavorite,
  colors,
}) {
  const { imageSource, artist, slug } = pickRandomArtPiece(artPieces) || {};
  const artistName = artist || "Unknown Artist";
  const [artPiecesInfo, setArtPiecesInfo] = useState(artPieces);

  const handleToggleFavorite = () => {
    if (typeof toggleFavorite === "function") {
      toggleFavorite(slug);
    }
  };
  const handleCommentSubmit = (comment) => {
    setArtPiecesInfo((prevState) => ({
      ...prevState,
      [slug]: {
        ...prevState[slug],
        comments: [...(prevState[slug]?.comments || []), comment],
      },
    }));
  };
  // const backgroundColor =
  //   colors && colors.length > 0 ? colors[0] : "transparent";
  // console.log("colors is:", colors);

  const backgroundColor =
    colors && colors.length > 0 ? colors[0] : "transparent";

  return (
    <GridContainer>
      <SpotlightContainer backgroundColor={backgroundColor}>
        <h2>Spotlight Piece</h2>
        {imageSource && (
          <SpotlightImageWrapper>
            <SpotlightImage
              src={imageSource}
              alt="Spotlight Piece"
              width={500}
              height={500}
            />
          </SpotlightImageWrapper>
        )}

        <ArtistName>Artist: {artistName}</ArtistName>
        {/* <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        /> */}
        <CommentForm onSubmitComment={handleCommentSubmit} />
        <Comments comments={artPiecesInfo[slug]?.comments || []} />
      </SpotlightContainer>
    </GridContainer>
  );
}
