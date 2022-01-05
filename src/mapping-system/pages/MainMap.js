import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from "@material-ui/core";
import LeafletMap from "../components/LeafletMap";
import InformationModal from "../../components/global/InformationModal";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import ListRoundedIcon from "@material-ui/icons/Assessment";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { setPathSelect } from "../../redux/actions/mapActions";
import CareerPathList from "../data/MindanaoCollegePrograms";
import AboutPopup from "../components/AboutPopup";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(theme => ({
  mapHeader: {
    backgroundColor: theme.palette.secondary.main,
    height: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    color: "#eee",
    fontWeight: "700"
  },
  closeMapBtn: {
    height: "100%",
    color: "#eee"
  },
  mapContainer: { height: "calc(100vh - 50px)", width: "100vw" },
  mapFooter: {
    backgroundColor: "transparent",
    height: 80,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 2000,
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0
  },
  footerFormControl: {
    backgroundColor: "#fff",
    "&:hover,&:focus,&:active": {
      backgroundColor: "#fff"
    }
  },
  footerBtnContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  footerBtn: {
    cursor: "pointer",
    width: 40,
    height: 40
  }
  // footerBtnContainerSmall: {
  //   display: "none",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "absolute",
  //     bottom: 100,
  //     right: 0
  //   }
  // }
}));

const MainMap = props => {
  const { open, handleClose } = props;
  const [openAbout, setOpenAbout] = useState(false);
  const [openStats, setOpenStats] = useState(false);
  const dispatch = useDispatch();
  const pathSelect = useSelector(state => state.map.pathSelect);
  const classes = useStyles();

  useEffect(() => {
    dispatch(setPathSelect("Accountancy"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCloseInfo = () => {
    setOpenAbout(false);
    setOpenStats(false);
  };
  const handleOpenAbout = () => {
    setOpenAbout(true);
  };

  const handleOpenStats = () => {
    setOpenStats(true);
  };

  return (
    <>
      <InformationModal open={open} handleClose={handleClose} fullScreen={true}>
        <Box className={classes.mapHeader} pl={3}>
          <Typography className={classes.headerText}>Mapping System</Typography>
          <Button onClick={() => handleClose()} className={classes.closeMapBtn}>
            <CloseRoundedIcon />
          </Button>
        </Box>
        <Box className={classes.mapContainer}>
          <LeafletMap pathSelect={pathSelect} />
        </Box>
        <Box className={classes.mapFooter} px={2}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
                variant="filled"
                className={classes.footerFormControl}
              >
                <InputLabel id="demo-simple-select-label">
                  Career Path
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pathSelect}
                  label="Career Path"
                  className={classes.footerFormControl}
                  onChange={e => dispatch(setPathSelect(e.target.value))}
                >
                  {CareerPathList.map(path => (
                    <MenuItem key={path.PSCED_Name} value={path.PSCED_Name}>
                      {path.PSCED_Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} className={classes.footerBtnContainer}>
              <Typography align="right">
                <ListRoundedIcon
                  className={classes.footerBtn}
                  onClick={() => handleOpenStats()}
                />
                <InfoRoundedIcon
                  className={classes.footerBtn}
                  onClick={() => handleOpenAbout()}
                />
              </Typography>
            </Grid>
          </Grid>
          {/* <Box className={classes.footerBtnContainerSmall}>
            <Typography align="right">
              <InfoRoundedIcon style={{ width: 40, height: 40 }} />
            </Typography>
          </Box> */}
        </Box>
      </InformationModal>

      <AboutPopup open={openAbout} handleClose={handleCloseInfo}>
        <DialogTitle>About Mapping System</DialogTitle>
        <DialogContent style={{ marginTop: "-10px" }}>
          <Typography variant="subtitle2" align="justify">
            The mapping system is one of the primary features of Metierpick DSS.
            This functionality provides dynamic mapping and visualization of
            college enrollees distribution per province in Mindanao, given the
            specified college program or discipline. The data in use is acquired
            from the Philippines' Commission on Higher Education (CHED) online
            statistics that is available{" "}
            <a
              href="https://ched.gov.ph/statistics/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </Typography>
          <Box mt={2}>
            <Typography variant="subtitle1" align="justify">
              Notes
            </Typography>
          </Box>
          <Box px={2} mt={1}>
            <Typography variant="subtitle2" align="justify">
              1. The data used for the enrollees statistics is presented as
              compiled by the OPRKM-Knowledge Management Division based on the
              submission of higher education institutions as of October 08,
              2020. This data includes pre-baccalaureaute to doctoral programs.
            </Typography>
            <Typography variant="subtitle2" align="justify">
              2. Data may be updated at any point in time without prior
              notification to the end-user.
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            align="center"
            color="primary"
          ></Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseInfo}>Close</Button>
        </DialogActions>
      </AboutPopup>

      <AboutPopup open={openStats} handleClose={handleCloseInfo}>
        <DialogTitle>Statistics</DialogTitle>
        <Box px={3}>
          <DialogContent style={{ marginTop: "-10px" }}>
            <Typography variant="h3" align="center"></Typography>
            <Box mt={2}>
              <Typography variant="subtitle2" align="justify"></Typography>
            </Box>
            <Typography
              variant="subtitle1"
              align="center"
              color="primary"
            ></Typography>
          </DialogContent>
        </Box>
        <DialogActions>
          <Button onClick={handleCloseInfo}>Close</Button>
        </DialogActions>
      </AboutPopup>
    </>
  );
};

export default MainMap;
