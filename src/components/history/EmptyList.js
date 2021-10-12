import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

const EmptyList = () => {
  return (
    <Box mt={2}>
      <Typography align="center">
        You have not completed any assessment so far.
      </Typography>
      <Box mt={2}>
        <Typography align="center" variant="subtitle2">
          <Link to="/take-assessment">Click here to take an assessment</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default EmptyList;
