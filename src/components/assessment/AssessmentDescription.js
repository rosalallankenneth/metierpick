import React from "react";

// material ui components
import { Typography, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";

// redux imports
import { useDispatch } from "react-redux";
//import { useSelector } from "react-redux";
import { startAssessment } from "../../redux/actions/assessmentActions";

// material ui imports
import { List, ListItem } from "@material-ui/core";

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
            </Typography>
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
        </List>
      </Box>
      <Box mt={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleTakeAssessment}
        >
          Take Assessment
        </Button>
      </Box>
      <Box mt={5}>
        <Typography variant="h6">About Multiple Intelligence Theory</Typography>
        <Typography align="justify">
          <b>Multiple Intelligence (MI)</b> is a theory proposed by Howard
          Gardner in 1983 who referred to intelligence as a “bio-psychological
          potential” of humans to process specific types of information in
          different, distinct ways. It is in contrary to the traditional
          psychometric views of intelligence as the intellectual potential that
          can be measured by the concept of Intelligence Quotient (IQ) testing.
          Gardner proposed the existence of eight (8) distinct intelligences,
          namely:
        </Typography>
        <List>
          <ListItem>
            <Typography>
              1. Linguistic – the ability to use words effectively, both orally
              and in writing.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              2. Logical-Mathematical – the ability of reasoning and to use
              numbers well.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              3. Spatial - the ability to detect the visual-spatial world and
              convert those perceptions.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              4. Bodily-Kinesthetic – the ability of expressing thoughts and
              emotions with one's entire body, as well as the ability to make or
              alter things with one's hands.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              5. Musical – the ability of listening to, distinguishing between,
              changing, and expressing musical forms.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              6. Interpersonal – the ability to detect and distinguish
              differences in other people's emotions, intents, motives, and
              emotions.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              7. Intrapersonal – self-awareness and the ability to behave
              adaptively based on that awareness.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              8. Naturalist – the ability in recognizing and classifying the
              many species—flora and fauna—that make up an individual's
              surroundings.
            </Typography>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default TestDescription;
