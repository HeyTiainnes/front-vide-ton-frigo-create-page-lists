import { NavLink } from "react-router-dom";
import "./BoutonDemarrer.css";

const BoutonDemarrer = () => {
  return (
    <button type="button" className="btn btn-demarrer">
      <NavLink to="pageDoList" end className="nav-link">
        Demarrer
      </NavLink>
    </button>
  );
};

export default BoutonDemarrer;
