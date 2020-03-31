import React, { createContext, useReducer, useState, useEffect } from "react";
import { initialState, challengeReducer } from "./challengeReducer";

/**
 * Context is a global store, global variable for maintaining some state
 */

export const ChallengeContext = createContext({});
const sessionState = JSON.parse(sessionStorage.getItem("challengeState"));

// necessary so that on refresh it gets reset
sessionState.challengesOfInterest = [];

/**
 * ChallengeProvider is a react component that provides the Global Store of Challenge Business Logiv
 * to all its children, meaning anyone who needs it.
 *
 * @param {*} param0
 */
const ChallengeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    challengeReducer,
    sessionState || initialState
  );

  const [contextValue, setContextValue] = useState({ state, dispatch });

  useEffect(() => {
    setContextValue(prevContext => {
      sessionStorage.setItem(
        "challengeState",
        JSON.stringify({ ...prevContext, ...state })
      );
      return { ...prevContext, state };
    });
  }, [state]);

  return (
    <ChallengeContext.Provider value={contextValue}>
      {children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeProvider;
