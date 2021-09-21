import React from "react";

// material ui imports
import { Box, TextField, Grid, Button } from "@material-ui/core";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker
// } from "@material-ui/pickers";

const ProfileForm = () => {
  // The first commit of Material-UI
  // const [selectedDate, setSelectedDate] = React.useState(
  //   new Date("2000-01-01")
  // );

  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };

  return (
    <Box mt={3}>
      <form noValidate autoComplete="off">
        <Grid container direction="row" spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField
              label="Username"
              defaultValue="JohnDoe420"
              fullWidth
              spellCheck={false}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              label="Email"
              defaultValue="johndoe420@gmail.com"
              fullWidth
              spellCheck={false}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              label="Last Name"
              defaultValue="Doe"
              fullWidth
              spellCheck={false}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              label="First Name"
              defaultValue="John"
              fullWidth
              spellCheck={false}
            />
          </Grid>

          {/* 
          <Grid item sm={6} xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date of Birth"
                format="MM/dd/yyyy"
                fullWidth
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid> */}
        </Grid>

        <Box mt={3}>
          <Button variant="contained" color="primary">
            Save Changes
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ProfileForm;
