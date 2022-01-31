import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

const Header = () => {
  const userCtx = useContext(UserContext);

  const { currentUser, verifyingToken, logoutUser } = userCtx;
  useEffect(() => {
    verifyingToken();
  }, []);
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
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>Plenna</p>
                </Link>
              </li>
              {currentUser.name ? (
                <>
                  <li>
                    <Link to="/patients">Pacientes</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={() => logoutUser()}>
                      Cerrar sesión
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">Iniciar sesión</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <div className="banner">
        <span className="home-title">PLENNA PORTAL MÉDICO</span>
      </div>
    </div>
  );
};

export default Header;
