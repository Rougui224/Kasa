import { Article } from "./Article";
export function Card({ data }) {
  return (
    <section className="allCards">
      {data.map(({ id, title, cover }) => (
        <Article key={id} imageUrl={cover} title={title} id={id} />
      ))}
    </section>
  );
}
