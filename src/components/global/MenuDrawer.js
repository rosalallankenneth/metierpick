import React from "react";

// material ui components
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
//import { makeStyles } from "@material-ui/core/styles";

// material ui icons
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import HistoryIcon from "@material-ui/icons/History";
import AccountIcon from "@material-ui/icons/AccountBox";
import AboutIcon from "@material-ui/icons/Info";
import LogoutIcon from "@material-ui/icons/ExitToApp";

// assets
import MetierpickLogo from "../../assets/logo-v1.png";

// react router imports
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// const useStyles = makeStyles(theme => ({
//   banner: {
//     fontWeight: "700",
//     fontSize: "20px"
//   }
// }));

export default function MenuDrawer() {
  const currentRoute = useLocation().pathname;

  return (
    <div>
      <List>
        <ListItem>
          <img src={MetierpickLogo} alt="metierpick-logo" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          component={Link}
          to="/home"
          selected={currentRoute === "/home" ? true : false}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/"
          selected={currentRoute === "/" ? true : false}
        >
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Take Assessment" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/assessment-history"
          selected={currentRoute === "/assessment-history" ? true : false}
        >
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Assessment History" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/account-settings"
          selected={currentRoute === "/account-settings" ? true : false}
        >
          <ListItemIcon>
            <AccountIcon />
          </ListItemIcon>
          <ListItemText primary="Account Settings" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/about"
          selected={currentRoute === "/about" ? true : false}
        >
          <ListItemIcon>
            <AboutIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
}
