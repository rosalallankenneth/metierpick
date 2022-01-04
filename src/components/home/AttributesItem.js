import React from "react";
import { Grid, Typography, Box, ButtonBase } from "@material-ui/core";

const AttributesItem = props => {
  const {
    attr,
    classes,
    handleOpen,
    setModalTitle,
    setModalDesc,
    setModalIcon,
    setModalWaysToLearn
  } = props;

  const handleAttrClick = () => {
    setModalTitle(attr.name);
    setModalDesc(attr.description);
    setModalIcon(attr.icon);
    setModalWaysToLearn(attr.waysToLearn);
    handleOpen();
  };

  return (
    <>
      <Grid item lg={3} md={4} xs={6} key={attr.name}>
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
              variant="body2"
              align="center"
            >
              <b>{attr.name}</b>
            </Typography>
          </Box>
        </ButtonBase>
      </Grid>
    </>
  );
};

export default AttributesItem;
