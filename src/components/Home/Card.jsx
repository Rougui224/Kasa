import "./styles/Card.css";
import { Article } from "./Article";
import { accommodationList } from "../../data/accommodationList";

export function Card() {
  return (
    <section className="allCards">
      {accommodationList.map(({ id, title, cover }) => (
        <Article imageUrl={cover} title={title} id={id} />
      ))}
    </section>
  );
}
