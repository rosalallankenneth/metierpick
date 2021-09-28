import React from "react";

// material ui imports
import { Typography, Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { categories } from "../../data/categoriesInformation";

const useStyles = makeStyles(theme => ({
  categoryIcon: {
    width: "100%"
  },
  ratingValue: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14
    }
  }
}));

const RatingDescription = props => {
  const {
    name,
    rating,
    handleOpenModal,
    setModalTitle,
    setModalWaysToLearn,
    setModalIcon
  } = props;

  const classes = useStyles();

  // extract the specified category
  let category = [];
  Object.keys(categories).forEach(key => {
    if (key === name) category = categories[key];
  });
  const description = category[0];
  const icon = category[1];
  const waysToLearn = category[2];
  const title = name.replace("_", "-");

  const handleClickMoreInformation = () => {
    setModalIcon(icon);
    setModalTitle(title);
    setModalWaysToLearn(waysToLearn);
    handleOpenModal();
  };

  return (
    <Box mt={3}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography>
            <img
              src={icon}
              alt={`icon-${name}`}
              className={classes.categoryIcon}
            />
          </Typography>
          <Typography className={classes.ratingValue}>{rating}</Typography>
        </Grid>

        <Grid item xs={10}>
          <Box>
            <Typography variant="body1">
              <b>{title}</b>
            </Typography>
            <Box mt={1}>
              <Typography variant="subtitle2" align="justify">
                {description}
              </Typography>
            </Box>

            <Box mt={1}>
              <Button
                color="primary"
                variant="outlined"
                onClick={handleClickMoreInformation}
              >
                More Information
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RatingDescription;
