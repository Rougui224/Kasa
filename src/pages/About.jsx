import "./styles/About.css";
import { Banner } from "../components/Layout/Banner";
import aboutPic from "../assets/pictures/aboutPic.jpeg";
import { CollapsSection } from "../components/About/CollapsSection";

export function About() {
  return (
    <div className="innerAbout">
      <Banner imgeUrl={aboutPic} altText="Image de la nature" />
      <section>
        <CollapsSection />
      </section>
    </div>
  );
}
