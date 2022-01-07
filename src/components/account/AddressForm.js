import React, { useState, useEffect } from "react";

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

const AddressForm = props => {
  const classes = useStyles();
  const {
    regionSelect,
    provinceSelect,
    citySelect,
    brgySelect,
    setRegionSelect,
    setProvinceSelect,
    setCitySelect,
    setBrgySelect
  } = props;

  // local state for list of address
  const [provinceList, setProvinceList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [brgyList, setBrgyList] = useState([]);

  useEffect(() => {
    if (regionSelect && provinceSelect && citySelect && brgySelect) {
      (async () => {
        setProvinceList(await getProvinces(regionSelect));
        setCityList(await getCities(provinceSelect));
        setBrgyList(await getBarangays(citySelect));
      })();
    }
  }, [regionSelect, provinceSelect, citySelect, brgySelect]); // eslint-disable-line react-hooks/exhaustive-deps

  // handles select region change
  // triggers render of select province list
  const handleChangeRegion = async e => {
    setProvinceList(await getProvinces(e.target.value));
    setProvinceSelect("");
    setCitySelect("");
    setBrgySelect("");
    setRegionSelect(e.target.value);
  };

  // handles select province change
  // triggers render of select city list
  const handleChangeProvince = async e => {
    setCityList(await getCities(e.target.value));
    setCitySelect("");
    setBrgySelect("");
    setProvinceSelect(e.target.value);
  };

  // handles select city change
  // triggers render of select barangay list
  const handleChangeCity = async e => {
    setBrgyList(await getBarangays(e.target.value));
    setBrgySelect("");
    setCitySelect(e.target.value);
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
            defaultValue=""
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
      provinceList.length > 0 ? (
        <AddressProvince
          key={provinceList}
          classes={classes}
          provinceSelect={provinceSelect}
          handleChangeProvince={handleChangeProvince}
          provinceList={provinceList}
        />
      ) : null}

      {// render city selector if province is set
      cityList.length > 0 ? (
        <AddressCity
          key={cityList}
          classes={classes}
          citySelect={citySelect}
          handleChangeCity={handleChangeCity}
          cityList={cityList}
        />
      ) : null}

      {// render brgy selector if city is set
      brgyList.length > 0 ? (
        <AddressBrgy
          key={brgyList}
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
