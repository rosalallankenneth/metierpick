import React from "react";

// material ui imports
import { Paper, Typography, Box } from "@material-ui/core";

// custom components
import ContentTitleBar from "../global/ContentTitleBar";
import ProfileForm from "./ProfileForm";
import AddressForm from "./AddressForm";
import ChangePasswordForm from "./ChangePasswordForm";

const AccountContent = () => {
  return (
    <>
      <ContentTitleBar title="Account Settings" />

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

        <Box mt={3}>
          <Paper>
            <Box p={3}>
              <Typography variant="h6">Change Password</Typography>
              <ChangePasswordForm />
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default AccountContent;
