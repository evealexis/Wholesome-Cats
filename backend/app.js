import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const num = Math.floor(Math.random() * 999);
  const url = `http://cataas.com/cat?t=${num}`;
  res.json({ catURL: url });

});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});