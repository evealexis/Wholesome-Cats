interface Props {
  getImage: (event: React.MouseEvent<HTMLElement>) => void;
  catImage: string;
}

const Image = ({ getImage, catImage }: Props) => {
  return (
    <div>
      <div>
        <button onClick={getImage}>Get Cat</button>
      </div>
      <img className="img-resize" src={catImage} />
    </div>
  );
};

export default Image;
