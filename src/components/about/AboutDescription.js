import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AboutCover from "../../assets/cover-about.jpg";

const useStyles = makeStyles(theme => ({
  coverImage: {
    width: "100%",
    marginBottom: "-5px"
  }
}));

const AboutDescription = () => {
  const classes = useStyles();
  return (
    <>
      <Paper>
        <Box p={3}>
          <Typography variant="body1" align="justify">
            <b>Metierpick</b> is a Decision Support System (DSS) designed to
            help students in discovering their dominant attributes (e.g.,
            Language, Mathematics, or Visualization) and use this as a factor in
            suggesting the most suitable career path for the students to support
            their career decision-making. The system also includes a dynamic
            mapping system that displays the distribution of enrollees of
            different college programs based on the inputs given by the
            students. This helps students in evaluating which is the most
            accessible or encouraging programs to enroll in among the suggested
            career paths by presenting their number of enrollees in specific
            locations of the map.
          </Typography>
        </Box>
        <img
          src={AboutCover}
          alt="cover-about"
          className={classes.coverImage}
        />
      </Paper>
    </>
  );
};

export default AboutDescription;
