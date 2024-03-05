import { Collaps } from "../Common/Collaps";
import { aboutList } from "../../data/aboutList.js";
export function CollapsSection() {
  return (
    <>
      {" "}
      {aboutList.map(({ title, description }) => (
        <Collaps title={title}>
          <p>{description}</p>
        </Collaps>
      ))}
    </>
  );
}
