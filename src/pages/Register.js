import React, { useState, useContext } from "react";
import UserContext from "./../context/User/UserContext";

const Register = () => {
  const userCtx = useContext(UserContext);
  const { registerUser, msg } = userCtx;

  //ESTADO LOCAL
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(newUser);
  };
  return (
    <div className="main-container">
      <div className="container">
        <img className="icon" src="./../../assets/mujer.png" alt="Plenna" />
        <h1>Registra una cuenta</h1>
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div>
            <label className="title">Nombre de usuario</label>
            <div>
              <input
                onChange={(event) => {
                  handleChange(event);
                }}
                name="name"
                type="text"
                required
              />
            </div>
          </div>
          <div>
            <label className="title">Correo electrónico</label>
            <div>
              <input
                onChange={(event) => {
                  handleChange(event);
                }}
                name="email"
                type="email"
                required
              />
            </div>
          </div>

          <div>
            <label className="title">Contraseña</label>
            <div className="mt-1">
              <input
                onChange={(event) => {
                  handleChange(event);
                }}
                name="password"
                type="password"
                required
                className=""
              />
            </div>
          </div>
          <div>
            <div className="error-message">{msg && <p>{msg}</p>}</div>
          </div>
          <div>
            <button type="submit" className="btn">
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
