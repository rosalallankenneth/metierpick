import React from "react";

// material ui components
//import MuiButton from "@material-ui/core/Button";
//import Box from "@material-ui/core/Box";
//import { styled } from "@material-ui/core/styles";
//import { spacing } from "@material-ui/system";

// custom components
import QuestionnaireForm from "./QuestionnaireForm";

//const Button = styled(MuiButton)(spacing);

const Questionnaire = () => {
  //const { setIsReady } = props;
  //const clickCancel = () => setIsReady(false);

  return (
    <div>
      <QuestionnaireForm />
      {/* <Box mt={3}>
        <Button variant="contained" color="default" onClick={clickCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" ml={1}>
          Submit Response
        </Button>
      </Box> */}
    </div>
  );
};

export default Questionnaire;
