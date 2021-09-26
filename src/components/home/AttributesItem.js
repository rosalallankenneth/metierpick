import React from "react";
import { Grid, Typography, Box, ButtonBase } from "@material-ui/core";

const AttributesItem = props => {
  const { attr, classes, handleOpen, setModalTitle, setModalDesc } = props;

  const handleAttrClick = () => {
    setModalTitle(attr.name);
    setModalDesc(attr.description);
    handleOpen();
  };

  return (
    <>
      <Grid item md={4} xs={12} key={attr.name}>
        <ButtonBase className={classes.attrItem} onClick={handleAttrClick}>
          <Box p={2}>
            <Typography align="center">
              <img
                className={classes.attrIcons}
                src={attr.icon}
                alt={`icon-${attr.name}`}
              />
            </Typography>

            <Typography
              className={classes.attrTitle}
              variant="body1"
              align="center"
            >
              <b>{attr.name}</b>
            </Typography>

            <Typography
              className={classes.attrRating}
              variant="h6"
              align="center"
              color="primary"
            >
              <b>{attr.rating.toFixed(2)}</b>
            </Typography>
          </Box>
        </ButtonBase>
      </Grid>
    </>
  );
};

export default AttributesItem;
