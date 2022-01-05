const ICON_LI = require("../assets/mi-logos/icon1-linguistic.png").default;
const ICON_LO = require("../assets/mi-logos/icon2-logical.png").default;
const ICON_SP = require("../assets/mi-logos/icon3-spatial.png").default;
const ICON_BO = require("../assets/mi-logos/icon4-bodily.png").default;
const ICON_MU = require("../assets/mi-logos/icon5-musical.png").default;
const ICON_IE = require("../assets/mi-logos/icon6-interpersonal.png").default;
const ICON_IA = require("../assets/mi-logos/icon7-intrapersonal.png").default;
const ICON_NA = require("../assets/mi-logos/icon8-naturalist.png").default;

const categories = {
  Linguistic: [
    "The ability to successfully employ words, whether vocally (as a storyteller, orator, or politician) or through writing (as a poet, playwright, editor, or journalist). The ability to manipulate the syntax or structure of language, the phonology or sounds of language, the semantics or meanings of language, and the pragmatic dimensions or practical uses of language are all part of this intelligence. Rhetoric (using language to persuade others to pursue a particular course of action), mnemonics (using language to recall knowledge), explanation (using language to inform), and metalanguage are just a few examples (using language to talk about itself).",
    ICON_LI,
    {
      think: "in words",
      love: "reading, writing, telling stories, playing word games",
      need:
        "books, tapes, writing tools, paper, diaries, dialogue, discussion, debate, stories"
    }
  ],
  Logical_Mathematical: [
    "The ability to reason clearly and successfully with numbers (e.g., as a mathematician, tax accountant, or statistician) (e.g., as a scientist, computer programmer, or logician). Sensitivity to logical patterns and correlations, assertions and propositions (if-then, cause-effect), functions, and other related abstractions are all part of this intelligence. The kinds of processes used in the service of logical-mathematical intelligence include categorization, classification, inference, generalization, calculation, and hypothesis testing.",
    ICON_LO,
    {
      think: "by reasoning",
      love:
        "experimenting, questioning, figuring out logical puzzles, calculating",
      need:
        "materials to experiment with, science materials, manipulatives, trips to planetariums and science museums"
    }
  ],
  Spatial: [
    "Ability to accurately sense the visual-spatial world (e.g., as a hunter, scout, or guide) and to transform those perceptions (e.g., as an interior decorator, architect, artist, or inventor). This intelligence involves sensitivity to color, line, shape, form, space, and the relationships that exist between these elements. It entails the ability to envision, visually describe visual or spatial thoughts, and appropriately orient oneself in a spatial matrix.",
    ICON_SP,
    {
      think: "in images and pictures",
      love: "designing, drawing, visualizing, doodling",
      need:
        "art, legos, videos, movies, slides, imagination games, mazes, puzzles, illustrated books, trips to art museums"
    }
  ],
  Bodily_Kinesthetic: [
    "Expertise in utilizing one's complete body to communicate ideas and feelings (e.g., as an actor, a mime, an athlete, or a dancer) and the abilities of a craftsperson, sculptor, mechanic, or surgeon, proficiency in using one's hands to manufacture or transform things (e.g., as an actor, a mime, an athlete, or a dancer). This intelligence includes specific physical skills such as coordination, balance, dexterity, strength, flexibility, and speed, as well as proprioceptive, tactile, and haptic capacities.",
    ICON_BO,
    {
      think: "through somatic sensations",
      love: "dancing, running, jumping, building, touching, gesturing",
      need:
        "role-play, drama, movement, building things, sports and physical games, tactile experiences, hands-on learning"
    }
  ],
  Musical: [
    'The ability to perceive (e.g., as a music aficionado), discriminate (e.g., as a music critic), transform (e.g., as a composer), and convey (e.g., as a performer) musical forms. This intelligence comprises sensitivity to a musical piece\'s rhythm, pitch or melody, and timbre or tone color. Music can be understood in figurative or "top-down" ways (global, intuitive), formal or "bottom-up" ways (analytic, technical), or both ways.',
    ICON_MU,
    {
      think: "via rhythms and melodies",
      love: "singing, whistling, humming, tapping feet and hands, listening",
      need:
        "sing-along time, trips to concerts, playing music at home and school, musical instruments"
    }
  ],
  Interpersonal: [
    "The ability to detect and distinguish differences in other people's moods, intents, motivations, and sentiments. This can include sensitivity to facial expressions, voice, and gestures; the ability to distinguish amongst a variety of interpersonal cues; and the ability to respond to those clues effectively in some pragmatic way (e.g., to influence a group of people to follow a certain line of action).",
    ICON_IE,
    {
      think: "by bouncing ideas off other people",
      love: "leading, organizing, relating, manipulating, mediating, partying",
      need:
        "friends, group games, social gatherings, community events, clubs, mentors/apprenticeships"
    }
  ],
  Intrapersonal: [
    "Self-awareness and the ability to act adaptively based on that awareness. This intelligence comprises knowing one's own strengths and limitations, as well as being aware of one's inner moods, intentions, motives, temperaments, and wants, as well as the ability to self-discipline, self-understand, and self-esteem.",
    ICON_IA,
    {
      think: "in relation to their needs, feelings, and goals",
      love: "setting goals, meditating, dreaming, planning, reflecting",
      need: "secret places, time alone, self-paced projects, choices"
    }
  ],
  Naturalist: [
    "Expertise in recognizing and classifying the diverse species—flora and fauna—that make up an individual's surroundings. This includes sensitivity to various natural phenomena (e.g., cloud formations, mountains, etc.) as well as the ability to distinguish between inanimate items such as vehicles, sneakers, and CD covers in the case of people growing up in an urban setting.",
    ICON_NA,
    {
      think: "through nature and natural forms",
      love:
        "playing with pets, gardening, investigating nature, raising animals, caring for planet earth",
      need:
        "access to nature, opportunities for interacting with animals, tools for investigating nature (e.g., magnifying glasses, binoculars)"
    }
  ]
};

module.exports = { categories };
