import React from "react";
import MPlogo from "../../assets/logo-v2.png";
import LoadingGif from "../../assets/splashscreen-icon.gif";
import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    height: "100vh"
  },
  splashLoading: {
    width: 80
  }
}));

const SplashScreen = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.gridContainer}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        className={classes.gridContainer}
      >
        <Grid item xs={12}>
          <Typography align="center">
            <img src={MPlogo} alt="metierpick-logo" />
          </Typography>
          <Typography align="center">
            <img
              src={LoadingGif}
              alt="loading-gif"
              className={classes.splashLoading}
            />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SplashScreen;
