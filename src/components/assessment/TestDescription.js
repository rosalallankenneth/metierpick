import React from "react";

// material ui components
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const TestDescription = props => {
  const { setIsReady } = props;
  const clickTakeAssessment = () => setIsReady(true);

  return (
    <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
      <Box mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={clickTakeAssessment}
        >
          Take Assessment
        </Button>
      </Box>
    </div>
  );
};

export default TestDescription;
