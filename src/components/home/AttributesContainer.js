import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { categories } from "../../data/categoriesInformation";

import AttributesItem from "./AttributesItem";
import bcgImgAttr from "../../assets/bcg-img-attr.jpg";

const topAttributes = [
  {
    name: "Logical-Mathematical",
    icon: categories.Logical_Mathematical[1],
    rating: 5.0
  },
  {
    name: "Spatial",
    icon: categories.Spatial[1],
    rating: 4.67
  },
  {
    name: "Linguistic",
    icon: categories.Linguistic[1],
    rating: 4.0
  }
];

const useStyles = makeStyles(theme => ({
  attrContainer: {
    backgroundColor: "#272932",
    backgroundImage: `url(${bcgImgAttr})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  bcgBlur: {
    background: "rgba(0, 0, 0, .7)"
  },
  attrIcons: {
    width: "50%",
    margin: "10px auto"
  },
  attrTitle: {
    color: "#eee"
  },
  attrRating: {
    color: "#FFD700"
  },
  attrItem: {
    "&:hover": {
      background: "rgba(0, 0, 0, .3)"
    },
    width: "100%"
  }
}));

const AttributesContainer = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.attrContainer}>
        <Box className={classes.bcgBlur} px={2}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {topAttributes.map(attr => {
              return (
                <AttributesItem key={attr.name} attr={attr} classes={classes} />
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AttributesContainer;
