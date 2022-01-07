import React from "react";

// material ui imports
import { Grid } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const AddressCity = props => {
  const { classes, citySelect, handleChangeCity, cityList } = props;

  return (
    <>
      <Grid item sm={6} xs={12}>
        <FormControl className={classes.selectContainer} variant="outlined">
          <InputLabel id="city-select-label">City / Municipality</InputLabel>
          <Select
            labelId="city-select-label"
            value={citySelect}
            onChange={handleChangeCity}
            label="City / Municipality"
            defaultValue={citySelect}
          >
            {cityList.map(city => {
              return (
                <MenuItem key={city.city_code} value={city.city_code}>
                  {city.city_name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default AddressCity;
