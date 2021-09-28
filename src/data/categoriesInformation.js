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
    "The capacity to use words effectively, whether orally (e.g., as a storyteller, orator, or politician) or in writing (e.g., as a poet, playwright, editor, or journalist). This intelligence includes the ability to manipulate the syntax or structure of language, the phonology or sounds of language, the semantics or meanings of language, and the pragmatic dimensions or practical uses of language. Some of these uses include rhetoric (using language to convince others to take a specific course of action), mnemonics (using language to remember information), explanation (using language to inform), and metalanguage (using language to talk about itself).",
    ICON_LI,
    {
      think: "in words",
      love: "reading, writing, telling stories, playing word games",
      need:
        "books, tapes, writing tools, paper, diaries, dialogue, discussion, debate, stories"
    }
  ],
  Logical_Mathematical: [
    " The capacity to use numbers effectively (e.g., as a mathematician, tax accountant, or statistician) and to reason well (e.g., as a scientist, computer programmer, or logician). This intelligence includes sensitivity to logical patterns and relationships, statements and propositions (if-then, cause-effect), functions, and other related abstractions. The kinds of processes used in the service of logical-mathematical intelligence include categorization, classification, inference, generalization, calculation, and hypothesis testing.",
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
    "The ability to perceive the visual-spatial world accurately (e.g., as a hunter, scout, or guide) and to perform transformations upon those perceptions (e.g., as an interior decorator, architect, artist, or inventor). This intelligence involves sensitivity to color, line, shape, form, space, and the relationships that exist between these elements. It includes the capacity to visualize, to graphically represent visual or spatial ideas, and to orient oneself appropriately in a spatial matrix.",
    ICON_SP,
    {
      think: "in images and pictures",
      love: "designing, drawing, visualizing, doodling",
      need:
        "art, legos, videos, movies, slides, imagination games, mazes, puzzles, illustrated books, trips to art museums"
    }
  ],
  Bodily_Kinesthetic: [
    "Expertise in using one’s whole body to express ideas and feelings (e.g., as an actor, a mime, an athlete, or a dancer) and facility in using one’s hands to produce or transform things (e.g., as a craftsperson, sculptor, mechanic, or surgeon. This intelligence includes specific physical skills such as coordination, balance, dexterity, strength, flexibility, and speed, as well as proprioceptive, tactile, and haptic capacities.",
    ICON_BO,
    {
      think: "through somatic sensations",
      love: "dancing, running, jumping, building, touching, gesturing",
      need:
        "role-play, drama, movement, building things, sports and physical games, tactile experiences, hands-on learning"
    }
  ],
  Musical: [
    "The capacity to perceive (e.g., as a music aficionado), discriminate (e.g., as a music critic), transform (e.g., as a composer), and express (e.g., as a performer) musical forms. This intelligence includes sensitivity to the rhythm, pitch or melody, and timbre or tone color of a musical piece. One can have a figural or “top-down” understanding of music (global, intuitive), a formal or “bottom-up” understanding (analytic, technical), or both.",
    ICON_MU,
    {
      think: "via rhythms and melodies",
      love: "singing, whistling, humming, tapping feet and hands, listening",
      need:
        "sing-along time, trips to concerts, playing music at home and school, musical instruments"
    }
  ],
  Interpersonal: [
    "The ability to perceive and make distinctions in the moods, intentions, motivations, and feelings of other people. This can include sensitivity to facial expressions, voice, and gestures; the capacity for discriminating among many different kinds of interpersonal cues; and the ability to respond effectively to those cues in some pragmatic way (e.g., to influence a group of people to follow a certain line of action).",
    ICON_IE,
    {
      think: "by bouncing ideas off other people",
      love: "leading, organizing, relating, manipulating, mediating, partying",
      need:
        "friends, group games, social gatherings, community events, clubs, mentors/apprenticeships"
    }
  ],
  Intrapersonal: [
    "Self-knowledge and the ability to act adaptively on the basis of that knowledge. This intelligence includes having an accurate picture of oneself (one’s strengths and limitations); awareness of inner moods, intentions, motivations, temperaments, and desires; and the capacity for self-discipline, self-understanding, and self-esteem.",
    ICON_IA,
    {
      think: "in relation to their needs, feelings, and goals",
      love: "setting goals, meditating, dreaming, planning, reflecting",
      need: "secret places, time alone, self-paced projects, choices"
    }
  ],
  Naturalist: [
    "Expertise in the recognition and classification of the numerous species—the flora and fauna—of an individual’s environment. This also includes sensitivity to other natural phenomena (e.g., cloud formations, mountains, etc.) and, in the case of those growing up in an urban environment, the capacity to discriminate among inanimate objects such as cars, sneakers, and CD covers.",
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
