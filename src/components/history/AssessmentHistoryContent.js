import React from "react";

// custom components
import ContentTitleBar from "../global/ContentTitleBar";
import { Box, Paper } from "@material-ui/core";
import AssessmentTiles from "./AssessmentTiles";

const AssessmentHistoryContent = () => {
  return (
    <>
      <ContentTitleBar title="Assessment History" />
      <Box mt={3}>
        <Paper>
          <Box p={3}>
            <AssessmentTiles />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default AssessmentHistoryContent;
