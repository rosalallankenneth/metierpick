import React from "react";

// material ui imports
import { Paper, Typography, Box } from "@material-ui/core";

// custom components
import ProfileForm from "./ProfileForm";
import AddressForm from "./AddressForm";

const BasicInformation = () => {
  return (
    <>
      <Box mt={3}>
        <Paper>
          <Box p={3}>
            <Typography variant="h6">Profile</Typography>
            <ProfileForm />
          </Box>
        </Paper>

        <Box mt={3}>
          <Paper>
            <Box p={3}>
              <Typography variant="h6">Address Information</Typography>
              <AddressForm />
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default BasicInformation;
