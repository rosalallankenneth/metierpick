const calcuRatings = results => {
  let linguisticRate = 0;
  let logicalRate = 0;
  let spatialRate = 0;
  const itemCountEachCat = 3;

  // accumulate all categories rating
  Object.keys(results).forEach(key => {
    // LI - linguistic
    if (key.startsWith("LI")) {
      linguisticRate += results[key];
      // LO - logical-mathematical
    } else if (key.startsWith("LO")) {
      logicalRate += results[key];
      // SP - spatial
    } else if (key.startsWith("SP")) {
      spatialRate += results[key];
    }
  });

  // set two decimal places
  const linguisticRating = (linguisticRate / itemCountEachCat).toFixed(2);
  const logicalRating = (logicalRate / itemCountEachCat).toFixed(2);
  const spatialRating = (spatialRate / itemCountEachCat).toFixed(2);

  // store all rating results
  const allRatings = { linguisticRating, logicalRating, spatialRating };
  return allRatings;
};

module.exports = { calcuRatings };
