import React, { useState } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { categories } from "../../data/categoriesInformation";

import AttributesItem from "./AttributesItem";
import BasicModal from "../global/BasicModal";
import bcgImgAttr from "../../assets/bcg-img-attr.jpg";

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
    width: "100%",
    borderRadius: 10
  }
}));

const AttributesContainer = () => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("Title");
  const [modalDesc, setModalDesc] = useState("Description");

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Box p={3}>
        <Typography variant="h6">Attributes Description</Typography>
        <Box mt={1}>
          <Typography variant="body2" align="justify">
            Learn more about the different types of Intelligences.
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box mt={1}>
          <Box className={classes.attrContainer}>
            <Box className={classes.bcgBlur} p={2}>
              <Grid container justifyContent="center" alignItems="center">
                {Object.keys(categories).map(attr => {
                  return (
                    <AttributesItem
                      key={attr}
                      attr={{
                        name: attr.replace("_", "-"),
                        description: categories[attr][0],
                        icon: categories[attr][1]
                      }}
                      classes={classes}
                      handleOpen={handleOpenModal}
                      setModalDesc={setModalDesc}
                      setModalTitle={setModalTitle}
                    />
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>

      <BasicModal
        open={openModal}
        handleClose={handleCloseModal}
        title={modalTitle}
        description={modalDesc}
      />
    </>
  );
};

export default AttributesContainer;
