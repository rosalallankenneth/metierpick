import React from "react";

// material ui imports
import { Typography, Grid, Box } from "@material-ui/core";

// redux
import { useSelector } from "react-redux";

const EmailForm = () => {
  const email = useSelector(state => state.auth.user.email);

  return (
    <form noValidate autoComplete="off">
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2">
            <b>Email</b>
          </Typography>
          <Box mt={2}>
            <Typography variant="body1">{email}</Typography>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default EmailForm;
