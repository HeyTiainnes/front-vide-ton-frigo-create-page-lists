import { NavLink } from "react-router-dom";
import "./BoutonValider.css";
const BoutonValider = () => {
  return (
    <button type="button" className="btn btn-green">
      <NavLink to="/pageDoList" end className="nav-link">
        Valider
      </NavLink>
    </button>
  );
};

export default BoutonValider;
