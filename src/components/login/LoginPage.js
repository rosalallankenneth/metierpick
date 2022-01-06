import React, { useRef, useState } from "react";
import { Link as LinkRoute } from "react-router-dom";

// material ui imports
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import MetierpickLogo from "../../assets/logo-v2.png";
import AlertError from "../global/AlertError";
import Copyright from "../global/Copyright";
import LoginCover from "../../assets/cover-login.jpg";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
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
  },
  cover: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${LoginCover})`,
    objectFit: "cover",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  aboutDescription: {
    background: "rgba(255,255,255, .8)",
    backdropFilter: "blur(5px)"
  }
}));

export default function SignInSide(props) {
  const classes = useStyles();
  const { login } = props;

  const emailRef = useRef();
  const passwordRef = useRef();

  // if login form is submitting
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // event handler for submit login
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setIsError(false);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setIsLoading(false);
      setErrorMessage("Login unsuccessful.");
      setIsError(true);
    }
  };

  const handleCloseAlertError = () => {
    setIsError(false);
    setErrorMessage("");
  };

  return (
    <>
      {isError && (
        <AlertError message={errorMessage} onClose={handleCloseAlertError} />
      )}
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} md={7} className={classes.image}>
          <Box className={classes.cover}>
            <Box p={3}>
              <Paper className={classes.aboutDescription}>
                <Box p={3}>
                  <Typography variant="body1" align="justify">
                    <b>Metierpick</b> is a Decision Support System (DSS)
                    designed to help students in discovering their dominant
                    attributes (e.g., Language, Mathematics, or Visualization)
                    and use this as a factor in suggesting the most suitable
                    career path for the students to support their career
                    decision-making. The system also includes a dynamic mapping
                    system that displays the distribution of enrollees of
                    different college programs based on the inputs given by the
                    students. This helps students in evaluating which is the
                    most accessible or encouraging programs to enroll in among
                    the suggested career paths by presenting their number of
                    enrollees in specific locations of the map.
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Box mb={3}>
              <img src={MetierpickLogo} alt="Metierpick-logo" />
            </Box>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={emailRef}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={passwordRef}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isLoading}
              >
                {!isLoading ? "Login" : <CircularProgress size={20} />}
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  <Link component={LinkRoute} to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box my={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
