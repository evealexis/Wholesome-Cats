import { useState } from "react";
import Image from "./Image";

const App = () => {
  const [catImage, setCatImage] = useState<string>("https://cataas.com/cat");

  function getImage() {
    setCatImage(`https://cataas.com/cat?${Math.floor(Math.random() * 9999)}`);
  }

  return (
    <div>
      <header>
        <h1>Wholesome Cats</h1>
      </header>
      <main>
        {
          <Image
            getImage={getImage}
            catImage={catImage}
            onImageError={() =>
              console.error(
                "Error loading cat image. Please refresh the page or try again later.",
              )
            }
          />
        }
      </main>
    </div>
  );
};

export default App;
