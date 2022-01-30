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
                      src="./../../../assets/mujer.png"
                      alt="plenna-icon"
                    />
                    <span>Plenna</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/patients">Pacientes</Link>
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
