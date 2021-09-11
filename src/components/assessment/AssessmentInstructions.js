import React from "react";

// redux imports
import { useDispatch } from "react-redux";
import { startAssessment } from "../../redux/actions/assessmentActions";

// material ui components
import {
  Typography,
  List,
  ListItem,
  Paper,
  Box,
  Button
} from "@material-ui/core";

const AssessmentInstructions = () => {
  const dispatch = useDispatch();

  const handleTakeAssessment = () => {
    dispatch(startAssessment());
  };

  return (
    <Paper>
      <Box p={3}>
        <Typography variant="h6">Instructions</Typography>
        <List>
          <ListItem>
            <Typography>
              1. This assessment is a rating-typed questionnaire that will
              assess one’s dominant (i.e., strengths) and inferior (i.e.,
              weaknesses) attributes in terms of capabilities and interests.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              2. The items are taken from Dr. Armstrong’s book about{" "}
              <b>Multiple Intelligence theory</b> (see sections below for more
              information).
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              3. For each item, the respondent has to rate the statement based
              on its degree of applicability to themselves. The rating will be
              as follows:
            </Typography>
          </ListItem>
          <ListItem>
            <Box pl={5}>
              <List>
                <ListItem>
                  <Typography>1 – Not Applicable</Typography>
                </ListItem>
                <ListItem>
                  <Typography>2 – Slightly Applicable</Typography>
                </ListItem>
                <ListItem>
                  <Typography>3 – Somewhat Applicable</Typography>
                </ListItem>
                <ListItem>
                  <Typography>4 – Applicable</Typography>
                </ListItem>
                <ListItem>
                  <Typography>5 – Very Applicable</Typography>
                </ListItem>
              </List>
            </Box>
          </ListItem>
          <ListItem>
            <Typography>
              4. This assessment is composed of 80 items in total.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              5. At the end of the assessment, the respondent has to provide
              their email for contacting purposes.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              Note: You don't have to study anything for this assessment. There
              is no right or wrong answer. Just be yourself and answer the items
              honestly to get accurate results of your insights.
            </Typography>
          </ListItem>
        </List>
        <Box mt={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleTakeAssessment}
          >
            Take Assessment
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default AssessmentInstructions;
