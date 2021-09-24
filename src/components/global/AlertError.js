import React from "react";

// material ui imports
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "40px",
    right: "20px",
    maxWidth: "300px",
    width: "100%",
    zIndex: 500,
    boxShadow: "5px 5px 30px #535353"
  }
});

const AlertError = props => {
  const classes = useStyles();
  const { onClose, message } = props;

  return (
    <Alert
      severity="error"
      className={classes.root}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={onClose}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      {message}
    </Alert>
  );
};

export default AlertError;
