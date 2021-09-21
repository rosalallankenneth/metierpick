import React from "react";

// material ui imports
import { Box, TextField, Grid, Button } from "@material-ui/core";

const AddressForm = () => {
  return (
    <Box mt={3}>
      <form noValidate autoComplete="off">
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Street / Barangay"
              defaultValue="P-8, Lam-an"
              fullWidth
              spellCheck={false}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              label="City"
              defaultValue="Ozamiz"
              fullWidth
              spellCheck={false}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              label="Province"
              defaultValue="Misamis Occidental"
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

export default AddressForm;
