// constants
const {
  prefixLinguistic,
  prefixLogical,
  prefixSpatial
} = require("../utils/prefixCategories");

const minRate = "Not Applicable";
const maxRate = "Very Applicable";
const itemType = "rating";

const linguisticItems = {
  questions: [
    {
      type: itemType,
      name: prefixLinguistic + "1",
      title: "Books are very important to me.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLinguistic + "2",
      title:
        "I can hear words in my head before I read, speak, or write them down.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLinguistic + "3",
      title:
        "I get more out of listening to the radio or a spoken-word recording than I do from television or films.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};

const logicalMathItems = {
  questions: [
    {
      type: itemType,
      name: prefixLogical + "1",
      title: "I can easily compute numbers in my head.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLogical + "2",
      title: "Math and/or science were among my favorite subjects in school.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLogical + "3",
      title:
        "I enjoy playing games or solving brainteasers that require logical thinking.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};

const spatialItems = {
  questions: [
    {
      type: itemType,
      name: prefixSpatial + "1",
      title: "I often see clear visual images when I close my eyes.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixSpatial + "2",
      title: "I’m sensitive to color.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixSpatial + "3",
      title:
        "I frequently use a camera or camcorder to record what I see around me.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};

module.exports = { linguisticItems, logicalMathItems, spatialItems };
