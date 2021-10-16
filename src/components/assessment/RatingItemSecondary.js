import React from "react";

// material ui imports
import { Typography, Box, Grid, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { categories } from "../../data/categoriesInformation";

const useStyles = makeStyles(theme => ({
  categoryIcon: {
    width: "100%"
  },
  itemContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  ratingText: {
    fontSize: 18
  },
  itemIcon: {
    borderRadius: "50%",
    "&:hover": {
      opacity: 0.8
    }
  }
}));

const RatingDescription = props => {
  const {
    name,
    rating,
    handleOpenModal,
    setModalTitle,
    setModalDescription,
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
    setModalDescription(description);
    setModalWaysToLearn(waysToLearn);
    handleOpenModal();
  };

  return (
    <Grid item md={2} sm={3} xs={4}>
      <Box className={classes.itemContainer}>
        <ButtonBase
          className={classes.itemIcon}
          onClick={handleClickMoreInformation}
        >
          <img
            src={icon}
            alt={`icon-${name}`}
            className={classes.categoryIcon}
          />
        </ButtonBase>
        <Box mt={1}>
          <Typography className={classes.ratingText} align="center">
            <b>{rating}</b>
          </Typography>
          <Typography variant="body2" align="center">
            {title}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default RatingDescription;
