import React from "react";
import { useReducer } from "react";
import PatientContext from "./PatientContext";
import PatientReducer from "./PatientReducer";
import axiosClient from "./../../config/axios";

const PatientProvider = (props) => {
  //INITIAL STATE

  const initialState = {
    patients: [],
    singlePatient: {
      _id: "",
      name: "",
      lastname: "",
      age: "",
      weight: "",
      height: "",
      allergies: "",
    },
    consults: [],
  };

  //CONFIGURACION DE REDUCER Y CREACION DE ESTADO GLOBAL
  const [globalState, dispatch] = useReducer(PatientReducer, initialState);

  //FUNCIONES DE CAMBIO EN ESTADO GLOBAL

  //LEER PACIENTES
  const getPatients = async () => {
    const res = await axiosClient.get("patients/readAll");
    const patientsList = res.data.data;
    dispatch({
      type: "GET_PATIENTS",
      payload: patientsList,
    });
  };

  const getPatient = async (patientId) => {
    const res = await axiosClient.get(`patients/readone/${patientId}`);
    const selectedPatient = res.data.data;
    dispatch({
      type: "GET_PATIENT",
      payload: selectedPatient,
    });
  };

  //RETORNO
  return (
    <PatientContext.Provider
      value={{
        patients: globalState.patients,
        singlePatient: globalState.singlePatient,
        getPatients,
        getPatient,
      }}
    >
      {props.children}
    </PatientContext.Provider>
  );
};

export default PatientProvider;
