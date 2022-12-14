import React from "react";
import { Typography } from "@material-ui/core";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Metierpick {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
