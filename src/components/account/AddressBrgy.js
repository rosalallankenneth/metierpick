import React from "react";

// material ui imports
import { Grid } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const AddressCity = props => {
  const { classes, brgySelect, handleChangeBrgy, brgyList } = props;

  return (
    <>
      <Grid item sm={6} xs={12}>
        <FormControl className={classes.selectContainer} variant="outlined">
          <InputLabel id="city-select-label">Barangay</InputLabel>
          <Select
            labelId="brgy-select-label"
            value={brgySelect}
            onChange={handleChangeBrgy}
            label="Barangay"
            defaultValue={brgySelect}
          >
            {brgyList.map(brgy => {
              return (
                <MenuItem key={brgy.brgy_code} value={brgy.brgy_code}>
                  {brgy.brgy_name}
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
