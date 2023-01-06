import axios from "axios";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BoutonAnnuler from "../components/BoutonAnnuler";

// interface Connexion {
//   email: string;
//   password: string;
// }

const Connexion = () => {
  const emailElement = useRef<HTMLInputElement>(null);
  const passwordElement = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log("button form clicked");
    console.log(emailElement.current?.value);
    console.log(passwordElement.current?.value);

    axios
      .post(`http://localhost:8080/api/auth/connection`, {
        mail: emailElement.current?.value,
        password: passwordElement.current?.value,
      })
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        console.log(response.data.token);
        // stock "set" le token
        localStorage.setItem("token", token);
        navigate("/PageDolist");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <label htmlFor="basic-url" className="form-label fw-bold">
        Pour vous connecter: Entrez vos identifiants.
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">
          Adresse E.m@il
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="philippe.dupond@cocorico.com (Exemple)"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          ref={emailElement}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">
          Mot de Passe
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="(Obligatoire)"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          ref={passwordElement}
        />
        <div>
          <BoutonAnnuler />{" "}
          <button
            type="button"
            className="btn btn-green"
            onClick={handleSubmitForm}
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
