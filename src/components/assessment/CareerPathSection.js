import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CareerPathInformation from "./CareerPathInformation";
import PathList from "../../mapping-system/data/MindanaoCollegePrograms";

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
  const [pathTitle, setPathTitle] = useState("...");
  const [pathDescription, setPathDescription] = useState("...");

  const handlePathBtnClick = path => {
    const match = PathList.filter(p => p.PSCED_Name === path)[0];
    setPathName(path);
    setPathTitle(match.fullTitle);
    setPathDescription(match.description);
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
        pathTitle={pathTitle}
        pathDescription={pathDescription}
        handlePathInfoClose={handlePathInfoClose}
      />
    </>
  );
};

export default CareerPathSection;
