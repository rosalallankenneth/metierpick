import React from "react";
import { Typography, Paper, Box } from "@material-ui/core";

const ContentTitleBar = ({ title }) => {
  return (
    <Paper>
      <Box p={3}>
        <Typography variant="h5">{title}</Typography>
      </Box>
    </Paper>
  );
};

export default ContentTitleBar;
