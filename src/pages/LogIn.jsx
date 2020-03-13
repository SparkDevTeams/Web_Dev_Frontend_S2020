import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik } from "formik";
import * as yup from "yup";
import request from "../utils/request";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("The provided email is not an email.")
    .required(),
  password: yup.string().required()
});

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={schema}
          onSubmit={async (values, actions) => {
            try {
              const response = await request({
                url: "http://localhost:3009/user/sign_in",
                method: "post",
                data: {
                  email: values.email,
                  password: values.password
                }
              });
              console.log(response);
              const stringifiedResponse = JSON.stringify(response.data);
              sessionStorage.setItem("user", stringifiedResponse);
              sessionStorage.setItem("token", response.token);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              {props.errors.email && <div>{props.errors.email}</div>}
              <TextField
                variant="outlined"
                margin="normal"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {props.errors.password && <div>{props.errors.password}</div>}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
                </Grid>
                <Grid item>
                  <Link href="/signUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}
