import "./styles/About.css";
import { Picture } from "../components/Common/Picture";
import aboutPic from "../assets/pictures/aboutPic.jpeg";
import { CollapsSection } from "../components/About/CollapsSection";

export function About() {
  return (
    <div className="innerAbout">
      <Picture imgeUrl={aboutPic} altText="Image de la nature" />
      <section>
        <CollapsSection />
      </section>
    </div>
  );
}
