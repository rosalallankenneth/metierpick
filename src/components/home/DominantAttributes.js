import React from "react";
import { Typography, Box } from "@material-ui/core";

// custom components
import AttributesContainer from "./AttributesContainer";

const DominantAttributes = () => {
  return (
    <>
      <Box>
        <Box p={3}>
          <Typography variant="h6">Your Most Dominant Attributes</Typography>
          <Box mt={1}>
            <Typography variant="body2" align="justify">
              Based on your most recent assessment <i>(September 15, 2021)</i>.
            </Typography>
          </Box>
        </Box>

        <Box mt={1}>
          <AttributesContainer />
        </Box>
      </Box>
    </>
  );
};

export default DominantAttributes;
