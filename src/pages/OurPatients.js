import React, { useContext, useEffect } from "react";
import PatientContext from "../context/Patient/PatientContext";
import { Link } from "react-router-dom";

const OurPatients = () => {
  const patientCtx = useContext(PatientContext);
  const { patients, getPatients } = patientCtx;

  useEffect(() => {
    getPatients();
  }, []);
  return (
    <div className="patients-container">
      <div className="card">
        <div className="card-body">
          <h1>Nuestros Pacientes</h1>
          <ul className="list-group">
            {patients.map((element, index) => {
              return (
                <Link
                  key={index}
                  to={`/patients/${element._id}`}
                  className="list-group-item"
                >
                  <li>
                    <h3>
                      {element.name} {element.lastname}
                    </h3>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurPatients;
