import React from "react";

// material ui components
import Box from "@material-ui/core/Box";

// custom components
import AssessmentContent from "../assessment/AssessmentContent";

const ActiveContent = () => {
  return (
    <div>
      <Box p={1}>
        <AssessmentContent />
      </Box>
    </div>
  );
};

export default ActiveContent;
