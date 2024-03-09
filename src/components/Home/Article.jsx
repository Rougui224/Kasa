import { Link } from "react-router-dom";

export function Article({ imageUrl, title, id }) {
  return (
    <Link to={`/logement/${id}`}>
      <article className="articleCard">
        <img
          className="articleCard_img"
          src={imageUrl}
          alt={`${title} - aperçu`}
        />
        <h3 className="articleCard_title">{title}</h3>
      </article>
    </Link>
  );
}
