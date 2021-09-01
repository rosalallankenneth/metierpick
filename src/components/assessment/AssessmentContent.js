import React, { useState } from "react";

import TestDescription from "./TestDescription";
import QuestionnaireForm from "./QuestionnaireForm";

const AssessmentContent = () => {
  const [isReady, setIsReady] = useState(false);

  if (isReady) {
    return <QuestionnaireForm setIsReady={setIsReady} />;
  } else {
    return <TestDescription setIsReady={setIsReady} />;
  }
};

export default AssessmentContent;
