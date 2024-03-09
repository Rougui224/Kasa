import { Collaps } from "../Layout/Collaps.jsx";
import { aboutList } from "../../data/aboutList.js";
export function CollapsSection() {
  return (
    <>
      {aboutList.map(({ title, description }, index) => (
        <Collaps key={`${title}-${index}`} title={title}>
          <p>{description}</p>
        </Collaps>
      ))}
    </>
  );
}
