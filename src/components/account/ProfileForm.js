import React from "react";
import { useSelector } from "react-redux";

// material ui imports
import { Box, TextField, Grid, Button } from "@material-ui/core";

const ProfileForm = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <Box mt={3}>
      <form noValidate autoComplete="off">
        <Grid container direction="row" spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField
              label="Username"
              defaultValue="JohnDoe420"
              fullWidth
              spellCheck={false}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              label="Email"
              defaultValue={user.email}
              fullWidth
              spellCheck={false}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              label="Last Name"
              defaultValue="Doe"
              fullWidth
              spellCheck={false}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              label="First Name"
              defaultValue="John"
              fullWidth
              spellCheck={false}
            />
          </Grid>
        </Grid>

        <Box mt={3}>
          <Button variant="contained" color="primary">
            Save Changes
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ProfileForm;
