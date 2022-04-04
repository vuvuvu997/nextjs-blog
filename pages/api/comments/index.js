import { comments } from "../../../data";
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ comments });
  } else if (req.method === "POST") {
    const comment = {
      text: req.body.comment,
      id: Date.now(),
    };
    comments.push(comment);
    res.status(201).json({ comment });
  } else {
  }
}
