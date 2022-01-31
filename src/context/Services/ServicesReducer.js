const reducer = (globalState, action) => {
  switch (action.type) {
    case "GET_SERVICES":
      return {
        ...globalState,
        services: action.payload,
      };

    case "GET_SERVICE":
      return {
        ...globalState,

        singleService: action.payload,
      };

    default:
      return globalState;
  }
};
export default reducer;
