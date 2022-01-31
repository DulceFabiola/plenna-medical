import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ConsultContext from "../context/Consult/ConsultContext";
const Consults = () => {
  const consultCtx = useContext(ConsultContext);

  const { createConsult, singleConsult } = consultCtx;
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  //2.ESTADO LOCAL
  const [newConsult, setnewConsult] = useState({
    condition: "",
    examination: "",
    diagnostic: "",
    prescription: "",
    treatment: "",
    notes: "",
    patient: id,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setnewConsult({
      ...newConsult,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createConsult(newConsult);
    navigate(`/checkout/${singleConsult._id}`);
  };

  return (
    <div className="patients-container">
      <div className="card">
        <div className="card-body">
          <h1>Consulta</h1>
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <label className="title">Padecimiento</label>
            <textarea
              name="condition"
              className="text-area"
              onChange={(event) => {
                handleChange(event);
              }}
              required
            />

            <label className="title">Exploración física</label>
            <textarea
              name="examination"
              className="text-area"
              onChange={(event) => {
                handleChange(event);
              }}
              required
            />

            <label className="title">Diagnóstico</label>
            <textarea
              name="diagnostic"
              className="text-area"
              onChange={(event) => {
                handleChange(event);
              }}
              required
            />

            <label className="title">Receta</label>
            <textarea
              name="prescription"
              className="text-area"
              onChange={(event) => {
                handleChange(event);
              }}
              required
            />

            <label className="title">Tratamiento</label>
            <textarea
              name="treatment"
              className="text-area"
              onChange={(event) => {
                handleChange(event);
              }}
              required
            />

            <label className="title">Notas</label>
            <textarea
              name="notes"
              className="text-area"
              onChange={(event) => {
                handleChange(event);
              }}
              required
            />
            <div className="div-right">
              <button type="submit" className="btn">
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consults;
