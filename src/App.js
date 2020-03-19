import React from "react";
import "./App.css";
import indexRoutes from "./routes";

import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "./Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { AuthProvider } from "./hooks";

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Switch>
          {indexRoutes.map((prop, key) => {
            return (
              <Route path={prop.path} key={key} component={prop.component} />
            );
          })}
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
