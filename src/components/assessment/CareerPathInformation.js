import React from "react";
import { Close } from "@material-ui/icons";
import {
  Box,
  Typography,
  Paper,
  Grid,
  ButtonBase,
  TextField,
  TextareaAutosize
} from "@material-ui/core";

const CareerPathInformation = props => {
  const {
    isVisible,
    pathName,
    pathTitle,
    pathDescription,
    handlePathInfoClose
  } = props;

  return (
    <>
      <Box mt={3}>
        <Paper
          style={{
            display: isVisible ? "flex" : "none",
            background: "#EEFFEE"
          }}
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
                value={pathTitle}
                fullWidth
                margin="normal"
                name="Full_Title"
                label="Full Title"
                type="text"
                variant="outlined"
                InputProps={{ readOnly: true }}
              />
              <Typography variant="caption">Description</Typography>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Description"
                value={pathDescription}
                style={{
                  width: "100%",
                  padding: 10,
                  background: "transparent",
                  fontSize: 16,
                  font: "inherit"
                }}
                contentEditable={false}
              />
            </Box>

            <Box mt={2}>
              <Typography variant="caption">
                *PSCED = Philippine Standard Classification of Education
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default CareerPathInformation;
