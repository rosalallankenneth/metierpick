import React from "react";
import { Box, Typography, Button } from "@material-ui/core";

const CareerPathSection = props => {
  const { paths } = props;

  return (
    <>
      <Typography variant="h6">Career Path Suggestions</Typography>
      <Box mt={1}>
        <Typography variant="body2" align="justify">
          These are your most dominant attributes or the skills that you excel
          and get interested the most. This is based on the ratings that you got
          from the assessment, with a range of 5.00 (highest) to 1.00 (lowest).
        </Typography>
        <Box mt={3}>
          <Typography>Primary Paths</Typography>
          <Box mt={1}>
            {paths._1.map(path => (
              <Button key={path} variant="outlined">
                <b>{path}</b>
              </Button>
            ))}
          </Box>
        </Box>
        <Box mt={3}>
          <Typography>Secondary Paths</Typography>
          <Box mt={1}>
            {paths._2.map(path => (
              <Button key={path} variant="outlined">
                <b>{path}</b>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CareerPathSection;
