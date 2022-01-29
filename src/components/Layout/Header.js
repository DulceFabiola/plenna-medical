import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <nav className="nav-bar">
            <ul>
              <li>
                <Link to="/">
                  <div>
                    <img
                      className="iconApp"
                      src="./../../../plenna.jpg"
                      alt="plenna-icon"
                    />
                    <span>Plenna</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/details">Detalles de paciente</Link>
              </li>
              <li>
                <Link to="/consult">Consulta</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
