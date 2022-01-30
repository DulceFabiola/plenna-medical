import React from "react";

const Consults = () => {
  return (
    <div>
      <h1>Consulta</h1>
      <form>
        <label>Padecimiento</label>
        <textarea name="condition" className="text-area">
          Write something here
        </textarea>

        <label>Exploración física</label>
        <textarea name="examination" className="text-area">
          Write something here
        </textarea>

        <label>Diagnóstico</label>
        <textarea name="diagnostic" className="text-area">
          Write something here
        </textarea>

        <label>Receta</label>
        <textarea name="prescription" className="text-area">
          Write something here
        </textarea>

        <label>Tratamiento</label>
        <textarea name="treatment" className="text-area">
          Write something here
        </textarea>

        <label>Notas</label>
        <textarea name="notes" className="text-area">
          Write something here
        </textarea>

        <button type="submit" className="btn">
          Siguiente
        </button>
      </form>
    </div>
  );
};

export default Consults;
