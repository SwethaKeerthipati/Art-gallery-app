import React from "react";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

import styled from "styled-components";

const ArtPieceContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 360px;
  height: 500px;
  position: relative;
  padding: 20px;
  margin: 20px;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ArtPieceImage = styled(Image)`
  object-fit: cover;
`;

const Title = styled.h2`
  margin: 10px 0;
`;
const Artist = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: none;
  color: white;
`;
const FavoriteButtonWrapper = styled.div`
  margin-top: 10px;
  /* display: flex;
  justify-content: space-evenly; */
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  colors,
  onToggleFavorite,
}) {
  const handleToggleFavorite = () => {
    if (typeof onToggleFavorite === "function") {
      onToggleFavorite(slug);
    }
  };
  const backgroundColor =
    colors && colors.length > 0 ? colors[0] : "transparent";
  return (
    <GridContainer>
      {/* <ArtPiecePreviewWrapper> */}
      <ArtPieceContainer backgroundColor={backgroundColor}>
        <ArtPieceImage src={image} alt={title} width={300} height={300} />
        <Title>Title : {title}</Title>
        <Artist>Artist: {artist}</Artist>
        <FlexContainer>
          <StyledLink href={`/art-pieces/${slug}`}>More Details</StyledLink>
          <FavoriteButtonWrapper>
            <FavoriteButton
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
          </FavoriteButtonWrapper>
        </FlexContainer>
      </ArtPieceContainer>
      {/* <CommentForm
        onSubmitComment={(comment) => handleCommentSubmit(comment)}
      /> */}
      {/* </ArtPiecePreviewWrapper> */}
    </GridContainer>
  );
}
