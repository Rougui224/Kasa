import { Link } from "react-router-dom";
import notFound from "../assets/pictures/notFound.png";
import "./styles/NotFound.css";
export function NotFound() {
  return (
    <section className="innerNotFound">
      <img className="innerNotFound_picture" src={notFound} alt="404 - cover" />
      <p className="innerNotFound_paragraph">
        Oups! La page que vous demandez n'existe pas
      </p>
      <Link to={"/"} className="innerNotFound_link">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}
