import React, { useState } from "react";

// material ui components
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// material ui icons
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import HistoryIcon from "@material-ui/icons/History";
import AccountIcon from "@material-ui/icons/AccountBox";
import AboutIcon from "@material-ui/icons/Info";
import LogoutIcon from "@material-ui/icons/ExitToApp";

// assets
import MetierpickLogo from "../../assets/logo-v2.png";

// react router imports
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// custom components
import AlertError from "../global/AlertError";
import { Typography, Box } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function MenuDrawer(props) {
  const currentRoute = useLocation().pathname;
  const { handleDrawerToggle, logout } = props;
  const { email } = useSelector(state => state.auth.user);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogout = async () => {
    typeof handleDrawerToggle === "function" && handleDrawerToggle();
    try {
      setIsError(false);
      await logout();
    } catch {
      setErrorMessage(
        "Failed to logout. Please try again or refresh the page."
      );
      setIsError(true);
    }
  };

  const handleCloseAlertError = () => {
    setIsError(false);
    setErrorMessage("");
  };

  return (
    <div>
      {isError && (
        <AlertError message={errorMessage} onClose={handleCloseAlertError} />
      )}
      <List>
        <ListItem component={Link} to="/" onClick={handleDrawerToggle}>
          <img src={MetierpickLogo} alt="metierpick-logo" />
        </ListItem>
      </List>
      <Divider />
      <List style={{ padding: 0 }}>
        <ListItem
          button
          component={Link}
          to="/"
          selected={currentRoute === "/" ? true : false}
          onClick={handleDrawerToggle}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/take-assessment"
          selected={currentRoute === "/take-assessment" ? true : false}
          onClick={handleDrawerToggle}
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
          onClick={handleDrawerToggle}
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
          onClick={handleDrawerToggle}
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
          onClick={handleDrawerToggle}
        >
          <ListItemIcon>
            <AboutIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>

        <ListItem button onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>

        <Divider />
        <ListItem style={{ paddingTop: 10 }}>
          <Box py={1} px={2} style={{ background: "#eeefff", width: "100%" }}>
            <ListItemText>
              <Typography
                variant="caption"
                align="left"
                style={{ fontWeight: 700 }}
              >
                Logged in as
              </Typography>
              <Typography variant="subtitle2" align="left" noWrap>
                {email}
              </Typography>
            </ListItemText>
          </Box>
        </ListItem>
      </List>
    </div>
  );
}
