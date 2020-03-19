import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./hooks";
import { ThemeProvider } from "@material-ui/core/styles";

const Root = prop => {
  return (
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  );
};

export default Root;
