import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment}
        onChange={handleChange}
        placeholder="Add a comment"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
