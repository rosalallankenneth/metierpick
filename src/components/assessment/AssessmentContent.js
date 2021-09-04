import React from "react";

import TestDescription from "./TestDescription";
import QuestionnaireForm from "./Questionnaire";

// redux
import { useSelector } from "react-redux";

const AssessmentContent = () => {
  const isReadyForAssessment = useSelector(state => state.assessment.isReady);

  if (isReadyForAssessment) {
    return <QuestionnaireForm />;
  } else {
    return <TestDescription />;
  }
};

export default AssessmentContent;
