export default function handler(req, res, next) {
  res.clearPreviewData();
  res.end("Clear preview data");
}
