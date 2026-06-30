interface Props {
  getImage: () => void;
  catImage: string;
  onImageError: () => void;
}

const Image = ({ getImage, catImage, onImageError }: Props) => {
  return (
    <div>
      <div>
        <button onClick={getImage}>Get Cat</button>
      </div>
      <img
        className="img-resize"
        alt="Image of a cat"
        src={catImage}
        onError={onImageError}
      />
    </div>
  );
};

export default Image;
