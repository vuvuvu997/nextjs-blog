export default function handler(req, res, next) {
  const { params } = req.query;
  // console.log(params);
  res.json({ message: "Home api" });
}
