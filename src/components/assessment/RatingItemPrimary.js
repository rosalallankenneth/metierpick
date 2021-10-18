import React from "react";

// material ui imports
import { Typography, Box, Grid, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { categories } from "../../data/categoriesInformation";

const useStyles = makeStyles(theme => ({
  ratingContainer: {
    "&:hover": {
      background: "#eee"
    },
    borderRadius: 20,
    width: "100%"
  },
  categoryIcon: {
    width: "100%"
  },
  ratingValue: {
    fontWeight: 700,
    fontSize: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 16
    }
  },
  ratingBar: {
    background: theme.palette.primary.main,
    height: 5
  },
  ratingText: {
    width: "100%"
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
  const shortDescription = description.substring(
    0,
    description.indexOf(". ") + 1
  );
  const icon = category[1];
  const waysToLearn = category[2];
  const title = name.replace("_", "-");
  const ratingBarWidth = ((rating / 5) * 100).toFixed(0);

  const handleClickMoreInformation = () => {
    setModalIcon(icon);
    setModalTitle(title);
    setModalDescription(description);
    setModalWaysToLearn(waysToLearn);
    handleOpenModal();
  };

  return (
    <ButtonBase onClick={handleClickMoreInformation} style={{ width: "100%" }}>
      <Box p={2} className={classes.ratingContainer}>
        <Grid container spacing={2}>
          <Grid item lg={2} sm={3} xs={4}>
            <Typography>
              <img
                src={icon}
                alt={`icon-${name}`}
                className={classes.categoryIcon}
              />
            </Typography>
          </Grid>

          <Grid item lg={10} sm={9} xs={8}>
            <Box>
              <Typography className={classes.ratingValue} align="left">
                {parseFloat(rating).toFixed(2)}
              </Typography>
              <Box my={1}>
                <div
                  className={classes.ratingBar}
                  style={{ width: `${ratingBarWidth}%` }}
                ></div>
              </Box>
              <Typography
                variant="body1"
                className={classes.ratingText}
                align="left"
              >
                <b>{title}</b>
              </Typography>
              <Box mt={1}>
                <Typography variant="subtitle2" align="justify">
                  {shortDescription}
                </Typography>
              </Box>

              <Box mt={1}>
                <Typography
                  variant="body2"
                  className={classes.ratingText}
                  color="primary"
                  align="left"
                >
                  Select for more information
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ButtonBase>
  );
};

export default RatingDescription;
