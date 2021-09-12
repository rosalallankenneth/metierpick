import React from "react";

// material ui components
import { Paper, Box } from "@material-ui/core";

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
        <Box py={2}>
          <QuestionnaireForm />
        </Box>
      </Paper>
    </>
  );
};

export default Questionnaire;
