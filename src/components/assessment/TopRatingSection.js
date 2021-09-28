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
  TableHead
} from "@material-ui/core";
import ThinkIcon from "@material-ui/icons/Memory";
import LoveIcon from "@material-ui/icons/Favorite";
import NeedIcon from "@material-ui/icons/Explore";

// custom components
import RatingDescription from "./RatingDescription";
import InformationModal from "../global/InformationModal";

const TopRatingSection = prop => {
  const { ratings } = prop;

  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("Title");
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
      <Typography variant="h6">Your Top-Rated Intelligences</Typography>
      <Box mt={1}>
        <Typography variant="body1" align="justify">
          These are your most dominant attributes or the skills that you excel
          and get interested the most. This is based on the ratings that you got
          from the assessment, with a range of 5.00 (highest) to 1.00 (lowest).
        </Typography>
      </Box>

      <Box mt={2}>
        {// map through the rating values
        ratings.map(rate => {
          return (
            <RatingDescription
              key={rate[0]}
              name={rate[0]}
              rating={rate[1]}
              handleOpenModal={handleOpenModal}
              setModalTitle={setModalTitle}
              setModalWaysToLearn={setModalWaysToLearn}
              setModalIcon={setModalIcon}
            />
          );
        })}
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

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  <Typography align="left">
                    People that are highly {modalTitle} ...
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>

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
export default TopRatingSection;
