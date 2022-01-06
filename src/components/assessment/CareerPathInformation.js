import React from "react";
import { Close } from "@material-ui/icons";
import {
  Box,
  Typography,
  Paper,
  Grid,
  ButtonBase,
  Button
} from "@material-ui/core";

const CareerPathInformation = props => {
  const {
    isVisible,
    pathName,
    // pathTitle,
    pathDescription,
    handlePathInfoClose,
    setFullListMap,
    setIfModalOpen
  } = props;

  const viewMapInPath = () => {
    setFullListMap(false);
    setIfModalOpen(true);
  };

  return (
    <>
      <Box mt={3}>
        <Paper
          style={{
            display: isVisible ? "flex" : "none",
            background: "#eeefff"
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
              <Box p={1} mb={2} style={{ background: "#fff" }}>
                <Typography variant="caption">
                  <strong>PSCED Name</strong>
                </Typography>
                <Typography variant="subtitle1">{pathName}</Typography>
              </Box>
              {/* <Box p={1} mb={2} style={{ background: "#fff" }}>
                <Typography variant="caption">Full Title</Typography>
                <Typography variant="subtitle1">{pathTitle}</Typography>
              </Box> */}
              <Box p={1} mb={2} style={{ background: "#fff" }}>
                <Typography variant="caption">
                  <strong>Description</strong>
                </Typography>
                <Typography variant="subtitle1" align="justify">
                  {pathDescription}
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              fullWidth
              color="primary"
              onClick={viewMapInPath}
            >
              View Mapping for {pathName}
            </Button>

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
