import { Link } from "react-router-dom";

import "./styles/Article.css";
export function Article({ imageUrl, title, id }) {
  return (
    <Link key={id} to={`/logement/${id}`}>
      <article key={id} className="articleCard">
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
