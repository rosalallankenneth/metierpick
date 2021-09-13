import React from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// redux actions
import { getResults } from "../../redux/actions/assessmentActions";

// assessment items
import {
  linguisticItems,
  logicalMathItems,
  spatialItems
} from "../../data/assessmentItems";

// change color theme for forms
let defaultThemeColors = Survey.StylesManager.ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#3FA34D";
Survey.StylesManager.applyTheme("modern");

// setters for form content
Survey.completeText = "Thank you for completing the assessment!";

const json = {
  pages: [
    linguisticItems,
    logicalMathItems,
    spatialItems,
    {
      questions: [
        {
          type: "text",
          name: "email",
          isRequired: true,
          title:
            "Thank you for taking the assessment. Please enter your email address below to complete the assessment."
        }
      ]
    }
  ]
};

const QuestionnaireForm = () => {
  // create questionnaire components
  const survey = new Survey.Model(json);

  survey.clear();
  survey.render();

  const history = useHistory();
  const dispatch = useDispatch();

  const handleStoreResults = data => {
    dispatch(getResults(data));
  };

  const handleGoToResults = () => {
    history.push("/assessment-results");
  };

  survey.onComplete.add(function(sender) {
    handleStoreResults(sender.data);
    handleGoToResults();
  });

  return (
    <>
      <Survey.Survey model={survey} showCompletedPage={false} />
    </>
  );
};

export default QuestionnaireForm;
