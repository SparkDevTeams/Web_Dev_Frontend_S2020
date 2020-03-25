import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider, ChallengeProvider } from "./hooks";
import { ThemeProvider } from "@material-ui/core/styles";

const Root = prop => {
  return (
    <AuthProvider>
      <ChallengeProvider>
        <Router>
          <App />
        </Router>
      </ChallengeProvider>
    </AuthProvider>
  );
};

export default Root;
