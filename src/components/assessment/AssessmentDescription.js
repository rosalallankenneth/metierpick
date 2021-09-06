import React from "react";

// material ui components
import { Typography, Box, Paper } from "@material-ui/core";

// redux imports
//import { useSelector } from "react-redux";

// custom components
import AssessmentInstructions from "./AssessmentInstructions";
import AccordionDescription from "./AccordionDescription";

const TestDescription = () => {
  // retrieve redux state
  //const username = useSelector(state => state.auth.username);

  return (
    <>
      <Paper>
        <Box p={3}>
          <Typography variant="h4">Multiple Intelligence Assessment</Typography>
        </Box>
      </Paper>
      <Box mt={3}>
        <AssessmentInstructions />
      </Box>
      <Box mt={5}>
        <AccordionDescription />
      </Box>
    </>
  );
};

export default TestDescription;
