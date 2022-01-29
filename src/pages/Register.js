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
    <div className="main-container container">
      <img className="iconApp" src="./../../plenna.jpg" alt="Plenna" />
      <h2>Registra una cuenta</h2>
      <div>
        <div>
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
            className=""
          >
            <div>
              <label for="email" className="">
                Nombre de usuario
              </label>
              <div className="">
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  name="name"
                  type="text"
                  required
                  className=""
                />
              </div>
            </div>
            <div className="">
              <label className="">Correo electrónico</label>
              <div className="">
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  name="email"
                  type="email"
                  autocomplete="current-password"
                  required
                  className=""
                />
              </div>
            </div>

            <div className="">
              <label for="password" className="">
                Contraseña
              </label>
              <div className="mt-1">
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className=""
                />
              </div>
            </div>
            <div className="">
              <div className="">{msg && <p>{msg}</p>}</div>
            </div>
            <div>
              <button type="submit" className="btn">
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
