import { useEffect, useState } from "react";
import Image from "./Image";
import axios from "axios";

const App = () => {
  const [error, setError] = useState<string>("");
  const [catImage, setCatImage] = useState<string>("https://cataas.com/cat");

  useEffect(() => {
    setError("");
  }, [catImage]);

  async function getImage() {
    let random = Math.floor(Math.random() * 999);
    let num = random;

    try {
      // add random number at the end of url to make it unique and updates state each time button is clicked
      const url = `https://cataas.com/cat?t=${num}`;
      await axios.get(url);
      setCatImage(url);
    } catch (error) {
      console.error(error);
      setError("Error fetching cat image please refresh or try again later.");
    }
  }

  return (
    <div>
      <header>
        <h1>Wholesome Cats</h1>        
      </header>
      <main>
        {error && <p className="error-text">{error}</p>}
        {!error && <Image getImage={getImage} catImage={catImage} />}        
      </main>

    </div>
  );
};

export default App;
