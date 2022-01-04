import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CareerPathInformation from "./CareerPathInformation";

const useStyles = makeStyles(theme => ({
  pathBtn: {
    marginRight: 5
  }
}));

const CareerPathSection = props => {
  const { paths } = props;
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);
  const [pathName, setPathName] = useState("...");

  const handlePathBtnClick = path => {
    setPathName(path);
    setIsVisible(true);
  };
  const handlePathInfoClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Box>
        <Box mt={1}>
          {paths._1.map(path => (
            <Button
              key={path}
              className={classes.pathBtn}
              variant="contained"
              color="secondary"
              onClick={() => handlePathBtnClick(path)}
            >
              <b>{path}</b>
            </Button>
          ))}
        </Box>
      </Box>

      <CareerPathInformation
        isVisible={isVisible}
        pathName={pathName}
        handlePathInfoClose={handlePathInfoClose}
      />
    </>
  );
};

export default CareerPathSection;
