import { Link, NavLink } from "react-router-dom";
import "./styles/Header.css";
import logoHeader from "../../assets/pictures/logoHeader.png";
export function Header() {
  return (
    <header className="header">
      <img className="header_logo" src={logoHeader} alt="logo du site" />
      <nav className="header_nav">
        <ul className="header_nav_ul">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/apropos">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
