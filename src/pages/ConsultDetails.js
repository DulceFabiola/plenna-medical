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
    <div>
      <h1>Historial medico</h1>
      <h3>Fecha</h3>
      <p>{singleConsult.updatedAt.slice(0, 10)}</p>

      <h3>Padecimiento</h3>
      <p>{singleConsult.condition}</p>

      <h3>Exploración física</h3>
      <p>{singleConsult.examination}</p>

      <h3>Diagnóstico</h3>
      <p>{singleConsult.diagnostic}</p>

      <h3>Receta</h3>
      <p>{singleConsult.prescription}</p>

      <h3>Tratamiento</h3>
      <p>{singleConsult.treatment}</p>

      <h3>Notas</h3>
      <p>{singleConsult.notes}</p>
    </div>
  );
};

export default ConsultDetails;
