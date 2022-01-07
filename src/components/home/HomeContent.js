import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getMostRecentResults } from "../../firebase/assessment";
import { formatResultsData } from "../../utils/formatResultsData";
import { toDateTime } from "../../utils/toDateTime";
import { Link } from "react-router-dom";
import {
  Paper,
  Box,
  Grid,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";
import ContentTitleBar from "../global/ContentTitleBar";
import AttributesContainer from "./AttributesContainer";
import Map from "../../mapping-system/pages/Map";
import BarChart from "./BarChart";
import { initDecisionTree } from "../../utils/initDecisionTree";
import { ratingToDT } from "../../utils/ratingToDT";
import CareerPathSection from "../assessment/CareerPathSection";
import MainMap from "../../mapping-system/pages/MainMap";
import { datasetDT } from "../../data/datasetDT";
import { getCurrentUserDocument } from "../../firebase/firestore";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/actions/authActions";

const getRecentRatingsFromDB = async (
  email,
  setResults,
  setPaths,
  setLoading,
  setPathsForMap
) => {
  const results = await getMostRecentResults(email);
  let ratingsData = {};
  let pathsForMap = [];

  if (results !== null) {
    ratingsData = formatResultsData(results);
    const topRatings = constructComicForDT(ratingsData.ratings);
    const dtComic = ratingToDT(topRatings);

    const dataFilter = datasetDT.filter(d => {
      const found1 =
        dtComic.attr_1 === d.attr_1 ||
        dtComic.attr_2 === d.attr_1 ||
        dtComic.attr_3 === d.attr_1;
      const found2 =
        dtComic.attr_1 === d.attr_2 ||
        dtComic.attr_2 === d.attr_2 ||
        dtComic.attr_3 === d.attr_2;
      const found3 =
        dtComic.attr_1 === d.attr_3 ||
        dtComic.attr_2 === d.attr_3 ||
        dtComic.attr_3 === d.attr_3;
      if (found1 && found2 && found3) {
        return true;
      } else {
        return false;
      }
    });

    const paths = initDecisionTree(dtComic);
    const pathsKeys = Object.keys(paths).map(path => path);

    pathsForMap = [pathsKeys[0], pathsKeys[1], pathsKeys[2]];
    const pathsFilter = pathsKeys.filter(p => {
      let found = dataFilter.some(d => d.path === p);
      return found;
    });
    if (pathsFilter.length >= 3) {
      pathsForMap = [pathsFilter[0], pathsFilter[1], pathsFilter[2]];
    }
  } else {
    ratingsData = null;
    pathsForMap = null;
  }

  setResults(ratingsData);
  setPaths(pathsForMap);
  setPathsForMap(pathsForMap);
  setLoading(false);
};

const constructComicForDT = ratings => {
  // sort all ratings by highest value
  const sortedRatings = Object.entries(ratings).sort((a, b) => b[1] - a[1]);
  let topRatings = [];
  let otherRatings = [];

  // filter ratings based on the top (at least) 3 highest ratings
  sortedRatings.forEach(rate => {
    if (rate[1] >= sortedRatings[2][1]) {
      topRatings = [...topRatings, rate];
    } else {
      otherRatings = [...otherRatings, rate];
    }
  });

  return topRatings;
};

const UserInfoToState = async (dispatch, email, setLastName, setFirstName) => {
  const userInfo = await getCurrentUserDocument(email);
  setLastName(
    userInfo.lastname.charAt(0).toUpperCase() + userInfo.lastname.slice(1)
  );
  setFirstName(
    userInfo.firstname.charAt(0).toUpperCase() + userInfo.firstname.slice(1)
  );
  dispatch(setUserInfo(userInfo));
};

const useStyles = makeStyles(theme => ({
  graphContainer: {
    display: "block",
    overflow: "scroll",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

const HomeContent = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [graphLoading, setGraphLoading] = useState(true);
  const [recentRatings, setRecentRatings] = useState(null);
  const [paths, setPaths] = useState(null);
  const [pathsForMap, setPathsForMap] = useState([]);
  const [fullListMap, setFullListMap] = useState(true);

  const [ifModalOpen, setIfModalOpen] = useState(false);
  const handleModalClose = () => {
    setIfModalOpen(false);
  };

  useEffect(() => {
    UserInfoToState(dispatch, email, setLastName, setFirstName);
    getRecentRatingsFromDB(
      email,
      setRecentRatings,
      setPaths,
      setGraphLoading,
      setPathsForMap
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const pathList = Object.keys(paths).map(path => path);
  // console.log(pathList);

  return (
    <>
      <ContentTitleBar title="Home" />
      <MainMap
        open={ifModalOpen}
        handleClose={handleModalClose}
        pathList={pathsForMap}
        fullListMap={fullListMap}
      />

      <Box mt={3}>
        <Paper>
          <Box>
            <Box p={3}>
              <Typography variant="h6">Suitable Career Paths</Typography>
              <Box mt={1}>
                {!graphLoading && recentRatings !== null ? (
                  <Typography variant="body2" align="justify">
                    {firstName} {lastName}, these are your most suitable career
                    paths (college programs) based on your most recent
                    assessment (
                    <i>{toDateTime(recentRatings.recordedAt.seconds).date}</i> )
                  </Typography>
                ) : (
                  <Typography variant="body2" align="justify">
                    Take your first assessment now to know your most suitable
                    career paths.
                  </Typography>
                )}
                .
                <Box>
                  {!graphLoading && recentRatings !== null ? (
                    <CareerPathSection
                      paths={paths}
                      setFullListMap={setFullListMap}
                      setIfModalOpen={setIfModalOpen}
                    />
                  ) : (
                    <Button
                      component={Link}
                      to="/take-assessment"
                      variant="contained"
                      color="primary"
                    >
                      Take Assessment
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box mt={3}>
        <Grid container spacing={2}>
          <Grid item lg={7} xs={12}>
            <Paper>
              <Box p={2} className={classes.graphContainer}>
                {!graphLoading && recentRatings !== null ? (
                  <BarChart ratings={recentRatings.ratings} />
                ) : (
                  <BarChart ratings={null} />
                )}
              </Box>
            </Paper>
          </Grid>

          <Grid item lg={5} xs={12}>
            <Paper style={{ height: "100%", minHeight: 300 }}>
              <Box p={1} style={{ height: 50 }}>
                <Typography variant="caption" align="justify">
                  <Button
                    onClick={() => {
                      setFullListMap(true);
                      setIfModalOpen(true);
                    }}
                    color="primary"
                    variant="outlined"
                    fullWidth
                    style={{ height: "100%" }}
                  >
                    View Mapping
                  </Button>
                </Typography>
              </Box>
              <Box style={{ height: "calc(100% - 50px)" }}>
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
