import express from 'express';

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const num = Math.floor(Math.random() * 999);
  const url = `http://cataas.com/cat?t=${num}`;
  res.json({ catURL: url });

});

