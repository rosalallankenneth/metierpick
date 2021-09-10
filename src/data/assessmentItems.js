const minRate = "Not Applicable";
const maxRate = "Very Applicable";
const itemType = "rating";

const linguisticItems = {
  questions: [
    {
      type: itemType,
      name: "1",
      title: "Books are very important to me.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "2",
      title:
        "I can hear words in my head before I read, speak, or write them down.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "3",
      title:
        "I get more out of listening to the radio or a spoken-word recording than I do from television or films.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "4",
      title: "I enjoy word games like Scrabble, Anagrams, or Password.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "5",
      title:
        "I enjoy entertaining myself or others with tongue twisters, nonsense rhymes, or puns.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "6",
      title:
        "Other people sometimes have to stop and ask me to explain the meaning of the words I use in my writing and speaking.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "7",
      title:
        "English, social studies, and history were easier for me in school than math and science.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "8",
      title:
        "Learning to speak or read another language (e.g., French, Spanish, German) has been relatively easy for me.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "9",
      title:
        "My conversation includes frequent references to things that I’ve read or heard.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "10",
      title:
        "I’ve written something recently that I was particularly proud of or that earned me recognition from others.",
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
      name: "B1",
      title: "I can easily compute numbers in my head.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "B2",
      title: "Math and/or science were among my favorite subjects in school.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "B3",
      title:
        "I enjoy playing games or solving brainteasers that require logical thinking.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "B4",
      title:
        "I like to set up little “what if” experiments (for example, “What if I double the amount of water I give to my rosebush each week?”).",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "B5",
      title:
        "My mind searches for patterns, regularities, or logical sequences in things.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "B6",
      title: "I’m interested in new developments in science.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "B7",
      title: "I believe that almost everything has a rational explanation.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "B8",
      title:
        "I sometimes think in clear, abstract, wordless, imageless concepts.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "B9",
      title:
        "I like finding logical flaws in things that people say and do at home and work.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "B10",
      title:
        " I feel more comfortable when something has been measured, categorized, analyzed, or quantifi ed in some way.",
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
      name: "C1",
      title: "I often see clear visual images when I close my eyes.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "C2",
      title: "I’m sensitive to color.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "C3",
      title:
        "I frequently use a camera or camcorder to record what I see around me.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "C4",
      title: "I enjoy doing jigsaw puzzles, mazes, and other visual puzzles.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "C5",
      title: "I have vivid dreams at night.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "C6",
      title: "I can generally fi nd my way around unfamiliar territory.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "C7",
      title: "I like to draw or doodle.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "C8",
      title: "Geometry was easier for me than algebra in schooL.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "C9",
      title:
        "I can comfortably imagine how something might appear if it were looked down on from directly above in a bird’s-eye view.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: "C10",
      title:
        "I prefer looking at reading material that is heavily illustrated.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};

module.exports = { linguisticItems, logicalMathItems, spatialItems };
