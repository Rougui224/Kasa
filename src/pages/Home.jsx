import { Banner } from "../components/Layout/Banner";
import homePic from "../assets/pictures/homePic.jpeg";
import "./styles/Home.css";
import { Card } from "../components/Home/Card";
import { useData } from "../data/DataContext";

export function Home() {
  const data = useData();
  return (
    <div className="innerHome">
      <section className="innerHome_picture">
        <Banner imgeUrl={homePic} altText={`Image d'accueil`}>
          <h1>
            {" "}
            Chez vous,
            <br /> partout et ailleurs
          </h1>
        </Banner>
      </section>
      <Card data={data} />
    </div>
  );
}
