import React from "react";

// material ui imports
import { Grid, TextField } from "@material-ui/core";

// redux
import { useSelector } from "react-redux";

const EmailForm = () => {
  const email = useSelector(state => state.auth.user.email);

  return (
    <form noValidate autoComplete="off">
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={email}
            fullWidth
            name="Email"
            label="Email"
            type="text"
            variant="outlined"
            InputProps={{ readOnly: true, disableUnderline: true }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default EmailForm;
