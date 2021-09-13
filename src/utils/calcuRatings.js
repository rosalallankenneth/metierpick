// constants
const {
  prefixLinguistic,
  prefixLogical,
  prefixSpatial
} = require("../utils/prefixCategories");

const calcuRatings = results => {
  let linguisticRate = 0;
  let logicalRate = 0;
  let spatialRate = 0;
  const itemCountEachCat = 3;

  // accumulate all categories rating
  Object.keys(results).forEach(key => {
    // LI - linguistic
    if (key.startsWith(prefixLinguistic)) {
      linguisticRate += results[key];
      // LO - logical-mathematical
    } else if (key.startsWith(prefixLogical)) {
      logicalRate += results[key];
      // SP - spatial
    } else if (key.startsWith(prefixSpatial)) {
      spatialRate += results[key];
    }
  });

  // set two decimal places
  const Linguistic = (linguisticRate / itemCountEachCat).toFixed(2);
  const Logical_Mathematical = (logicalRate / itemCountEachCat).toFixed(2);
  const Spatial = (spatialRate / itemCountEachCat).toFixed(2);

  // store all rating results
  const allRatings = { Linguistic, Logical_Mathematical, Spatial };
  // sort all ratings by highest value
  const sortedRatings = Object.entries(allRatings).sort((a, b) => b[1] - a[1]);

  return sortedRatings;
};

module.exports = { calcuRatings };
