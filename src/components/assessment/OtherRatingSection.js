import React from "react";
import RatingDescription from "./RatingDescription";

// material ui imports
import { Typography, Box } from "@material-ui/core";

const OtherRatingSection = prop => {
  const { ratings } = prop;

  return (
    <>
      <Typography variant="h6">Your Rating on Other Intelligences</Typography>
      <Box mt={1}>
        <Typography variant="body1" align="justify">
          These categories are considered as your inferior attributes or skills
          that you are less good and interested.
        </Typography>
      </Box>

      <Box mt={2}>
        {// map through the rating values
        ratings.map(rate => {
          return (
            <RatingDescription key={rate[0]} name={rate[0]} rating={rate[1]} />
          );
        })}
      </Box>
    </>
  );
};

export default OtherRatingSection;
