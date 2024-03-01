import "./styles/About.css";
import { Picture } from "../components/Common/Picture";
import aboutPic from "../assets/pictures/aboutPic.jpeg";
import { Collaps } from "../components/About/Collaps";
import { aboutList } from "../data/AboutList";

export function About() {
  return (
    <div className="innerAbout">
      <Picture imgeUrl={aboutPic} altText="Image de la nature" />
      <section>
        {aboutList.map(({ title, description }) => (
          <Collaps title={title}>
            <p>{description}</p>
          </Collaps>
        ))}
      </section>
    </div>
  );
}
