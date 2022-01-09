import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/CloseRounded";
import { ButtonBase } from "@material-ui/core";

export default function TransitionsModal(props) {
  const { open, handleClose, fullScreen, children, ifMap } = props;

  const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      maxHeight: fullScreen === undefined ? "90vh" : "100vh",
      width: fullScreen === undefined ? "90vw" : "100vw",
      overflow: "auto",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: fullScreen === undefined ? theme.spacing(3) : 0,
      [theme.breakpoints.up("sm")]: {
        margin: fullScreen === undefined ? theme.spacing(5) : 0
      }
    }
  }));
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          {!ifMap && (
            <ButtonBase onClick={handleClose}>
              <CloseIcon />
            </ButtonBase>
          )}
          {children}
        </div>
      </Fade>
    </Modal>
  );
}
