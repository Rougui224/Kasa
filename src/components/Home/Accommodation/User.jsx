import { Stars } from "./Stars";

export function User({ rating, host }) {
  return (
    <div className="UserSection">
      <div className="UserSection_information">
        <h3 className="UserSection_information_title">{host.name}</h3>
        <span className="UserSection_information_cover">
          <img src={host.picture} alt={`${host.name} - cover`} />
        </span>
      </div>
      <div className="UserSection_stars">
        <Stars rating={rating} />
      </div>
    </div>
  );
}
