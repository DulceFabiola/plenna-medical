import React, { useState, useContext } from "react";
import UserContext from "./../context/User/UserContext";
import { Link } from "react-router-dom";
const Login = () => {
  const userCtx = useContext(UserContext);
  const { loginUser, msg } = userCtx;

  // ESTADO LOCAL
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setLogUser({
      ...logUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(logUser);
  };
  return (
    <div className="main-container container">
      <img className="iconApp" src="./../../plenna.jpg" alt="Plenna" />
      <h2 className="">Iniciar sesión</h2>
      <div className="">
        <div className="">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className=""
          >
            <div>
              <label className="">Correo electrónico</label>
              <div className="mt-1">
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="email"
                  type="email"
                  required
                  className=""
                />
              </div>
            </div>

            <div className="">
              <label className="">Contraseña</label>
              <div className="">
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="password"
                  type="password"
                  required
                  className=""
                />
              </div>
            </div>

            <div className="">
              <div className="">
                <Link to="/signup" className="">
                  ¡Regístra una cuenta!
                </Link>
              </div>
            </div>
            <div className="">
              <div className="">{msg && <p>{msg}</p>}</div>
            </div>
            <button type="submit" className="">
              Inicia sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
