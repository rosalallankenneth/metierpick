import React from "react";

// material ui components
import { Typography, List, ListItem } from "@material-ui/core";

const aboutMIsection = () => {
  return (
    <List>
      <ListItem>
        <Typography align="justify">
          <b>Multiple Intelligence (MI)</b> is a theory proposed by Howard
          Gardner in 1983 who referred to intelligence as a “bio-psychological
          potential” of humans to process specific types of information in
          different, distinct ways. It is in contrary to the traditional
          psychometric views of intelligence as the intellectual potential that
          can be measured by the concept of Intelligence Quotient (IQ) testing.
        </Typography>
      </ListItem>
      <ListItem>
        <Typography align="justify">
          Gardner proposed the existence of eight (8) distinct intelligences,
          namely:
        </Typography>
      </ListItem>
      <ListItem>
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
      </ListItem>
      <ListItem>
        <Typography variant="subtitle2">
          For more information, please see Dr. Armstrong's book entitled{" "}
          <b>"Multiple Intelligences in the Classroom"</b>.
        </Typography>
      </ListItem>
    </List>
  );
};

export default aboutMIsection;
