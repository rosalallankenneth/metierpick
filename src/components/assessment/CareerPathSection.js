import React, { useState } from "react";
import { Box, Typography, Button } from "@material-ui/core";
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
  const [pathName, setPathName] = useState(". . .");

  const handlePathBtnClick = path => {
    setPathName(path);
    setIsVisible(true);
  };
  const handlePathInfoClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Typography variant="h6">Career Path Suggestions</Typography>
      <Box mt={1} mb={2}>
        <Typography variant="body2" align="justify">
          These are your most dominant attributes or the skills that you excel
          and get interested the most. This is based on the ratings that you got
          from the assessment, with a range of 5.00 (highest) to 1.00 (lowest).
        </Typography>
      </Box>
      <CareerPathInformation
        isVisible={isVisible}
        pathName={pathName}
        handlePathInfoClose={handlePathInfoClose}
      />

      <Box mt={3}>
        <Box mt={1}>
          {paths._1.map(path => (
            <Button
              key={path}
              className={classes.pathBtn}
              variant="outlined"
              onClick={() => handlePathBtnClick(path)}
            >
              <b>{path}</b>
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CareerPathSection;
