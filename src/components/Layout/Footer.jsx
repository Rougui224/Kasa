import logoFooter from "../../assets/pictures/logoFooter.png";
// import "./styles/Footer.css";
export function Footer() {
  return (
    <footer className="footer">
      <img className="footer_img" src={logoFooter} alt="Logo du site" />
      <p className="footer_paragraph">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
