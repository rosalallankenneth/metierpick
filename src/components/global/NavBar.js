import React from "react";

// material ui components
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountIcon from "@material-ui/icons/AccountCircle";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase } from "@material-ui/core";

// react router imports
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  title: {
    margin: "0"
  },
  accountIcon: {
    marginLeft: "auto",
    marginRight: 0,
    borderRadius: "50%"
  }
}));

export default function NavBar({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.title}>
          Career DSS
        </Typography>
        <ButtonBase
          className={classes.accountIcon}
          component={Link}
          to="/account-settings"
        >
          <AccountIcon />
        </ButtonBase>
      </Toolbar>
    </AppBar>
  );
}
