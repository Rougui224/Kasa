import { useParams } from "react-router-dom";
import { Carrousel } from "../components/Home/Accommodation/Carrousel";
import { accommodationList } from "../data/accommodationList";
import "./styles/Accomodation.css";
import { User } from "../components/Home/Accommodation/User";
import { InfoAccommodation } from "../components/Home/Accommodation/InfoAccommodation";
import { Details } from "../components/Home/Accommodation/Details";
import { NotFound } from "./NotFound";
export function Accomodation() {
  const { id } = useParams();
  const accommodation = accommodationList.find((element) => element.id === id);

  return accommodation ? (
    <section className="innerAccommodation">
      <Carrousel pictures={accommodation.pictures} />
      <section className="innerAccommodation_description">
        <InfoAccommodation
          title={accommodation.title}
          location={accommodation.location}
          tags={accommodation.tags}
        />
        <User rating={accommodation.rating} host={accommodation.host} />
      </section>
      <Details
        description={accommodation.description}
        equipments={accommodation.equipments}
      />
    </section>
  ) : (
    <NotFound />
  );
}
