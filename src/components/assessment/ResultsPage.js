import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

// material ui imports
import { Box, Paper, Typography } from "@material-ui/core";

// custom components
import ContentTitleBar from "../global/ContentTitleBar";
import TopRatingSection from "./RatingSectionPrimary";
import OtherRatingSection from "./RatingSectionSecondary";
import { initDecisionTree } from "../../utils/initDecisionTree";
import { ratingToDT } from "../../utils/ratingToDT";
import CareerPathSection from "./CareerPathSection";

const ResultsPage = () => {
  const resultsData = useSelector(state => state.assessment.assessmentResults);

  // when results data is empty, go back to assessment page
  if (resultsData === null || resultsData === undefined) {
    return <Redirect to="/assessment-history" />;
  }

  const { ratings } = resultsData;
  // sort all ratings by highest value
  const sortedRatings = Object.entries(ratings).sort((a, b) => b[1] - a[1]);
  let topRatings = [];
  let otherRatings = [];

  // filter ratings based on the top (at least) 3 highest ratings
  sortedRatings.forEach(rate => {
    if (rate[1] >= sortedRatings[2][1]) {
      topRatings = [...topRatings, rate];
    } else {
      otherRatings = [...otherRatings, rate];
    }
  });

  const dtComic = ratingToDT(topRatings);
  const paths = initDecisionTree(dtComic);

  return (
    <>
      <Box mb={3}>
        <ContentTitleBar title="Assessment Results" />
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={3}>
            <Typography variant="h6">Career Path Suggestions</Typography>
            <Box mt={1} mb={2}>
              <Typography variant="body2" align="justify">
                These are your most suitable career path (college programs)
                based on the results of your assessment.
              </Typography>
            </Box>
            <Box mt={3}>
              <CareerPathSection paths={paths} />
            </Box>
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
          <OtherRatingSection ratings={otherRatings} />
        </Box>
      </Paper>
    </>
  );
};

export default ResultsPage;
