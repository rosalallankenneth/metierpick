import React from "react";

// material ui components
import { Paper, Box, Grid, Typography } from "@material-ui/core";

// custom components
import ContentTitleBar from "../global/ContentTitleBar";
import AttributesContainer from "./AttributesContainer";
import Map from "../../mapping-system/pages/Map";
import BarChart from "./BarChart";

const HomeContent = () => {
  return (
    <>
      <ContentTitleBar title="Home" />
      <Box mt={3}>
        <Paper>
          <Box>
            <Box p={3}>
              <Typography variant="h6">Suitable Career Path</Typography>
              <Box mt={1}>
                <Typography variant="body2" align="justify">
                  Based on your most recent assessment <i>(November 7, 2021)</i>
                  .
                </Typography>
              </Box>
            </Box>

            <Box mt={1}></Box>
          </Box>
        </Paper>
      </Box>

      <Box mt={3}>
        <Grid container spacing={2}>
          <Grid item lg={7} xs={12}>
            <Paper>
              <Box p={2} style={{ overflow: "scroll" }}>
                <BarChart />
              </Box>
            </Paper>
          </Grid>

          <Grid item lg={5} xs={12}>
            <Paper style={{ height: "100%", minHeight: 300 }}>
              <Box p={1} style={{ height: "10%" }}>
                <Typography variant="caption" align="justify">
                  Mapping of college programs by province.
                </Typography>
              </Box>
              <Box style={{ height: "90%" }}>
                <Map />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box mt={3}>
        <Paper>
          <AttributesContainer />
        </Paper>
      </Box>
    </>
  );
};

export default HomeContent;
