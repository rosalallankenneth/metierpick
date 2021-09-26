import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { getCurrentUserDocument } from "../../firebase/firestore";

// material ui imports
import { Box, TextField, Grid, Button } from "@material-ui/core";

// redux
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/actions/authActions";

// custom components
import AddressForm from "./AddressForm";

const BasicInformationForm = () => {
  const dispatch = useDispatch();

  // get user data from redux state
  const { email } = useSelector(state => state.auth.user);
  const { lastname, firstname } = useSelector(state => state.auth.userInfo);

  // get user data from firestore
  // then dispatch to redux state
  useEffect(() => {
    (async () => {
      dispatch(setUserInfo(await getCurrentUserDocument(email)));
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const lastnameRef = useRef();
  const firstnameRef = useRef();

  return (
    <Box mt={3}>
      <form noValidate autoComplete="off">
        <Grid container direction="row" spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField
              label="Last Name"
              value={lastname}
              inputRef={lastnameRef}
              fullWidth
              spellCheck={false}
              variant="outlined"
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              label="First Name"
              value={firstname}
              inputRef={firstnameRef}
              fullWidth
              spellCheck={false}
              variant="outlined"
            />
          </Grid>

          <AddressForm />
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

export default BasicInformationForm;
