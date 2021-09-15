import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";

const FunFactSection = () => {
  return (
    <>
      <Paper>
        <Box p={3}>
          <Typography variant="h6" align="justify">
            Fun Fact
          </Typography>
          <Box mt={1}>
            <Typography variant="body1" align="justify">
              <b>Metierpick</b> is a coined term of the words namely,{" "}
              <b>Metier</b> and <b>Pick</b>. The word <i>Metier</i> translates
              to various definitions such as, <i>“a profession”</i>,{" "}
              <i>“an occupation that one is good at”</i>, or{" "}
              <i>“an advantageous characteristic”</i>, but all of these can be
              interpreted to the meaning of{" "}
              <b>
                <i>Career</i>
              </b>
              . Whereas, <i>Pick</i> is another word for{" "}
              <b>
                <i>Decision</i>
              </b>{" "}
              or{" "}
              <b>
                <i>Decide</i>
              </b>
              . Hence, Metierpick means <b>Career Decision</b>, which is the
              primary purpose of this decision support system.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default FunFactSection;
