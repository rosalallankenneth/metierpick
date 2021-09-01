import React from "react";

// material ui components
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

// material ui icons
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import HistoryIcon from "@material-ui/icons/History";
import AccountIcon from "@material-ui/icons/AccountBox";
import LogoutIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles(theme => ({
  banner: {
    fontWeight: "700",
    fontSize: "30px"
  }
}));

export default function MenuDrawer() {
  const classes = useStyles();

  return (
    <div>
      <List>
        <ListItem text>
          <ListItemText primary="Student Career" className={classes.banner} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button selected>
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Take Assessment" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="Assessment History" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AccountIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
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
