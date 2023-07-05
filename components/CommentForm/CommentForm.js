import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: space-evenly;
`;

const Input = styled.input`
  padding: 5px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  width: 50%;
  height: 50px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

export default function CommentForm({ onSubmitComment }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;
    if (typeof onSubmitComment === "function") {
      onSubmitComment(comment);
    }
    setComment("");
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        type="text"
        value={comment}
        onChange={handleChange}
        placeholder="Add your comments"
      />
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
}
