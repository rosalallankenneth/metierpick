import React from "react";

import AssessmentDescription from "./AssessmentDescription";
import QuestionnaireForm from "./Questionnaire";

// redux
import { useSelector } from "react-redux";

const AssessmentContent = () => {
  const isReadyForAssessment = useSelector(state => state.assessment.isReady);

  if (isReadyForAssessment) {
    return <QuestionnaireForm />;
  } else {
    return <AssessmentDescription />;
  }
};

export default AssessmentContent;
