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

const minRate = "Never";
const maxRate = "Always";
const itemType = "rating";

export const linguisticItems = {
  questions: [
    {
      type: itemType,
      name: prefixLinguistic + "1",
      title:
        "Do you enjoy telling stories or talking about favorite movies or books?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLinguistic + "2",
      title:
        "Do you ever play with the sounds of words like making up jingles, or rhymes? For example, do you give things or people funny sounding nicknames?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLinguistic + "3",
      title: "Do you use colorful words or phrases when talking?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLinguistic + "4",
      title: "Have you ever written a story, poetry or words to songs?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLinguistic + "5",
      title: "Are you a convincing speaker?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLinguistic + "6",
      title: "Are you good at bargaining or making a deal with people?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLinguistic + "7",
      title: "Can you talk people into doing things your way when you want to?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLinguistic + "8",
      title: "Do you ever do public speaking or give talks to groups?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLinguistic + "9",
      title: "Are you good at managing or supervising people?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLinguistic + "10",
      title:
        "Do you have interest for talking about things like the news, family matters, religion or sports, etc.?",
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
      title:
        "As a child, did you easily learn math such as addition, multiplication and fractions?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLogical + "2",
      title: "In school, did you ever have extra interest or skill in math?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLogical + "3",
      title:
        "Do you do well in advanced math classes such as algebra or calculus?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLogical + "4",
      title:
        "Have you ever had interest in studying science or solving scientific problems?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLogical + "5",
      title: "Are you good at playing chess or checkers?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLogical + "6",
      title:
        "Are you good at playing cards or solving strategy or puzzle-type games?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLogical + "7",
      title: "Do you play games such as Scrabble or crossword puzzles?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLogical + "8",
      title:
        "Do you have a good system for balancing a checkbook or figuring a budget?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLogical + "9",
      title:
        "Do you have a good memory for numbers such as telephone numbers or addresses?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixLogical + "10",
      title: "Are you good at figuring numbers in your head?",
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
      title:
        "As a child, did you often build things out of blocks or boxes; play with jacks, marbles or jump rope?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixSpatial + "2",
      title:
        "As a teenager or adult, do you do well at any of these: mechanical drawing, hair styling, woodworking, art projects, auto body, or mechanics?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixSpatial + "3",
      title:
        "Can you well 'design' things such as arranging or decorating rooms, craft projects,building furniture or machines?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixSpatial + "4",
      title: "Can you parallel park a car on your first try?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixSpatial + "5",
      title:
        "Are you good at finding your way around new buildings or city streets?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixSpatial + "6",
      title: "Are you good at using a road map to find your way around?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixSpatial + "7",
      title:
        "Are you good at fixing 'things' like cars, lamps, furniture, or machines?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixSpatial + "8",
      title:
        "Can you easily put things together like toys, puzzles, or electronic equipment?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixSpatial + "9",
      title:
        "Have you ever made plans or patterns for projects such as sewing, carpentry, crafts, woodworking, etc.?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixSpatial + "10",
      title: "Have you ever drawn or painted pictures?",
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
        "In school, did you generally enjoy sports or gym class more than other school classes?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "2",
      title:
        "As a teenager, how often did you play sports or other physical activities?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "3",
      title:
        "Did you ever perform in a school play or take lessons in acting or dancing?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "4",
      title:
        "Do you or other people (like a coach) think that you are coordinated, graceful or a good athlete?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "5",
      title:
        "Did you ever take lessons or have someone teach you a sport such as bowling, karate,golf, etc.?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "6",
      title: "Have you ever joined teams to play a sport?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "7",
      title: "As an adult, do you often do physical work or exercise?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "8",
      title:
        "Are you good with your hands at things like card shuffling, magic tricks or juggling?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "9",
      title:
        "Are you good at doing precise work with your hands such as sewing, making models, tying flies, typing or have good handwriting?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixBodily + "10",
      title:
        "Do you enjoy working with your hands on projects such as mechanics, building things, preparing fancy food or sculpture?",
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
      title:
        "As a child, did you have a strong liking for music or music classes?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "2",
      title: "Do you play an instrument?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "3",
      title: "Can you sing 'in tune'?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "4",
      title:
        "Do you have a good voice for singing with other people in harmony?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "5",
      title:
        "As an adult, did you ever play an instrument, play with a band or sing with a group?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "6",
      title: "Do you spend a lot of time listening to music?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "7",
      title: "Do you ever make up songs or write music?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "8",
      title: "Do you ever drum your fingers, whistle or sing to yourself?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "9",
      title: "Do you often have favorite tunes on your mind?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixMusical + "10",
      title: "Do you often like to talk about music?",
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
      title: "Have you had friendships that have lasted for a long time?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "2",
      title: "Are you good at making peace at home, at work or among friends?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "3",
      title:
        "Are you ever a 'leader' for doing things at school, among friends or at work?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "4",
      title: "In school, were you usually part of a particular group or crowd?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "5",
      title:
        "Do you easily understand the feelings, wishes or needs of other people?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "6",
      title:
        "Do you ever offer to 'help' other people such as the sick, the elderly or friends?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "7",
      title:
        "Do friends or family members ever come to you to talk over personal troubles or to ask for advice?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "8",
      title: "Are you a good judge of 'character'?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "9",
      title:
        "Do you usually know how to make people feel comfortable and at ease?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixInterpersonal + "10",
      title: "Do you generally take the good advice of friends?",
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
        "Do you have a clear sense of who you are and what you want out of life?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "2",
      title: "Are you aware of your feelings and able to control your moods?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "3",
      title:
        "Do you plan and work hard toward personal goals like at school, at work or at home?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "4",
      title:
        "Do you 'know your own mind' and do well at making important personal decisions such as choosing classes, changing jobs or moving?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "5",
      title:
        "Are you happy with the work / studies you choose because it matches your skills, interests and personality?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "6",
      title:
        "Do you generally know what you are good at (or not good at) doing and try to improve your skills?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "7",
      title: "Can you control your anger when you fail or are frustrated?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "8",
      title:
        "Have you ever had interest in 'self improvement'? For instance, do you attend classes to learn new skills or read 'self-help' books or magazines?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "9",
      title:
        "Have you ever been able to find unique or unusual ways to solve personal problems or achieve your goals?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixIntrapersonal + "10",
      title:
        "Do you regularly spend time alone meditating, reflecting, or thinking about important life questions.",
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
      title: "Have you ever raised pets or other animals?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "2",
      title: "Is it easy for you to understand and care for an animal?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "3",
      title:
        "Have you ever done any pet training, hunting or studied wildlife?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "4",
      title:
        "Are you good at working with farm animals or thought about being a veterinarian or naturalist?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "5",
      title:
        "Do you easily understand differences between animals such as personalities, traits or habits?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "6",
      title: "Are you good at recognizing breeds of pets or kinds of animals?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "7",
      title:
        "Are you good at observing and learning about nature, for example, clouds, weather patterns, animal or plant life?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "8",
      title: "Are you good at growing plants or raising a garden?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "9",
      title:
        "Can you identify or understand the differences between types of plants?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    },
    {
      type: itemType,
      name: prefixNaturalist + "10",
      title:
        "Are you fascinated by natural energy systems such as chemistry, electricity, engines, physics or geology?",
      isRequired: true,
      mininumRateDescription: minRate,
      maximumRateDescription: maxRate
    }
  ]
};
