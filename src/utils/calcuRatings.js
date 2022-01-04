// constants
import {
  prefixLinguistic,
  prefixLogical,
  prefixSpatial,
  prefixBodily,
  prefixMusical,
  prefixInterpersonal,
  prefixIntrapersonal,
  prefixNaturalist
} from "../utils/prefixCategories";

export const calcuRatings = results => {
  let linguisticRate = 0;
  let logicalRate = 0;
  let spatialRate = 0;
  let bodilyRate = 0;
  let musicalRate = 0;
  let interpersonalRate = 0;
  let intrapersonalRate = 0;
  let naturalistRate = 0;
  const itemCountEachCat = 10;

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
      // BO - bodily-kinesthetic
    } else if (key.startsWith(prefixBodily)) {
      bodilyRate += results[key];
      // MU - musical
    } else if (key.startsWith(prefixMusical)) {
      musicalRate += results[key];
      // IE - interpersonal
    } else if (key.startsWith(prefixInterpersonal)) {
      interpersonalRate += results[key];
      // IA - intrapersonal
    } else if (key.startsWith(prefixIntrapersonal)) {
      intrapersonalRate += results[key];
      // NA - naturalist
    } else if (key.startsWith(prefixNaturalist)) {
      naturalistRate += results[key];
    }
  });

  // set two decimal places
  const Linguistic = (linguisticRate / itemCountEachCat).toFixed(2);
  const Logical_Mathematical = (logicalRate / itemCountEachCat).toFixed(2);
  const Spatial = (spatialRate / itemCountEachCat).toFixed(2);
  const Bodily_Kinesthetic = (bodilyRate / itemCountEachCat).toFixed(2);
  const Musical = (musicalRate / itemCountEachCat).toFixed(2);
  const Interpersonal = (interpersonalRate / itemCountEachCat).toFixed(2);
  const Intrapersonal = (intrapersonalRate / itemCountEachCat).toFixed(2);
  const Naturalist = (naturalistRate / itemCountEachCat).toFixed(2);

  // store all rating results
  const allRatings = {
    Linguistic,
    Logical_Mathematical,
    Spatial,
    Bodily_Kinesthetic,
    Musical,
    Interpersonal,
    Intrapersonal,
    Naturalist
  };

  return allRatings;
};
