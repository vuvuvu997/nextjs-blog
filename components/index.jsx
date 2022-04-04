import { useState } from "react";

export default function ListComment() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleGetComments = async () => {
    const response = await fetch("../api/comments");
    const data = await response.json();
    setComments(data.comments);
  };

  const handleAddComment = async () => {
    const response = await fetch("../api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    handleGetComments();
  };

  const handleDeleteComment = async (id) => {
    await fetch(`../api/comments/${id}`, { method: "DELETE" });
    handleGetComments();
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Add comment</button>
      </div>
      <button onClick={handleGetComments}>Get list comments</button>
      <div>
        {comments.map((com) => (
          <div key={com.id}>
            {com.text}{" "}
            <button onClick={() => handleDeleteComment(com.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
