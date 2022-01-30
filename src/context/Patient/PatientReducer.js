const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_PATIENTS":
      return {
        ...globalState,
        patients: action.payload,
      };

    case "GET_PATIENT":
      return {
        ...globalState,

        singlePatient: action.payload,
      };
    default:
      return globalState;
  }
};

export default reducer;
