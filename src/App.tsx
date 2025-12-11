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
    try {
      const response = await axios.get("http://localhost:5000/");
      const result = response.data;
      setCatImage(result.catURL);
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
