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
    <div>
      <h2>Nuestros Pacientes</h2>
      <ul>
        {patients.map((element, index) => {
          return (
            <Link key={index} to={`/patients/${element._id}`}>
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
  );
};

export default OurPatients;
