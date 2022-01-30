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
    <div className=" container">
      <div className="">
        <img className="icon" src="./../../assets/mujer.png" alt="Plenna" />
        <h1>Iniciar sesión</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <label className="title">Correo electrónico</label>
            <div>
              <input
                onChange={(e) => {
                  handleChange(e);
                }}
                name="email"
                type="email"
                required
              />
            </div>
          </div>

          <div>
            <label className="title">Contraseña</label>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              name="password"
              type="password"
              required
            />
          </div>

          <div>
            <Link to="/signup" className="link">
              ¡Regístra una cuenta!
            </Link>
          </div>

          <div>
            <div className="error-message">{msg && <p>{msg}</p>}</div>
          </div>
          <button type="submit" className="btn">
            Inicia sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
