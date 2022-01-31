import React, { useReducer } from "react";
import ServicesReducer from "./ServicesReducer";
import ServicesContext from "./ServicesContext";
import axiosClient from "./../../config/axios";

const ServicesProvider = (props) => {
  // INITIAL STATE
  const initialState = {
    services: [],
    singleService: {
      type: "",
      description: "",
    },
  };
  const [globalState, dispatch] = useReducer(ServicesReducer, initialState);

  //LEER SERVICIOS
  const getServices = async () => {
    const res = await axiosClient.get("services/readAll");
    const list = res.data.data;
    dispatch({
      type: "GET_SERVICES",
      payload: list,
    });
  };

  //LEER DETALLES DE SERVICIO
  const getService = async (serviceId) => {
    const res = await axiosClient.get(`services/readone/${serviceId}`);
    const selectedService = res.data.data;
    dispatch({
      type: "GET_SERVICE",
      payload: selectedService,
    });
  };
  return (
    <ServicesContext.Provider
      value={{
        services: globalState.services,
        singleService: globalState.singleService,
        getServices,
        getService,
      }}
    >
      {props.children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
