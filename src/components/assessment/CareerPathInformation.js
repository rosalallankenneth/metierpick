import React from "react";
import { Close } from "@material-ui/icons";
import {
  Box,
  Typography,
  Paper,
  Grid,
  ButtonBase,
  TextField
} from "@material-ui/core";

const CareerPathInformation = props => {
  const { isVisible, pathName, handlePathInfoClose } = props;

  return (
    <>
      <Paper
        style={{ display: isVisible ? "flex" : "none", background: "#EEFFEE" }}
      >
        <Box p={2} style={{ width: "100%" }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography>
              <b>Program Information</b>
            </Typography>
            <ButtonBase onClick={handlePathInfoClose}>
              <Close />
            </ButtonBase>
          </Grid>

          <Box mt={2}>
            <TextField
              value={pathName}
              fullWidth
              name="PSCED_Name"
              label="PSCED Name"
              type="text"
              variant="outlined"
              InputProps={{ readOnly: true }}
            />
            <TextField
              value=""
              fullWidth
              margin="normal"
              name="Full_Title"
              label="Full Title"
              type="text"
              variant="outlined"
              InputProps={{ readOnly: true }}
            />
            <TextField
              value=""
              fullWidth
              margin="normal"
              name="Description"
              label="Description"
              type="text"
              variant="outlined"
              InputProps={{ readOnly: true }}
            />
          </Box>

          <Box mt={2}>
            <Typography variant="caption">
              *PSCED = Philippine Standard Classification of Education
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default CareerPathInformation;
