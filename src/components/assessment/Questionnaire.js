import React from "react";

// material ui components
import { Paper, Box, Typography } from "@material-ui/core";

// custom components
import QuestionnaireForm from "./QuestionnaireForm";
import ContentTitleBar from "../global/ContentTitleBar";

const Questionnaire = () => {
  return (
    <>
      <Box mb={3}>
        <ContentTitleBar title="Multiple Intelligence Assessment" />
      </Box>
      <Paper>
        <Box>
          <Box px={3} pt={3}>
            <Typography variant="body1">
              <b>NA - Not Applicable &emsp;|&emsp; VA - Very Applicable</b>
            </Typography>
          </Box>
          <QuestionnaireForm />
        </Box>
      </Paper>
    </>
  );
};

export default Questionnaire;
