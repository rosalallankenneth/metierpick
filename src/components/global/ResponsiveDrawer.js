import React from "react";

// material ui components
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// custome components
import MenuDrawer from "./MenuDrawer";
import NavBar from "./NavBar";
import HomeContent from "../home/HomeContent";
import AssessmentDescription from "../assessment/AssessmentDescription";
import Questionnaire from "../assessment/Questionnaire";
import AssessmentHistoryContent from "../history/AssessmentHistoryContent";
import AccountSettingsContent from "../account/AccountSettingsContent";
import AboutContent from "../about/AboutContent";
import ResultsPage from "../assessment/ResultsPage";

// react router imports
import { Route, Switch } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function ResponsiveDrawer(props) {
  const { window, logout } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar handleDrawerToggle={handleDrawerToggle} />

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <MenuDrawer
              handleDrawerToggle={handleDrawerToggle}
              logout={logout}
            />
          </Drawer>
        </Hidden>

        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            <MenuDrawer logout={logout} />
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box p={1}>
          <Switch>
            <Route exact path="/take-assessment">
              <AssessmentDescription />
            </Route>
            <Route exact path="/assessment-history">
              <AssessmentHistoryContent />
            </Route>
            <Route exact path="/account-settings">
              <AccountSettingsContent />
            </Route>
            <Route exact path="/about">
              <AboutContent />
            </Route>
            <Route exact path="/assessment-results">
              <ResultsPage />
            </Route>
            <Route exact path="/start-assessment">
              <Questionnaire />
            </Route>
            <Route path="/">
              <HomeContent />
            </Route>
          </Switch>
        </Box>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
