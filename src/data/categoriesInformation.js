const ICON_LI = require("../assets/mi-logos/icon1-linguistic.png").default;
const ICON_LO = require("../assets/mi-logos/icon2-logical.png").default;
const ICON_SP = require("../assets/mi-logos/icon3-spatial.png").default;

const categories = {
  Linguistic: [
    "The capacity to use words effectively, whether orally (e.g., as a storyteller, orator, or politician) or in writing (e.g., as a poet, playwright, editor, or journalist). This intelligence includes the ability to manipulate the syntax or structure of language, the phonology or sounds of language, the semantics or meanings of language, and the pragmatic dimensions or practical uses of language. Some of these uses include rhetoric (using language to convince others to take a specific course of action), mnemonics (using language to remember information), explanation (using language to inform), and metalanguage (using language to talk about itself).",
    ICON_LI
  ],
  Logical_Mathematical: [
    " The capacity to use numbers effectively (e.g., as a mathematician, tax accountant, or statistician) and to reason well (e.g., as a scientist, computer programmer, or logician). This intelligence includes sensitivity to logical patterns and relationships, statements and propositions (if-then, cause-effect), functions, and other related abstractions. The kinds of processes used in the service of logical-mathematical intelligence include categorization, classification, inference, generalization, calculation, and hypothesis testing.",
    ICON_LO
  ],
  Spatial: [
    "The ability to perceive the visual-spatial world accurately (e.g., as a hunter, scout, or guide) and to perform transformations upon those perceptions (e.g., as an interior decorator, architect, artist, or inventor). This intelligence involves sensitivity to color, line, shape, form, space, and the relationships that exist between these elements. It includes the capacity to visualize, to graphically represent visual or spatial ideas, and to orient oneself appropriately in a spatial matrix.",
    ICON_SP
  ]
};

module.exports = { categories };
