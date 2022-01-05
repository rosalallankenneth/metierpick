import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import { Typography, Box } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const { open, handleClose, province, enrollees, path, region } = props;

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box px={3}>
          <Box py={3}>
            <Typography variant="h6">{province}</Typography>
            <Typography variant="caption">{region}</Typography>
          </Box>
          <DialogContent style={{ marginTop: "-10px" }}>
            <Box px={3}>
              <Typography variant="h3" align="center">
                {enrollees}
              </Typography>
              <Box mt={2}>
                <Typography variant="subtitle2" align="center">
                  Enrolled Students
                </Typography>
              </Box>
              <Typography variant="subtitle1" align="center" color="primary">
                {path}
              </Typography>
            </Box>
          </DialogContent>
        </Box>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
