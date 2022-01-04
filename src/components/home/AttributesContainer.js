import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { categories } from "../../data/categoriesInformation";

import AttributesItem from "./AttributesItem";
import InformationModal from "../global/InformationModal";
import bcgImgAttr from "../../assets/bcg-img-attr.jpg";
import ThinkIcon from "@material-ui/icons/Memory";
import LoveIcon from "@material-ui/icons/Favorite";
import NeedIcon from "@material-ui/icons/Explore";

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
  const [ModalIcon, setModalIcon] = useState(null);
  const [modalWaysToLearn, setModalWaysToLearn] = useState({
    think: "",
    love: "",
    learn: ""
  });

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
                        icon: categories[attr][1],
                        waysToLearn: categories[attr][2]
                      }}
                      classes={classes}
                      handleOpen={handleOpenModal}
                      setModalDesc={setModalDesc}
                      setModalTitle={setModalTitle}
                      setModalIcon={setModalIcon}
                      setModalWaysToLearn={setModalWaysToLearn}
                    />
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>

      <InformationModal open={openModal} handleClose={handleCloseModal}>
        {ModalIcon && (
          <Typography align="center">
            <img src={ModalIcon} alt="modal-icon" style={{ width: 100 }} />
          </Typography>
        )}
        <Typography align="center" variant="h6">
          {modalTitle}
        </Typography>
        <Box mt={3}>
          <Typography align="left" variant="body1">
            Long Description
          </Typography>
          <hr />
        </Box>
        <Box mt={1}>
          <Typography align="justify" variant="body2">
            {modalDesc}
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography align="left">
            People that are highly {modalTitle} ...
          </Typography>
          <hr />
        </Box>

        <TableContainer>
          <Table>
            <TableBody>
              {renderWaysToLearnItems(
                "Think",
                modalWaysToLearn.think,
                ThinkIcon
              )}
              {renderWaysToLearnItems("Love", modalWaysToLearn.love, LoveIcon)}
              {renderWaysToLearnItems("Need", modalWaysToLearn.need, NeedIcon)}
            </TableBody>
          </Table>
        </TableContainer>
      </InformationModal>
    </>
  );
};

const renderWaysToLearnItems = (title, description, RowIcon) => {
  return (
    <>
      <TableRow>
        <TableCell>
          <RowIcon />
        </TableCell>
        <TableCell>
          <Typography>{title}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{description}</Typography>
        </TableCell>
      </TableRow>
    </>
  );
};

export default AttributesContainer;
