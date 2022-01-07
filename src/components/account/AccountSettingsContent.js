import React from "react";

// material ui imports
import { Paper, Typography, Box } from "@material-ui/core";

// custom components
import ContentTitleBar from "../global/ContentTitleBar";
import BasicInformationForm from "./BasicInformationForm";
import EmailForm from "./EmailForm";
// import ChangePasswordForm from "./ChangePasswordForm";

const AccountContent = () => {
  return (
    <>
      <ContentTitleBar title="Account Settings" />

      <Box mt={3}>
        <Paper>
          <Box p={3}>
            <Typography variant="h6">Basic Information</Typography>
            <BasicInformationForm />
          </Box>
        </Paper>

        <Box mt={3}>
          <Paper style={{ background: "#eeefff" }}>
            <Box p={3}>
              <EmailForm />
            </Box>
          </Paper>
        </Box>

        {/* <Box mt={3}>
          <Paper>
            <Box p={3}>
              <Typography variant="h6">Change Password</Typography>
              <ChangePasswordForm />
            </Box>
          </Paper>
        </Box> */}
      </Box>
    </>
  );
};

export default AccountContent;
