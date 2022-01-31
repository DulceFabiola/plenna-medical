import React from "react";
import { useReducer } from "react";
import ConsultContext from "./ConsultContext";
import ConsultReducer from "./ConsultReducer";
import axiosClient from "./../../config/axios";

const ConsultProvider = (props) => {
  //INITIAL STATE

  const initialState = {
    consults: [],
    singleConsult: {
      _id: "",
      condition: "",
      examination: "",
      diagnostic: "",
      prescription: "",
      treatment: "",
      notes: "",
      patient: "",
    },
  };
  const [globalState, dispatch] = useReducer(ConsultReducer, initialState);

  //LEER CONSULTAS
  const getConsults = async () => {
    const res = await axiosClient.get("consults/readAll");
    const listConsults = res.data.data;
    dispatch({
      type: "GET_CONSULTS",
      payload: listConsults,
    });
  };

  //LEER UNA CONSULTA
  const getConsult = async (consultId) => {
    const res = await axiosClient.get(`consults/readone/${consultId}`);
    const selectedConsult = res.data.data;
    dispatch({
      type: "GET_CONSULT",
      payload: selectedConsult,
    });
  };
  //CREAR CONSULTA
  const createConsult = async (form) => {
    const res = await axiosClient.post("consults/create", form);
    return res.data;
  };

  //EDITAR CONSULTA
  const updateConsult = async (form, idConsult) => {
    await axiosClient.put(`consults/edit/${idConsult}`, form);
  };

  return (
    <ConsultContext.Provider
      value={{
        consults: globalState.consults,
        singleConsult: globalState.singleConsult,
        getConsults,
        getConsult,
        createConsult,
        updateConsult,
      }}
    >
      {props.children}
    </ConsultContext.Provider>
  );
};

export default ConsultProvider;
