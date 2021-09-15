import React from "react";

// material ui components
import { Paper, Box } from "@material-ui/core";

// custom components
import ContentTitleBar from "../global/ContentTitleBar";
import HomeMap from "./HomeMap";
import DominantAttributes from "./DominantAttributes";

const HomeContent = () => {
  return (
    <>
      <ContentTitleBar title="Home" />
      <Box mt={3}>
        <Paper>
          <HomeMap />
        </Paper>
      </Box>
      <Box mt={3}>
        <Paper>
          <DominantAttributes />
        </Paper>
      </Box>
    </>
  );
};

export default HomeContent;
