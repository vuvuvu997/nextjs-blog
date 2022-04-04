export default function handler(req, res, next) {
  res.setPreviewData({});
  res.redirect(req.query.redirect);
}
