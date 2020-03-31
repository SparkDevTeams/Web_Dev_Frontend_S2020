import React, { useEffect, useState } from "react";
import { useChallenge } from "../hooks";
import { makeStyles, Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => {
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
    },
    challengeCard: {
      border: "1px solid #f9f9f9",
      borderRadius: "8px",
      margin: "16px auto"
    },
    challengeTitle: {
      padding: "4px auto 8px 8px",
      marginLeft: 15,
      color: "#f9f9f9"
    },
    challengeDescription: {
      color: "#f9f9f9",
      marginLeft: 15
    },
    challengeButton: {
      marginRight: 15
    }
  };
});

/**
 * HOME Component
 * Handles fetching all challenges and keeping them in state
 * allows the user to query all challenges via a string
 * and the challenges that include said string are rendered underneath the
 * search field
 * @param {} props
 */
const Home = props => {
  const {
    getChallenges,
    queryChallenges,
    challengesOfInterest
  } = useChallenge();

  const classess = useStyles();

  const [query, setQuery] = useState();

  // get all challenges from database
  useEffect(() => {
    getChallenges();
  }, []);

  // necessary for the text of the query field to show
  const handleQueryUpdate = e => {
    return setQuery(e.target.value);
  };

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
                  value={query}
                  onChange={handleQueryUpdate}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  className={classess.buttonSearch}
                  variant="contained"
                  color="secondary"
                  onClick={() => queryChallenges(query)}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
          {/* display the challenges that include the contnet of query */}
          {challengesOfInterest.length > 0 &&
            challengesOfInterest.map(challenge => (
              <div key={challenge._id} className={classess.challengeCard}>
                <Grid container>
                  <Grid item xs={12} className={classess.challengeTitle}>
                    <h2>{challenge.title}</h2>
                  </Grid>
                  <Grid container direction="row" justify="space-between">
                    <Grid item className={classess.challengeDescription}>
                      <p>{challenge.description}</p>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classess.challengeButton}
                      >
                        Accept
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
