import React, { useEffect } from "react";
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
  const dispatch = useDispatch();
  const pathSelect = useSelector(state => state.map.pathSelect);

  useEffect(() => {
    dispatch(setPathSelect("Accountancy"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();

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
                <ListRoundedIcon style={{ width: 40, height: 40 }} />
                <InfoRoundedIcon
                  style={{ width: 40, height: 40, marginLeft: 10 }}
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
    </>
  );
};

export default MainMap;
