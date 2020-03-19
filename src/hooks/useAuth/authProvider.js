import React, { createContext, useReducer, useState, useEffect } from "react";
import { initialState, authReducer } from "./authReducer";

/**
 * Context is a global store, global variable for maintaining some state
 */
export const AuthContext = createContext({});

const sessionState = JSON.parse(sessionStorage.getItem("authState"));

/**
 * AuthProvider is a react component that provides the Global Store of Authentcation information
 * to all its children, meaning anyone who needs it.
 *
 * @param {*} param0
 */
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    authReducer,
    sessionState || initialState
  );

  const [contextValue, setContextValue] = useState({ state, dispatch });

  useEffect(() => {
    setContextValue(prevContext => {
      sessionStorage.setItem(
        "authState",
        JSON.stringify({ ...prevContext, ...state })
      );
      return { ...prevContext, state };
    });
  }, [state]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
