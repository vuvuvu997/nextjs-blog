import { comments } from "../../../data";
export default function handler(req, res) {
  const { commentId } = req.query;
  if (req.method === "DELETE") {
    const comment = comments.find((item) => item.id + "" === commentId);
    const index = comments.findIndex((com) => com.id + "" === commentId);
    comments.splice(index, 1);
    res.status(200).json({ comment });
  } else if (req.method === "POST") {
  } else {
  }
}
