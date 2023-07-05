import React from "react";
import styled from "styled-components";
const CommentsContainer = styled.div`
  position: relative;
  margin-left: 40px;
  /* padding: 20px;
  margin: 10px; */
  /* display: flex;
  flex-direction: column; */
  /* align-items: center;
  text-align: center; */
`;

export default function Comments({ comments }) {
  console.log("comments:", comments);
  return (
    <CommentsContainer>
      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      )}
    </CommentsContainer>
  );
}
