import React from "react";
import { useDispatch } from "react-redux";
import { setResults } from "../../redux/actions/assessmentActions";
import { useHistory } from "react-router-dom";

import { Paper, Box, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { toDateTime } from "../../utils/toDateTime";

const useStyles = makeStyles(theme => ({
  itemPaper: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      background: theme.palette.secondary.main
    }
  },
  itemPaperInC: {
    backgroundColor: "#eee",
    "&:hover": {
      background: "#ddd"
    }
  },
  itemContainer: {
    width: "100%",
    textAlign: "left"
  },
  subText: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const AssessmentTiles = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { incomplete, resultsData } = props;
  const { recordedAt } = resultsData;
  const dateTime = toDateTime(recordedAt.seconds);

  const handleTileClick = () => {
    dispatch(setResults(resultsData));
    history.push("/assessment-results");
  };

  return (
    <>
      <Paper
        className={incomplete ? classes.itemPaperInC : classes.itemPaper}
        onClick={handleTileClick}
      >
        <ButtonBase className={classes.itemContainer}>
          <Box p={2} className={classes.itemContainer}>
            <Typography variant="subtitle2">
              {dateTime.date} — {incomplete ? "Unfinished" : "Completed"}
            </Typography>
            <Box className={classes.subText}>
              <Typography variant="caption">{dateTime.time}</Typography>
              <Typography variant="caption">Select to view</Typography>
            </Box>
          </Box>
        </ButtonBase>
      </Paper>
    </>
  );
};

export default AssessmentTiles;
