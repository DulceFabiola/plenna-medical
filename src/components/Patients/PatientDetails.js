import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PatientContext from "../../context/Patient/PatientContext";

const PatientDetails = () => {
  const patientCtx = useContext(PatientContext);
  const { getPatient, singlePatient } = patientCtx;
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getPatient(id);
  }, []);

  return (
    <div className="patients-container">
      <div className="card">
        <div className="card-body">
          <h1>Detalles de paciente</h1>
          <p>
            <b> Nombre:</b> {singlePatient.name} {singlePatient.lastname}
          </p>
          <p>
            <b>Edad:</b> {singlePatient.age}
          </p>
          <p>
            <b>Peso:</b> {singlePatient.weight}
          </p>
          <p>
            <b>Estatura: </b>
            {singlePatient.height}
          </p>
          <p>
            <b> Alergias: </b>
            {singlePatient.allergies
              ? singlePatient.allergies
              : " No reportadas"}
          </p>
          <ul className="list-group">
            <p>
              <b>Historial medico: </b>
            </p>
            {singlePatient.myconsults &&
              singlePatient.myconsults.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={`/consultDetails/${item}`}
                    className="list-group-item"
                  >
                    <li>Consulta: {item}</li>
                  </Link>
                );
              })}
          </ul>
          <Link to={`/consult/${singlePatient._id}`}>
            <button type="button" className="btn">
              Iniciar nueva consulta
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
