import { useState } from "react";

function App() {
  const [catImage, setCatImage] = useState<string>("https://cataas.com/cat");

  function getImage() {
    let random = Math.floor(Math.random() * 999);
    let num = random;
    // add random number at the end of url to make it unique and updates state each time button is clicked
    setCatImage(`https://cataas.com/cat?t=${num}`);
  }

  return (
    <div>
      <h1>Wholesome Cats</h1>
      <button onClick={getImage}>Get Cat</button>

      <div>
        <img className="resize" src={catImage} />
      </div>
    </div>
  );
}

export default App;
