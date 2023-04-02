import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  responsive: false,
};

export const ResponsiveContext = createContext(INITIAL_STATE);

const responsiveReducer = (state, action) => {
  switch (action.type) {
    case "RESPONSIVE":
      return { responsive: true };
    case "NOT_RESPONSIVE":
      return { responsive: false };
    default:
      return state;
  }
};

export const ResponsiveProvider = ({ children }) => {
  const [state, dispatch] = useReducer(responsiveReducer, INITIAL_STATE);
  return (
    <ResponsiveContext.Provider
      value={{ dispatch, responsive: state.responsive }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};
