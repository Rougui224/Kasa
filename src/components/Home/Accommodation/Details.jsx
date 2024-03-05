import { Collaps } from "../../Common/Collaps";

export function Details({ description, equipments }) {
  return (
    <section className="innerAccommodation_collaps">
      <Collaps title={"Description"}>
        {" "}
        <p>{description}</p>{" "}
      </Collaps>
      <Collaps title={"Équipements"}>
        <ul>
          {" "}
          {equipments.map((element, index) => (
            <li key={`${element}_${index}`}>{element}</li>
          ))}
        </ul>
      </Collaps>
    </section>
  );
}
