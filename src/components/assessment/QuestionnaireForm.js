import React, { useState } from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setResults } from "../../redux/actions/assessmentActions";
import { calcuRatings } from "../../utils/calcuRatings";
import { formatResultsData } from "../../utils/formatResultsData";

import {
  createUserRatingsDocument,
  getRatingsResult
} from "../../firebase/assessment";

// assessment items
import {
  linguisticItems,
  logicalMathItems,
  spatialItems,
  bodilyItems,
  musicalItems,
  interpersonalItems,
  intrapersonalItems,
  naturalistItems
} from "../../data/assessmentItems";
import LoadingAnimation from "../global/Loading";
import { Box, Typography } from "@material-ui/core";

// change color theme for forms
let defaultThemeColors = Survey.StylesManager.ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#3FA34D";
Survey.StylesManager.applyTheme("modern");

const json = {
  pages: [
    linguisticItems,
    logicalMathItems,
    spatialItems,
    bodilyItems,
    musicalItems,
    interpersonalItems,
    intrapersonalItems,
    naturalistItems
  ]
};

const QuestionnaireForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  // get user email from redux state
  const email = useSelector(state => state.auth.user.email);

  // create questionnaire components
  const survey = new Survey.Model(json);
  survey.clear();
  survey.render();

  // function called after complete assessment
  const handleStoreResults = async data => {
    setLoading(true);
    const ratingsData = { email, ...calcuRatings(data) };

    // create ratings data in firestore and dispatch after for results page
    const docId = await createUserRatingsDocument(ratingsData);
    const resultsData = await getRatingsResult(docId);
    const formattedData = await formatResultsData(resultsData);
    await dispatch(setResults(formattedData));

    setLoading(false);
    history.push("/assessment-results");
  };

  survey.onComplete.add(function(sender) {
    handleStoreResults(sender.data);
  });

  const LoadingSection = () => {
    return (
      <Box mb={2}>
        <Typography align="center">
          Just a moment. Preparing your assessment results.
        </Typography>
        <LoadingAnimation />
      </Box>
    );
  };

  return (
    <>
      {loading ? (
        LoadingSection()
      ) : (
        <Survey.Survey model={survey} showCompletedPage={false} />
      )}
    </>
  );
};

export default QuestionnaireForm;
