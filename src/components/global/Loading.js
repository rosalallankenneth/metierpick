import React from "react";
import LoadingAnimation from "../../assets/splashscreen-icon.gif";
import { Typography } from "@material-ui/core";

const Loading = () => {
  return (
    <Typography align="center">
      <img
        src={LoadingAnimation}
        alt="loading-animation"
        style={{ width: 70 }}
      />
    </Typography>
  );
};

export default Loading;
