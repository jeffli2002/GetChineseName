
export default function handler(req, res) {
  res.status(404).json({ error: 'API endpoint not found' });
}
