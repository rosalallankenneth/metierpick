import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

// material ui imports
import { Box, Paper } from "@material-ui/core";

// custom components
import ContentTitleBar from "../global/ContentTitleBar";
import TopRatingSection from "./RatingSectionPrimary";
import OtherRatingSection from "./RatingSectionSecondary";

import { initDecisionTree } from "../../utils/initDecisionTree";
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

  // eslint-disable-next-line
  topRatings = topRatings.map(attr => {
    if (attr[0] === "Linguistic") return [...attr, "LI"];
    if (attr[0] === "Logical_Mathematical") return [...attr, "LO"];
    if (attr[0] === "Spatial") return [...attr, "SP"];
    if (attr[0] === "Bodily_Kinesthetic") return [...attr, "BO"];
    if (attr[0] === "Musical") return [...attr, "MU"];
    if (attr[0] === "Interpersonal") return [...attr, "IE"];
    if (attr[0] === "Intrapersonal") return [...attr, "IA"];
    if (attr[0] === "Naturalist") return [...attr, "NA"];
  });

  // const dtComic = {
  //   attr_1: topRatings[0][2],
  //   attr_2: topRatings[1][2],
  //   attr_3: topRatings[2][2]
  // };

  const dtComic = {
    attr_1: "IA",
    attr_2: "IE",
    attr_3: "LO"
  };
  const paths = initDecisionTree(dtComic);
  console.log(dtComic);

  return (
    <>
      <Box mb={3}>
        <ContentTitleBar title="Assessment Results" />
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={3}>
            <CareerPathSection paths={paths} />
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
