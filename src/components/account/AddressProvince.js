import React from "react";

// material ui imports
import { Grid } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const AddressProvince = props => {
  const { classes, provinceSelect, handleChangeProvince, provinceList } = props;

  return (
    <>
      <Grid item sm={6} xs={12}>
        <FormControl className={classes.selectContainer} variant="outlined">
          <InputLabel id="province-select-label">Province</InputLabel>
          <Select
            labelId="province-select-label"
            value={provinceSelect}
            onChange={handleChangeProvince}
            label="Province"
            defaultValue={provinceSelect}
          >
            {provinceList.map(province => {
              return (
                <MenuItem
                  key={province.province_code}
                  value={province.province_code}
                >
                  {province.province_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default AddressProvince;
