import "./styles.css";
import * as objectService from "../../../services/object-service";
import { useState } from "react";
import CardInformation from "../../../components/CardInformation";
import { ObjectDTO } from "../../../models/object";

export default function Search() {
  const [user, setUser] = useState("");
  const [error, setError] = useState();

  const [obj, setObj] = useState<ObjectDTO>();

  function handleUserChange(event: any) {
    setUser(event.target.value);
  }

  function handleBtnOnClick(event: any) {
    event.preventDefault();

    objectService
      .findyByUser(user)
      .then((response) => {
        setObj(response.data);
      })
      .catch((error) => {
        setError(error.response.data);
        setObj(undefined);
      });
  }

  return (
    <main>
      <section className="gapi-content mt55">
        <form>
          <div className="gapi-card">
            <div className="gapi-card-content">
              <h2>Encontre um perfil Github</h2>
              <input
                name="user"
                value={user}
                type="text"
                autoFocus
                placeholder="Usuário Github"
                onChange={handleUserChange}
              />

              <button onClick={handleBtnOnClick} type="submit">
                Encontrar
              </button>
            </div>
          </div>
        </form>

        {(obj && <CardInformation object={obj} />) ||
          (error && <h1 className="gapi-title">Erro ao buscar usuário</h1>)}
      </section>
    </main>
  );
}
