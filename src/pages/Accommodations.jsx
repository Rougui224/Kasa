import { useParams } from "react-router-dom";
export function Accomodation() {
  const { id } = useParams();
  return <p>Vous êtes sur la page du logement {id}</p>;
}
