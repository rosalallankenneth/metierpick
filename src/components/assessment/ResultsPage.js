import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// material ui imports
import { Typography, Box, Paper } from "@material-ui/core";

// custom components
import ContentTitleBar from "../global/ContentTitleBar";
import RatingDescription from "./RatingDescription";

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

  return (
    <>
      <Box mb={3}>
        <ContentTitleBar title="Assessment Results" />
      </Box>
      <Box mb={3}>
        <Paper>
          <Box p={3}>
            <Typography variant="h6">Career Path Suggestions</Typography>
          </Box>
        </Paper>
      </Box>
      <Paper>
        <Box p={3}>
          <Box>
            <Typography variant="h6">Your Top-Rated Intelligences</Typography>
            <Box mt={2}>
              {// map through the rating values
              ratings.map(rate => {
                return <RatingDescription name={rate[0]} rating={rate[1]} />;
              })}
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ResultsPage;
