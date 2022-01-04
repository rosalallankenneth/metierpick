import React from "react";

// material ui components
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// custom components
import AboutMI from "./AboutMIsection";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: "#d2ffd8"
  }
}));

const AccordionDescription = () => {
  const classes = useStyles();

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.header}
        >
          <Typography variant="h6">
            About Multiple Intelligence Theory
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AboutMI />
        </AccordionDetails>
      </Accordion>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          className={classes.header}
        >
          <Typography variant="h6">
            How can MI assessment help me in my career decision-making?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Multiple Intelligence assessment is used by the decision support system to profile your most dominant attributes (a.k.a. intelligences)
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </>
  );
};

export default AccordionDescription;
