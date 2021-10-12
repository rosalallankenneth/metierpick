export const formatResultsData = resultsData => {
  const {
    email,
    recordedAt,
    ratingsID,
    Linguistic,
    Logical_Mathematical,
    Spatial,
    Bodily_Kinesthetic,
    Musical,
    Interpersonal,
    Intrapersonal,
    Naturalist
  } = resultsData;

  return {
    ratingsID,
    email,
    recordedAt,
    ratings: {
      Linguistic,
      Logical_Mathematical,
      Spatial,
      Bodily_Kinesthetic,
      Musical,
      Interpersonal,
      Intrapersonal,
      Naturalist
    }
  };
};
