import React from "react";
import { Box, Typography } from "@material-ui/core";
import ConstructionIcon from "@material-ui/icons/SettingsInputComposite";

const UnderConstruction = () => {
  return (
    <Box p={3}>
      <Typography align="center">
        <ConstructionIcon fontSize="large" />
      </Typography>
      <Box mt={1}>
        <Typography variant="body1" align="center">
          We are still working on this section.
        </Typography>
      </Box>
    </Box>
  );
};

export default UnderConstruction;
