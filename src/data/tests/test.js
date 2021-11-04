function combinations(array) {
  return new Array(1 << array.length)
    .fill()
    .map((e1, i) => array.filter((e2, j) => i & (1 << j)));
}

const fields = [
  "Humanities",
  "Social Sciences",
  "Natural Sciences",
  "Formal Sciences",
  "Professions and Applied Sciences",
  "Architecture and Design",
  "Business",
  "Health Sciences",
  "Education",
  "Engineering",
  "Media and Communication",
  "Public Administration",
  "Transportation",
  "Nutrition"
];
const categories = ["LI", "LO", "SP", "BO", "MU", "IE", "IA", "NA"];
const conditions = combinations(categories).filter(a => a.length === 3);

const data = conditions.map(con => {
  if (con[1] === "LI") {
    return {
      attr_1: con[0],
      attr_2: con[1],
      attr_3: con[2],
      path: "Social Sciences, Education, Media and Communication"
    };
  } else if (con[1] === "LO") {
    return {
      attr_1: con[0],
      attr_2: con[1],
      attr_3: con[2],
      path: "Formal Sciences, Engineering, Business"
    };
  } else if (con[1] === "SP") {
    return {
      attr_1: con[0],
      attr_2: con[1],
      attr_3: con[2],
      path: "Architecture and Design, Engineering, Humanities"
    };
  } else if (con[1] === "BO") {
    return {
      attr_1: con[0],
      attr_2: con[1],
      attr_3: con[2],
      path: "Health Sciences, Transportation, Humanities"
    };
  } else if (con[1] === "MU") {
    return {
      attr_1: con[0],
      attr_2: con[1],
      attr_3: con[2],
      path: "Music Major"
    };
  } else if (con[1] === "IE") {
    return {
      attr_1: con[0],
      attr_2: con[1],
      attr_3: con[2],
      path: "Business, Media and Communication, Education"
    };
  } else if (con[1] === "IA") {
    return {
      attr_1: con[0],
      attr_2: con[1],
      attr_3: con[2],
      path: "Humanities, Social Sciences, Formal Sciences"
    };
  } else if (con[1] === "NA") {
    return {
      attr_1: con[0],
      attr_2: con[1],
      attr_3: con[2],
      path: "Natural Sciences, Agriculture, Nutrition"
    };
  } else {
    return false;
  }
});

const test_data = entries.slice(10, 20);
const class_name = "path";
const features = ["attr_1", "attr_2", "attr_3"];
