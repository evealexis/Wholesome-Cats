import { useState } from "react";

function App() {
  const [catImage, setCatImage] = useState<string>("https://cataas.com/cat");
  const [error, setError] = useState<string>("");

  async function getImage() {
    let random = Math.floor(Math.random() * 999);
    let num = random;

    setError("");

    try {
      // add random number at the end of url to make it unique and updates state each time button is clicked
      const url = `https://cataas.com/cat?t=${num}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Unable to fetch image");
      }
      setCatImage(url);
    } catch (err: any) {
      setError(`Error fetching cat image: ${err.message}`);
    }
  }

  return (
    <div>
      <h1>Wholesome Cats</h1>
      <button onClick={getImage}>Get Cat</button>
      {error && <p className="error-text">{error}</p>}
      <div>
        <img className="resize" src={catImage} />
      </div>
    </div>
  );
}

export default App;
