import React from "react";
import { useSelector } from "react-redux";

// material ui imports
import { Typography, Box, Paper } from "@material-ui/core";

// custom components
import ContentTitleBar from "../global/ContentTitleBar";

// utilities
import { calcuRatings } from "../../utils/calcuRatings";

const ResultsPage = () => {
  const resultsData = useSelector(state => state.assessment.assessmentResults);

  // calculate ratings and store
  const ratings = calcuRatings(resultsData);

  return (
    <>
      <Box mb={3}>
        <ContentTitleBar title="Assessment Results" />
      </Box>
      <Paper>
        <Box p={3}>
          <Box>
            <Typography variant="h5">Your Top 3 Intelligences</Typography>
            <Box mt={2}>
              <Typography variant="body1">
                Linguistic: {ratings.linguisticRating}
              </Typography>
              <Typography variant="body1">
                Logical-Mathematical: {ratings.logicalRating}
              </Typography>
              <Typography variant="body1">
                Spatial: {ratings.spatialRating}
              </Typography>
            </Box>
          </Box>
          <Box mt={3}>
            <Typography variant="h5">Career Path Suggestions</Typography>
          </Box>
          <Box mt={3}>
            <Typography variant="h5">
              Your Ratings on other Intelligences{" "}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ResultsPage;
