import React, { useEffect } from "react";
import { useAuth } from "../hooks";
import { makeStyles, Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => {
  console.log(theme);
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      marginTop: "-20px"
    },
    container: {
      height: "100%"
    },
    title: {
      color: "#f9f9f9",
      textAlign: "center",
      marginBottom: "90px",
      fontSize: 64
    },
    calltoAction: {
      color: "#f9f9f9",
      textAlign: "center",
      marginBottom: "50px"
    },
    inputSearch: {
      borderRadius: 126,
      backgroundColor: theme.palette.common.white,
      fontSize: 16
    },
    buttonSearch: {
      borderRadius: 126,
      backgroundColor: theme.palette.secondary,
      fontSize: 18,
      padding: "15px 20px"
    }
  };
});

const Home = props => {
  const { user, loggedIn } = useAuth();
  const classess = useStyles();

  return (
    <div className={classess.root}>
      <Grid
        className={classess.container}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item style={{ maxWidth: "600px" }}>
          <h1 className={classess.title}>Challenge WF</h1>
          <h2 className={classess.calltoAction}>
            The app where your problems get solved in an instant.
          </h2>
          <form noValidate autoComplete>
            <Grid container direction="row" spacing={2} alignItems="center">
              <Grid item xs={12} md={9}>
                <TextField
                  className={classess.inputSearch}
                  label="Search for a Challenge"
                  fullWidth
                  variant="filled"
                  type="search"
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  className={classess.buttonSearch}
                  variant="contained"
                  color="secondary"
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

// export default Home;
