import { useState } from "react";
import arrowLeft from "../../../assets/pictures/arrowLeft.png";
import arrowRight from "../../../assets/pictures/arrowRight.png";
export function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const urlImage = pictures[currentIndex];
  function nextImage() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  }
  function prevImage() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  }
  return (
    <div className="carrousel">
      <img
        className="carrousel_appartmentPicture"
        src={urlImage}
        alt="Aperçu de l\'appartement"
      />
      <img
        className="carrousel_arrowLeft"
        src={arrowLeft}
        alt="Flêche de gauche"
        onClick={() => prevImage()}
      />
      <img
        className="carrousel_arrowRight"
        src={arrowRight}
        alt="Flêche de droite"
        onClick={() => nextImage()}
      />
      <p className="carrousel_index">{`${currentIndex + 1}/${
        pictures.length
      }`}</p>
    </div>
  );
}
