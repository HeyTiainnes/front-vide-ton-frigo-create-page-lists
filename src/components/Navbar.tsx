import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow">
        <div className="container-fluid">
          <div className="navbar-brand">
            <NavLink to="/" end className="nav-link">
              <img
                src="/logos/005-fridgeListOuvert.jpg"
                alt="Logo Frigo"
                width="80"
                height="80"
                className="LogoNavbar"
              />
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pageInscription" end className="nav-link">
                  Inscription
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/pageConnexion" end className="nav-link">
                  Connexion
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
