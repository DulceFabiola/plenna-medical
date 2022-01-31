import React, { useContext, useEffect } from "react";
import ServicesContext from "../context/Services/ServicesContext";

const Checkout = () => {
  const servicesCtx = useContext(ServicesContext);
  const { services, getServices } = servicesCtx;

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div className="card-body">
      <h1>Agregar servicios extras a la consulta</h1>
      <div>
        <div className="separator">
          <p className="title">Estudios:</p>
          <table className="services">
            <tr>
              <th>Descipción</th>
              <th>Precio</th>
              <th>Agregar</th>
            </tr>
            {services.map((item) => {
              return (
                <>
                  {item.type === "Study" && (
                    <tr key={item._id}>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>
                        <input type={"checkbox"} />
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </table>
        </div>
        <div className="separator">
          <p className="title">Servicios:</p>
          <table className="services">
            <tr>
              <th>Descipción</th>
              <th>Precio</th>
              <th>Agregar</th>
            </tr>
            {services.map((item) => {
              return (
                <>
                  {item.type === "Service" && (
                    <tr key={item._id}>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>
                        <input type={"checkbox"} />
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </table>
        </div>
        <div className="separator">
          <p className="title">Productos:</p>
          <table className="services">
            <tr>
              <th>Descipción</th>
              <th>Precio</th>
              <th>Agregar</th>
            </tr>
            {services.map((item) => {
              return (
                <>
                  {item.type === "Product" && (
                    <tr key={item._id}>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
                      <td>
                        <input type={"checkbox"} />
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
