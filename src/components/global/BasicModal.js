import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    maxHeight: "90vh",
    overflow: "auto",
    width: "90vw",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(5)
    },
    [theme.breakpoints.up("md")]: {
      width: "50vw"
    }
  }
}));

export default function TransitionsModal(props) {
  const { open, handleClose, title, description } = props;
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
          <h2 id="modal-title">{title}</h2>
          <p id="modal-description" style={{ textAlign: "justify" }}>
            {description}
          </p>
        </div>
      </Fade>
    </Modal>
  );
}
