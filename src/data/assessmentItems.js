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

const minRate = "NA";
const maxRate = "VA";
const itemType = "rating";

export const linguisticItems = {
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
    },
    {
      type: itemType,
      name: prefixLinguistic + "4",
      title: "I enjoy word games like Scrabble, Anagrams, or Password.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLinguistic + "5",
      title:
        "I enjoy entertaining myself or others with tongue twisters, nonsense rhymes, or puns.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};

export const logicalMathItems = {
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
    },
    {
      type: itemType,
      name: prefixLogical + "4",
      title:
        "I like to set up little “what if” experiments (for example, “What if I double the amount of water I give to my rosebush each week?”).",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLogical + "5",
      title:
        "My mind searches for patterns, regularities, or logical sequences in things.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};

export const spatialItems = {
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
    },
    {
      type: itemType,
      name: prefixSpatial + "4",
      title: "I enjoy doing jigsaw puzzles, mazes, and other visual puzzles.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixSpatial + "5",
      title: "I have vivid dreams at night.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};

export const bodilyItems = {
  questions: [
    {
      type: itemType,
      name: prefixBodily + "1",
      title:
        "I engage in at least one sport or physical activity on a regular basis.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "2",
      title: "I find it difficult to sit still for long periods of time.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "3",
      title:
        "I like working with my hands at concrete activities such as sewing, weaving, carving, carpentry, or model building.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "4",
      title:
        "My best ideas often come to me when I’m out for a long walk or a jog or when I’m engaging in some other kind of physical activity.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "5",
      title: "I often like to spend my free time outdoors.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};

export const musicalItems = {
  questions: [
    {
      type: itemType,
      name: prefixMusical + "1",
      title: "I have a pleasant singing voice.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "2",
      title: "I can tell when a musical note is off-key.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "3",
      title:
        "I frequently listen to music on radio, records, cassettes, or compact discs.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "4",
      title: "I play a musical instrument.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "5",
      title: "My life would be poorer if there were no music in it.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};

export const interpersonalItems = {
  questions: [
    {
      type: itemType,
      name: prefixInterpersonal + "1",
      title:
        "I’m the sort of person that people come to for advice and counsel at work or in my neighborhood.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "2",
      title:
        "I prefer group sports like badminton, volleyball, or softball to solo sports such as swimming and jogging.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "3",
      title:
        "When I have a problem, I’m more likely to seek out another person for help than attempt to work it out on my own.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "4",
      title: "I have at least three close friends.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "5",
      title:
        "I favor social pastimes such as Monopoly or bridge over individual recreations such as video games and solitaire.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};

export const intrapersonalItems = {
  questions: [
    {
      type: itemType,
      name: prefixIntrapersonal + "1",
      title:
        "I regularly spend time alone meditating, reflecting, or thinking about important life questions.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "2",
      title:
        "I have attended counseling sessions or personal growth seminars to learn more about myself.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "3",
      title: "I am able to respond to setbacks with resilience.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "4",
      title:
        "I have a special hobby or interest that I keep pretty much to myself.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "5",
      title:
        "I have some important goals for my life that I think about on a regular basis.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};

export const naturalistItems = {
  questions: [
    {
      type: itemType,
      name: prefixNaturalist + "1",
      title:
        "I like to spend time backpacking, hiking, or just walking in nature.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "2",
      title:
        "I belong to some kind of volunteer organization related to nature (e.g., Sierra Club), and I’m concerned about helping to save nature from further destruction.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "3",
      title: "I thrive on having animals around the house.",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "4",
      title:
        "I’m involved in a hobby that involves nature in some way (e.g., bird watching).",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "5",
      title:
        "I’ve enrolled in courses relating to nature at community centers or colleges (e.g., botany, zoology).",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};
