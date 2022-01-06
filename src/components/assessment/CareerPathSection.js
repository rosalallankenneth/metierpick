import React, { useState } from "react";
import { Box, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CareerPathInformation from "./CareerPathInformation";
import PathList from "../../mapping-system/data/MindanaoCollegePrograms";
import { useDispatch } from "react-redux";
import { setPathSelect } from "../../redux/actions/mapActions";

const useStyles = makeStyles(theme => ({
  pathBtn: {
    height: "100%"
  }
}));

const CareerPathSection = props => {
  const { paths, setFullListMap, setIfModalOpen } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);
  const [pathName, setPathName] = useState("...");
  const [pathTitle, setPathTitle] = useState("...");
  const [pathDescription, setPathDescription] = useState("...");

  const handlePathBtnClick = path => {
    const match = PathList.filter(p => p.PSCED_Name === path)[0];
    dispatch(setPathSelect(path));
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
          <Grid container spacing={2}>
            {Object.keys(paths).map(path => (
              <Grid key={path} item xs={12} md={4} sm={6}>
                <Button
                  key={path}
                  className={classes.pathBtn}
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={() => handlePathBtnClick(path)}
                >
                  <b>{path}</b>
                </Button>
              </Grid>
            ))
            // paths._1.map(path => (
            // <Button
            //   key={path}
            //   className={classes.pathBtn}
            //   variant="contained"
            //   color="secondary"
            //   onClick={() => handlePathBtnClick(path)}
            // >
            //   <b>{path}</b>
            // </Button>
            // ))
            }
          </Grid>
        </Box>
      </Box>

      <CareerPathInformation
        isVisible={isVisible}
        pathName={pathName}
        pathTitle={pathTitle}
        pathDescription={pathDescription}
        handlePathInfoClose={handlePathInfoClose}
        setFullListMap={setFullListMap}
        setIfModalOpen={setIfModalOpen}
      />
    </>
  );
};

export default CareerPathSection;
