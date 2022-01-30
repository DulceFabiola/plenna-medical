import React from "react";

const Consults = () => {
  return (
    <div className="patients-container">
      <div className="card">
        <div className="card-body">
          <h1>Consulta</h1>
          <form>
            <label>Padecimiento</label>
            <textarea name="condition" className="text-area" />

            <label>Exploración física</label>
            <textarea name="examination" className="text-area" />

            <label>Diagnóstico</label>
            <textarea name="diagnostic" className="text-area" />

            <label>Receta</label>
            <textarea name="prescription" className="text-area" />

            <label>Tratamiento</label>
            <textarea name="treatment" className="text-area" />

            <label>Notas</label>
            <textarea name="notes" className="text-area" />

            <button type="submit" className="btn">
              Siguiente
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consults;
