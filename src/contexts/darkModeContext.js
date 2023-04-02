import { createContext, useReducer } from "react";

const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));

const INITIAL_STATE = {
  darkMode: savedDarkMode ? true : false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "DARK_MODE":
      localStorage.setItem("darkMode", JSON.stringify(true));
      return { darkMode: true };
    case "LIGHT_MODE":
      localStorage.setItem("darkMode", JSON.stringify(false));
      return { darkMode: false };
    case "TOGGLE_MODE":
      localStorage.setItem("darkMode", JSON.stringify(!state.darkMode));
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const DarkModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);
  return (
    <DarkModeContext.Provider
      value={{
        darkMode: state.darkMode,
        dispatch,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
