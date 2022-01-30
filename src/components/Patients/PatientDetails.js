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
    <div>
      <h3>Detalles de paciente</h3>
      <p>
        Nombre: {singlePatient.name} {singlePatient.lastname}
      </p>
      <p>Edad: {singlePatient.age}</p>
      <p>Peso: {singlePatient.weight}</p>
      <p>Estatura: {singlePatient.height}</p>
      <p>
        Alergias:
        {singlePatient.allergies ? singlePatient.allergies : " No reportadas"}
      </p>
      <p>
        Historial medico:
        {singlePatient.myconsults &&
          singlePatient.myconsults.map((item, index) => {
            return (
              <Link key={index} to={`/consultDetails/${item}`}>
                <li>{item}</li>
              </Link>
            );
          })}
      </p>
      <Link to={`/consult/${singlePatient._id}`}>
        <button type="button" className="btn">
          Iniciar nueva consulta
        </button>
      </Link>
    </div>
  );
};

export default PatientDetails;
