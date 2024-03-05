export function InfoAccommodation({ title, location, tags }) {
  return (
    <div className="infoAccommodation">
      <div>
        <h1 className="infoAccommodation_title">{title}</h1>
        <h3 className="infoAccommodation_location">{location}</h3>
      </div>

      <ul className="infoAccommodation_tags">
        {tags.map((element, index) => (
          <li key={`${element}-${index}`}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
