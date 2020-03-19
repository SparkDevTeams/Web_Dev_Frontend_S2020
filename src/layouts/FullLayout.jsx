import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { publicRoutes } from "../routes/allRoutes";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { useAuth } from "../hooks";

const Side = styled.div`
  width: 250;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;

  .buttonsOnRight {
    display: flex;
    justify-content: space-around;
    min-width: 400px;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
`;

const FullLayout = props => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { loggedIn } = useAuth();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const switchRoutes = route => {
    props.history.push(route);
    toggleDrawer();
  };

  function handleClick(route) {
    props.history.push(route);
  }

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <div className="buttonsOnRight">
            <StyledLink
              component="button"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Explore
            </StyledLink>
            {!loggedIn && (
              <StyledLink
                component="button"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                onClick={() => handleClick("/logIn")}
              >
                Sign In
              </StyledLink>
            )}
            {!loggedIn && (
              <StyledLink
                component="button"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                onClick={() => handleClick("/signUp")}
              >
                Sign Up
              </StyledLink>
            )}
          </div>
        </StyledToolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={toggleDrawer}>
        <Side>
          <List component="nav">
            {publicRoutes.map(route => {
              if (route.authReq) {
                if (loggedIn) {
                  return (
                    <ListItem
                      button
                      onClick={() => switchRoutes(route.path)}
                      key={route.key}
                    >
                      <ListItemIcon>
                        {<route.icon color="primary" />}
                      </ListItemIcon>
                      <ListItemText primary={route.name} />
                    </ListItem>
                  );
                } else {
                  return null;
                }
              }
              if (
                loggedIn &&
                (route.name === "Login" || route.name === "Sign Up")
              ) {
                return null;
              }
              return (
                <ListItem
                  button
                  onClick={() => switchRoutes(route.path)}
                  key={route.key}
                >
                  <ListItemIcon>{<route.icon color="primary" />}</ListItemIcon>
                  <ListItemText primary={route.name} />
                </ListItem>
              );
            })}
          </List>
        </Side>
      </Drawer>
      <Switch>
        {publicRoutes.map(publicRoutes => {
          return (
            <Route
              exact
              path={publicRoutes.path}
              key={publicRoutes.key}
              component={publicRoutes.component}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default FullLayout;
