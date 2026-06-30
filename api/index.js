export default function handler (req, res) {
  const url = `https://cataas.com/cat?t=${Math.floor(Math.random() * 9999)}`;
  res.json({ catURL: url });

};
