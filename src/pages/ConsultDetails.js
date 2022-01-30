import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ConsultContext from "../context/Consult/ConsultContext";

const ConsultDetails = () => {
  const consultCtx = useContext(ConsultContext);
  const { getConsult, singleConsult } = consultCtx;
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getConsult(id);
  }, []);

  return (
    <div className="patients-container">
      <div className="card">
        <div className="card-body">
          <h1>Historial medico</h1>
          <div>
            <div className="separator">
              <p className="title">Fecha</p>
              <p>{singleConsult.updatedAt}</p>
            </div>

            <div className="separator">
              <p className="title">Padecimiento</p>
              <p>{singleConsult.condition}</p>
            </div>

            <div className="separator">
              <p className="title">Exploración física</p>
              <p>{singleConsult.examination}</p>
            </div>

            <div className="separator">
              <p className="title">Diagnóstico</p>
              <p>{singleConsult.diagnostic}</p>
            </div>

            <div className="separator">
              <p className="title">Receta</p>
              <p>{singleConsult.prescription}</p>
            </div>

            <div className="separator">
              <p className="title">Tratamiento</p>
              <p>{singleConsult.treatment}</p>
            </div>
            <div className="separator">
              <p className="title">Notas</p>
              <p>{singleConsult.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultDetails;
