import React, { useState } from "react";
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
import MainMap from "../../mapping-system/pages/MainMap";
import { datasetDT } from "../../data/datasetDT";
import { toDateTime } from "../../utils/toDateTime";

const ResultsPage = () => {
  const resultsData = useSelector(state => state.assessment.assessmentResults);
  const [ifModalOpen, setIfModalOpen] = useState(false);
  const [fullListMap, setFullListMap] = useState(false);

  const handleModalClose = () => {
    setIfModalOpen(false);
  };

  // when results data is empty, go back to assessment page
  if (resultsData === null || resultsData === undefined) {
    return <Redirect to="/assessment-history" />;
  }

  const { ratings, recordedAt } = resultsData;

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
  const dataFilter = datasetDT.filter(d => {
    const found1 =
      dtComic.attr_1 === d.attr_1 ||
      dtComic.attr_2 === d.attr_1 ||
      dtComic.attr_3 === d.attr_1;
    const found2 =
      dtComic.attr_1 === d.attr_2 ||
      dtComic.attr_2 === d.attr_2 ||
      dtComic.attr_3 === d.attr_2;
    const found3 =
      dtComic.attr_1 === d.attr_3 ||
      dtComic.attr_2 === d.attr_3 ||
      dtComic.attr_3 === d.attr_3;
    if (found1 && found2 && found3) {
      return true;
    } else {
      return false;
    }
  });

  const paths = initDecisionTree(dtComic);
  const pathsKeys = Object.keys(paths).map(path => path);
  let pathsForMap = [pathsKeys[0], pathsKeys[1], pathsKeys[2]];
  const pathsFilter = pathsKeys.filter(p => {
    let found = dataFilter.some(d => d.path === p);
    return found;
  });
  if (pathsFilter.length >= 3) {
    pathsForMap = [pathsFilter[0], pathsFilter[1], pathsFilter[2]];
  }

  return (
    <>
      <Box mb={3}>
        <ContentTitleBar title="Assessment Results" />
      </Box>
      <MainMap
        open={ifModalOpen}
        handleClose={handleModalClose}
        pathList={pathsForMap}
        fullListMap={fullListMap}
      />

      <Box mb={3}>
        <Paper>
          <Box p={3}>
            <Typography variant="h6">Career Path Suggestions</Typography>
            <Box mt={1} mb={2}>
              <Typography variant="body2" align="justify">
                These are your most suitable career path (college programs)
                based on the results of your assessment taken on{" "}
                {toDateTime(recordedAt.seconds).date}.
              </Typography>
            </Box>
            <Box mt={3}>
              <CareerPathSection
                paths={pathsForMap}
                setFullListMap={setFullListMap}
                setIfModalOpen={setIfModalOpen}
              />
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
