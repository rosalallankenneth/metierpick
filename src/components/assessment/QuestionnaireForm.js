import React from "react";
import * as Survey from "survey-react";
import "survey-react/modern.css";
import { useState } from "react";

// material ui imports
import { Typography, Box } from "@material-ui/core";

// assessment items
import { linguisticItems } from "../../data/assessmentItems";

// change color theme for forms
let defaultThemeColors = Survey.StylesManager.ThemeColors["modern"];
defaultThemeColors["$main-color"] = "#176BA0";
Survey.StylesManager.applyTheme("modern");

// setters for form content
Survey.completeText = "Thank you for completing the assessment!";

const json = {
  pages: [
    linguisticItems,
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
  ],
  completedHtml: "<p><h4>Thank you for completing the assessment!</h4></p>"
};

// create questionnaire components
const survey = new Survey.Model(json);

const QuestionnaireForm = () => {
  const [resultsPage, setResultsPage] = useState(null);

  survey.onComplete.add(function(sender) {
    setResultsPage(
      <Box px={3}>
        <Typography variant="h6">Results Data</Typography>
        <Box pt={2}>
          <Typography>{JSON.stringify(sender.data)}</Typography>
        </Box>
      </Box>
    );
  });
  return (
    <>
      <Survey.Survey model={survey} showCompletedPage={false} />
      {resultsPage}
    </>
  );
};

export default QuestionnaireForm;
