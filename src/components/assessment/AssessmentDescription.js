import React from "react";

// material ui components
import { Box } from "@material-ui/core";

// redux imports
//import { useSelector } from "react-redux";

// custom components
import AssessmentInstructions from "./AssessmentInstructions";
import AccordionDescription from "./AccordionDescription";
import ContentTitleBar from "../global/ContentTitleBar";

const TestDescription = () => {
  // retrieve redux state
  //const username = useSelector(state => state.auth.username);

  return (
    <>
      <ContentTitleBar title="Multiple Intelligence Assessment" />
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
