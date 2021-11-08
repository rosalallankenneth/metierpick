import React, { useState } from "react";

// material ui imports
import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid
} from "@material-ui/core";
import ThinkIcon from "@material-ui/icons/Memory";
import LoveIcon from "@material-ui/icons/Favorite";
import NeedIcon from "@material-ui/icons/Explore";

// custom components
import RatingItemSecondary from "./RatingItemSecondary";
import InformationModal from "../global/InformationModal";

const RatingSectionSecondary = prop => {
  const { ratings } = prop;

  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("Title");
  const [modalDescription, setModalDescription] = useState("Description");
  const [modalWaysToLearn, setModalWaysToLearn] = useState({
    think: "",
    love: "",
    learn: ""
  });
  const [ModalIcon, setModalIcon] = useState(null);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Typography variant="h6">Your Rating on other Intelligences</Typography>
      <Box mt={1}>
        <Typography variant="body2" align="justify">
          These categories are considered as your inferior attributes or skills
          that you are less good and interested. Click for an icon for more
          information.
        </Typography>
      </Box>

      <Box mt={3}>
        <Grid container spacing={3}>
          {// map through the rating values
          ratings.map(rate => {
            return (
              <RatingItemSecondary
                key={rate[0]}
                name={rate[0]}
                rating={rate[1]}
                handleOpenModal={handleOpenModal}
                setModalTitle={setModalTitle}
                setModalDescription={setModalDescription}
                setModalWaysToLearn={setModalWaysToLearn}
                setModalIcon={setModalIcon}
              />
            );
          })}
        </Grid>
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
        <Box my={1}>
          <Typography align="justify" variant="body2">
            {modalDescription}
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography align="left">
            People that are highly {modalTitle} . . .
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
          <Typography variant="body2">{title}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body2">{description}</Typography>
        </TableCell>
      </TableRow>
    </>
  );
};
export default RatingSectionSecondary;
