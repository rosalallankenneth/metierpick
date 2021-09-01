import React from "react";

// material ui components
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

// custom components
import AssessmentContent from "../assessment/AssessmentContent";

const ActiveContent = () => {
  return (
    <div>
      <Paper>
        <Box p={3}>
          <AssessmentContent />
        </Box>
      </Paper>
    </div>
  );
};

export default ActiveContent;
