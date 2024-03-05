import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import "./styles/Collaps.css";
import { useState } from "react";
export function Collaps({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <article className="collaps">
      <header className="collaps_header">
        <h3 className="collaps_header_title">{title}</h3>
        <FontAwesomeIcon
          className={`Collaps_header_icon ${isOpen && "open"}`}
          icon={faChevronUp}
          onClick={() => toggleOpen()}
        />
      </header>
      {isOpen && <div className="collaps_description">{children}</div>}
    </article>
  );
}
