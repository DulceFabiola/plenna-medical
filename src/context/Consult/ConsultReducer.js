const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_CONSULTS":
      return {
        ...globalState,
        consults: action.payload,
      };

    case "GET_CONSULT":
      return {
        ...globalState,

        singleConsult: action.payload,
      };

    default:
      return globalState;
  }
};

export default reducer;
