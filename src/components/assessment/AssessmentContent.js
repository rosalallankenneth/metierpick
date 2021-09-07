import React from "react";

import AssessmentDescription from "./AssessmentDescription";
import Questionnaire from "./Questionnaire";

// redux
import { useSelector } from "react-redux";

const AssessmentContent = () => {
  const isReadyForAssessment = useSelector(state => state.assessment.isReady);

  if (isReadyForAssessment) {
    return <Questionnaire />;
  } else {
    return <AssessmentDescription />;
  }
};

export default AssessmentContent;
