import React, { useState } from "react";

// material ui imports
import { Box, Grid, Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/styles";

import { regions } from "../../data/address-region";
import {
  getProvinces,
  getCities,
  getBarangays
} from "../../utils/getAddressLists";
import AddressProvince from "./AddressProvince";
import AddressCity from "./AddressCity";
import AddressBrgy from "./AddressBrgy";

const useStyles = makeStyles(() => ({
  selectContainer: {
    width: "100%"
  }
}));

const AddressForm = () => {
  const classes = useStyles();

  // local state for selection of address
  const [regionSelect, setRegionSelect] = useState("");
  const [provinceSelect, setProvinceSelect] = useState("");
  const [citySelect, setCitySelect] = useState("");
  const [brgySelect, setBrgySelect] = useState("");

  // local state for list of address
  const [provinceList, setProvinceList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [brgyList, setBrgyList] = useState([]);

  // handles select region change
  // triggers render of select province list
  const handleChangeRegion = async e => {
    setProvinceSelect("");
    setCitySelect("");
    setBrgySelect("");
    setRegionSelect(e.target.value);
    setProvinceList(await getProvinces(e.target.value));
  };

  // handles select province change
  // triggers render of select city list
  const handleChangeProvince = async e => {
    setCitySelect("");
    setBrgySelect("");
    setProvinceSelect(e.target.value);
    setCityList(await getCities(e.target.value));
  };

  // handles select city change
  // triggers render of select barangay list
  const handleChangeCity = async e => {
    setBrgySelect("");
    setCitySelect(e.target.value);
    setBrgyList(await getBarangays(e.target.value));
  };

  // handles select brgy change
  const handleChangeBrgy = async e => {
    setBrgySelect(e.target.value);
  };

  return (
    <>
      <Grid item xs={12}>
        <Box mt={1}>
          <Typography variant="body2">
            <b>Address</b>
          </Typography>
        </Box>
      </Grid>

      <Grid item sm={6} xs={12}>
        <FormControl className={classes.selectContainer} variant="outlined">
          <InputLabel id="region-select-label">Region</InputLabel>
          <Select
            labelId="region-select-label"
            value={regionSelect}
            onChange={handleChangeRegion}
            label="Region"
          >
            {regions.map(region => {
              return (
                <MenuItem key={region.region_code} value={region.region_code}>
                  {region.region_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>

      {// render province selector if region is set
      regionSelect ? (
        <AddressProvince
          classes={classes}
          provinceSelect={provinceSelect}
          handleChangeProvince={handleChangeProvince}
          provinceList={provinceList}
        />
      ) : null}

      {// render city selector if province is set
      provinceSelect ? (
        <AddressCity
          classes={classes}
          citySelect={citySelect}
          handleChangeCity={handleChangeCity}
          cityList={cityList}
        />
      ) : null}

      {// render brgy selector if city is set
      citySelect ? (
        <AddressBrgy
          classes={classes}
          brgySelect={brgySelect}
          handleChangeBrgy={handleChangeBrgy}
          brgyList={brgyList}
        />
      ) : null}
    </>
  );
};

export default AddressForm;
