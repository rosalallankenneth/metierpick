import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentUserDocument } from "../../firebase/firestore";
import CircularProgress from "@material-ui/core/CircularProgress";

// material ui imports
import { Box, TextField, Grid, Button } from "@material-ui/core";

// redux
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/actions/authActions";

// custom components
import AddressForm from "./AddressForm";
import AlertError from "../global/AlertError";
import AlertSuccess from "../global/AlertSuccess";
import { updateBasicInfo } from "../../firebase/account";

const UserInfoToState = async (
  dispatch,
  email,
  setLastName,
  setFirstName,
  setRegionSelect,
  setProvinceSelect,
  setCitySelect,
  setBrgySelect
) => {
  const userInfo = await getCurrentUserDocument(email);
  setLastName(
    userInfo.lastname.charAt(0).toUpperCase() + userInfo.lastname.slice(1)
  );
  setFirstName(
    userInfo.firstname.charAt(0).toUpperCase() + userInfo.firstname.slice(1)
  );
  if (userInfo.region) {
    setRegionSelect(userInfo.region);
    setProvinceSelect(userInfo.province);
    setCitySelect(userInfo.city);
    setBrgySelect(userInfo.barangay);
  }
  dispatch(setUserInfo(userInfo));
};

const BasicInformationForm = () => {
  const dispatch = useDispatch();

  // get user data from redux state
  const { email } = useSelector(state => state.auth.user);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [regionSelect, setRegionSelect] = useState("");
  const [provinceSelect, setProvinceSelect] = useState("");
  const [citySelect, setCitySelect] = useState("");
  const [brgySelect, setBrgySelect] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    UserInfoToState(
      dispatch,
      email,
      setLastName,
      setFirstName,
      setRegionSelect,
      setProvinceSelect,
      setCitySelect,
      setBrgySelect
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onClickSaveChanges = async () => {
    setIsLoading(true);
    if (
      lastName === "" ||
      firstName === "" ||
      regionSelect === "" ||
      provinceSelect === "" ||
      citySelect === "" ||
      brgySelect === ""
    ) {
      setError("Please fill up all the required fields.");
      setIsLoading(false);
      return;
    }

    const submitUpdate = await updateBasicInfo({
      email,
      lastname: lastName,
      firstname: firstName,
      region: regionSelect,
      province: provinceSelect,
      city: citySelect,
      barangay: brgySelect
    });

    if (submitUpdate) {
      setSuccess("Your information was updated successfully.");
    } else {
      setError("Unable to update your data. Please try again later.");
    }

    setIsLoading(false);
  };

  return (
    <Box mt={3}>
      {error && <AlertError onClose={() => setError("")} message={error} />}
      {success && (
        <AlertSuccess onClose={() => setSuccess("")} message={success} />
      )}

      <form noValidate autoComplete="off">
        <Grid container direction="row" spacing={2}>
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
            disabled={isLoading}
            style={{ width: 150 }}
          >
            {!isLoading ? "Save Changes" : <CircularProgress size={20} />}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BasicInformationForm;
