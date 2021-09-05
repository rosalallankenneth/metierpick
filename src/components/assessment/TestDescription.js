import React from "react";

// material ui components
import { Typography, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";

// redux imports
import { useDispatch } from "react-redux";
//import { useSelector } from "react-redux";
import { startAssessment } from "../../redux/actions/assessmentActions";

const TestDescription = () => {
  // retrieve redux state
  //const username = useSelector(state => state.auth.username);
  const dispatch = useDispatch();

  const handleTakeAssessment = () => {
    dispatch(startAssessment());
  };

  return (
    <div>
      <Typography variant="h4">Multiple Intelligence Assessment</Typography>
      <Box mt={3}>
        <Typography>
          Information on Dr. Armstrong's Theory on Multiple Intelligence. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography>
          Instructions: Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </Typography>
      </Box>
      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleTakeAssessment}
        >
          Take Assessment
        </Button>
      </Box>
    </div>
  );
};

export default TestDescription;
