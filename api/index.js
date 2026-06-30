import express from 'express';

const app = express();


app.get("/", async (req, res) => {
  const url = `http://cataas.com/cat?t=${Math.floor(Math.random() * 9999)}`;
  res.json({ catURL: url });

});

export default app;