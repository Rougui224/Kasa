import { Picture } from "../components/Common/Picture";
import homePic from "../assets/pictures/homePic.jpeg";
import "./styles/Home.css";
import { Card } from "../components/Home/Card";

export function Home() {
  return (
    <div className="innerHome">
      <section className="innerHome_picture">
        <Picture imgeUrl={homePic} altText={`Image d'accueil`}>
          <h1> Chez vous, partout et ailleurs</h1>
        </Picture>
      </section>
      <Card />
    </div>
  );
}
