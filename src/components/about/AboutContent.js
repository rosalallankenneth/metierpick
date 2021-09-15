import React from "react";
import { Box } from "@material-ui/core";

// custom components
import ContentTitleBar from "../global/ContentTitleBar";
import AboutDescription from "./AboutDescription";
import FunFactSection from "./FunFactSection";

const AboutContent = () => {
  return (
    <>
      <ContentTitleBar title="About Metierpick" />
      <Box mt={3}>
        <AboutDescription />
      </Box>
      <Box mt={3}>
        <FunFactSection />
      </Box>
    </>
  );
};

export default AboutContent;
