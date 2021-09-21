import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// material ui imports
import { Typography, Box, Paper } from "@material-ui/core";

// custom components
import ContentTitleBar from "../global/ContentTitleBar";
import TopRatingSection from "./TopRatingSection";
import UnderConstruction from "../global/UnderConstruction";

// utilities
import { calcuRatings } from "../../utils/calcuRatings";

const ResultsPage = () => {
  const resultsData = useSelector(state => state.assessment.assessmentResults);
  const history = useHistory();

  // when results data is empty, go back to assessment page
  if (resultsData === null || resultsData === undefined) {
    history.push("/");
    return null;
  }

  // calculate ratings and store
  const ratings = calcuRatings(resultsData);
  // filter ratings based on the top (at least) 3 highest ratings
  const topRatings = ratings.filter(rate => rate[1] >= ratings[2][1]);

  return (
    <>
      <Box mb={3}>
        <ContentTitleBar title="Assessment Results" />
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={3}>
            <Typography variant="h6">Career Path Suggestions</Typography>
            <UnderConstruction />
          </Box>
        </Paper>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={3}>
            <TopRatingSection ratings={topRatings} />
          </Box>
        </Paper>
      </Box>

      <Paper>
        <Box p={3}>
          <Typography variant="h6">
            Your Rating on other Intelligences
          </Typography>
          <UnderConstruction />
        </Box>
      </Paper>
    </>
  );
};

export default ResultsPage;
