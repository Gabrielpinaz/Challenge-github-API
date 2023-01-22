import "./styles.css";
import { ObjectDTO } from "../../models/object";

type Props = {
  object: ObjectDTO;
};

export default function CardInformation({ object }: Props) {
  return (
    <div className="gapi-card-style">
      <div className="gapi-img-style">
        <img src={object.avatar_url} alt={object.name} />
      </div>
      <div className="gapi-information-style">
        <h3>Informações</h3>
        <div>
          <div className="gapi-information-content">
            <p>Perfil: </p> <a href={object.url}>{object.url}</a>
          </div>
          <div className="gapi-information-content">
            <p>Seguidores: </p> {object.followers}
          </div>
          <div className="gapi-information-content">
            <p>Localidade: </p> {object.location}
          </div>
          <div className="gapi-information-content">
            <p>Nome: </p> {object.name}
          </div>
        </div>
      </div>
    </div>
  );
}
