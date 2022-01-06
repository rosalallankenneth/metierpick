import React from "react";

// material ui components
import { Paper, Box, Typography, Grid } from "@material-ui/core";

// custom components
import QuestionnaireForm from "./QuestionnaireForm";
import ContentTitleBar from "../global/ContentTitleBar";

const Questionnaire = () => {
  return (
    <>
      <Box mb={2}>
        <ContentTitleBar title="Multiple Intelligence Assessment" />
      </Box>

      <Box mb={2}>
        <Paper style={{ background: "#eeefff" }}>
          <Box px={3} py={2}>
            <Grid container>
              <Grid item xs={4} sm={2}>
                <Typography variant="subtitle2">1 - Never</Typography>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Typography variant="subtitle2">2 - Rarely</Typography>
              </Grid>
              <Grid item xs={4} sm={3}>
                <Typography variant="subtitle2">3 - Sometimes</Typography>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Typography variant="subtitle2">4 - Often</Typography>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Typography variant="subtitle2">5 - Always</Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      <Paper>
        <Box pt={3}>
          <QuestionnaireForm />
        </Box>
      </Paper>
    </>
  );
};

export default Questionnaire;
