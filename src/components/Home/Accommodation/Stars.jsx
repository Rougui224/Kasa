import starActive from "../../../assets/pictures/starActive.png";
import starInactive from "../../../assets/pictures/starInactive.png";
export function Stars({ rating }) {
  const range = [1, 2, 3, 4, 5];
  const activeStar = <img src={starActive} alt="étoile active" />;
  const greyStar = <img src={starInactive} alt="étoile vide" />;
  return range.map((number) =>
    rating <= number ? (
      <span key={number} className="star">
        {activeStar}
      </span>
    ) : (
      <span className="star" key={number}>
        {greyStar}
      </span>
    )
  );
}
