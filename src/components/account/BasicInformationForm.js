import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentUserDocument } from "../../firebase/firestore";

// material ui imports
import { Box, TextField, Grid, Button } from "@material-ui/core";

// redux
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/actions/authActions";

// custom components
import AddressForm from "./AddressForm";
import AlertError from "../global/AlertError";
import { updateBasicInfo } from "../../firebase/account";

const BasicInformationForm = () => {
  const dispatch = useDispatch();

  // get user data from redux state
  const { email } = useSelector(state => state.auth.user);
  const { lastname, firstname } = useSelector(state => state.auth.userInfo);
  const [lastName, setLastName] = useState(lastname);
  const [firstName, setFirstName] = useState(firstname);

  // get user data from firestore
  // then dispatch to redux state
  useEffect(() => {
    (async () => {
      dispatch(setUserInfo(await getCurrentUserDocument(email)));
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // local state for selection of address
  const [regionSelect, setRegionSelect] = useState("");
  const [provinceSelect, setProvinceSelect] = useState("");
  const [citySelect, setCitySelect] = useState("");
  const [brgySelect, setBrgySelect] = useState("");

  const [error, setError] = useState("");

  const onClickSaveChanges = () => {
    if (
      lastName === "" ||
      firstName === "" ||
      regionSelect === "" ||
      provinceSelect === "" ||
      citySelect === "" ||
      brgySelect === ""
    ) {
      setError("Please fill up all the required fields.");
      return;
    }

    updateBasicInfo({
      email,
      lastname: lastName,
      firstname: firstName,
      region: regionSelect,
      province: provinceSelect,
      city: citySelect,
      barangay: brgySelect
    });
  };

  const auth = useSelector(state => state.auth.user);
  console.log(auth);

  return (
    <Box mt={3}>
      {error && <AlertError onClose={() => setError("")} message={error} />}

      <form noValidate autoComplete="off">
        <Grid container direction="row" spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField
              label="Last Name"
              value={lastName}
              fullWidth
              spellCheck={false}
              variant="outlined"
              onChange={e => setLastName(e.target.value)}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              label="First Name"
              value={firstName}
              fullWidth
              spellCheck={false}
              variant="outlined"
              onChange={e => setFirstName(e.target.value)}
            />
          </Grid>

          <AddressForm
            regionSelect={regionSelect}
            provinceSelect={provinceSelect}
            citySelect={citySelect}
            brgySelect={brgySelect}
            setRegionSelect={setRegionSelect}
            setProvinceSelect={setProvinceSelect}
            setCitySelect={setCitySelect}
            setBrgySelect={setBrgySelect}
          />
        </Grid>

        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            onClick={onClickSaveChanges}
          >
            Save Changes
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BasicInformationForm;
