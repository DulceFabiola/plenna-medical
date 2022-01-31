import React from "react";

const Article = ({ url }) => {
  return (
    <div className="card-article">
      <img className="icon" src={url} alt="happy" />
      <div className="card-body">
        <h5>Todo lo que tienes saber sobre</h5>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.
        </p>
      </div>
    </div>
  );
};

export default Article;
