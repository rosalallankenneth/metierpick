import React from "react";

// material ui imports
import { Box, TextField, Grid, Button } from "@material-ui/core";

const AddressForm = () => {
  return (
    <Box mt={3}>
      <form noValidate autoComplete="off">
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12}>
            <TextField label="Old Password" fullWidth type="Password" />
          </Grid>

          <Grid item xs={12}>
            <TextField label="New Password" fullWidth type="Password" />
          </Grid>

          <Grid item xs={12}>
            <TextField label="Confirm New Password" fullWidth type="Password" />
          </Grid>
        </Grid>

        <Box mt={3}>
          <Button variant="contained" color="primary">
            Change Password
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddressForm;
