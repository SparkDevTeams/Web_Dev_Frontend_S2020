import React from 'react';
import './App.css';
import indexRoutes from "./routes";

import { Route, Switch} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    
    <div style={{ minHeight: "100vh" }}>
      <CssBaseline />
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (<Route path={prop.path} key={key} component={prop.component} />)
        })}
      </Switch>
    </div>
  );
}

export default App;
