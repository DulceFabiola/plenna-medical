import React, { useContext, useEffect, useState } from "react";
import ServicesContext from "../context/Services/ServicesContext";
import { useParams, useNavigate } from "react-router-dom";
import ConsultDetails from "../pages/ConsultDetails";
import ConsultContext from "../context/Consult/ConsultContext";
const Checkout = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const consultCtx = useContext(ConsultContext);

  const { getConsult, singleConsult, updateConsult } = consultCtx;
  const servicesCtx = useContext(ServicesContext);
  const { services, getServices } = servicesCtx;

  const [checkedItems, setCheckedItems] = useState([]);
  const [total, setTotal] = useState(0);

  const handleChange = (item) => {
    setCheckedItems([...checkedItems, item]);
  };

  useEffect(() => {
    getServices();
    getConsult(id);
  }, []);

  useEffect(() => {
    if (checkedItems.length) {
      let price = [...checkedItems].reduce((a, b) => a.price + b.price);
      setTotal(price);
    }
    console.log(checkedItems);
  }, [checkedItems]);

  const addServices = () => {
    updateConsult(checkedItems);
    navigate(`/consultDetails/${singleConsult._id}`);
  };
  return (
    <div className="card-body">
      <ConsultDetails />
      <div className="patients-container">
        <div className="card">
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
                              <input
                                type={"checkbox"}
                                checked={checkedItems[item.description]}
                                onChange={() => {
                                  handleChange(item);
                                }}
                                name={item._id}
                                value={item._id}
                              />
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
                              <input
                                type={"checkbox"}
                                checked={checkedItems[item.description]}
                                onChange={() => {
                                  handleChange(item);
                                }}
                                name={item._id}
                                value={item._id}
                              />
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
                              <input
                                type={"checkbox"}
                                checked={checkedItems[item.description]}
                                onChange={() => {
                                  handleChange(item);
                                }}
                                name={item._id}
                                value={item._id}
                              />
                            </td>
                          </tr>
                        )}
                      </>
                    );
                  })}
                </table>
                <div className="div-right">
                  <h3> {`Total:$ ${total}`}</h3>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => addServices()}
                  >
                    Finalizar consulta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
