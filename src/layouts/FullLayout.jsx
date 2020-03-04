import React, {useState, useEffect} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import {publicRoutes } from "../routes/allRoutes";
import styled from "styled-components";
import { Route, Switch} from "react-router-dom";



const Side = styled.div`
  width: 250;
`;



const FullLayout = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    const switchRoutes = (route) => {
        props.history.push(route);
        toggleDrawer();
    }


    return (
        <div style={{minHeight: "100vh", position: "relative"}}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => toggleDrawer()}
                >
                  <MenuIcon />
                </IconButton>

              </Toolbar>
            </AppBar>
            <Drawer open={drawerOpen} onClose={toggleDrawer}>
              <Side>
                <List component="nav">
                  {publicRoutes.map(route => (
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
                  ))}
                </List>
              </Side>
            </Drawer>
            <Switch>
              {publicRoutes.map(publicRoutes => {
                return (<Route exact  path={publicRoutes.path} key={publicRoutes.key} component={publicRoutes.component} />)
              })}
            </Switch>
        </div>
    )
}

export default FullLayout;