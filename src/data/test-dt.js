// // Training set
// var data = [
//   { person: "Homer", hairLength: 0, weight: 250, age: 36, sex: "male" },
//   { person: "Marge", hairLength: 10, weight: 150, age: 34, sex: "female" },
//   { person: "Bart", hairLength: 2, weight: 90, age: 10, sex: "male" },
//   { person: "Lisa", hairLength: 6, weight: 78, age: 8, sex: "female" },
//   { person: "Maggie", hairLength: 4, weight: 20, age: 1, sex: "female" },
//   { person: "Abe", hairLength: 1, weight: 170, age: 70, sex: "male" },
//   { person: "Selma", hairLength: 8, weight: 160, age: 41, sex: "female" },
//   { person: "Otto", hairLength: 10, weight: 180, age: 38, sex: "male" },
//   { person: "Krusty", hairLength: 6, weight: 200, age: 45, sex: "male" }
// ];

const categories = ["LI", "LO", "SP", "BO", "MU", "IE", "IA", "NA"];
let result = [
  {
    attr_1: "LI",
    attr_2: "LO",
    attr_3: "SP"
  },
  {
    attr_1: "LI",
    attr_2: "SP",
    attr_3: "BO"
  },
  {
    attr_1: "LI",
    attr_2: "BO",
    attr_3: "MU"
  },
  {
    attr_1: "LI",
    attr_2: "MU",
    attr_3: "IE"
  },
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA"
  },
  {
    attr_1: "LI",
    attr_2: "IA",
    attr_3: "NA"
  },
  {
    attr_1: "LI",
    attr_2: "NA",
    attr_3: "LO"
  },
  {
    attr_1: "LO",
    attr_2: "LI",
    attr_3: "SP"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO"
  },
  {
    attr_1: "LO",
    attr_2: "BO",
    attr_3: "MU"
  },
  {
    attr_1: "LO",
    attr_2: "MU",
    attr_3: "IE"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "IA"
  },
  {
    attr_1: "LO",
    attr_2: "IA",
    attr_3: "NA"
  },
  {
    attr_1: "LO",
    attr_2: "NA",
    attr_3: "LI"
  },
  {
    attr_1: "SP",
    attr_2: "LI",
    attr_3: "LO"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "BO"
  },
  {
    attr_1: "SP",
    attr_2: "BO",
    attr_3: "MU"
  },
  {
    attr_1: "SP",
    attr_2: "MU",
    attr_3: "IE"
  },
  {
    attr_1: "SP",
    attr_2: "IE",
    attr_3: "IA"
  },
  {
    attr_1: "SP",
    attr_2: "IA",
    attr_3: "NA"
  },
  {
    attr_1: "SP",
    attr_2: "NA",
    attr_3: "LI"
  },
  {
    attr_1: "BO",
    attr_2: "LI",
    attr_3: "LO"
  },
  {
    attr_1: "BO",
    attr_2: "LO",
    attr_3: "SP"
  },
  {
    attr_1: "BO",
    attr_2: "SP",
    attr_3: "MU"
  },
  {
    attr_1: "BO",
    attr_2: "MU",
    attr_3: "IE"
  },
  {
    attr_1: "BO",
    attr_2: "IE",
    attr_3: "IA"
  },
  {
    attr_1: "BO",
    attr_2: "IA",
    attr_3: "NA"
  },
  {
    attr_1: "BO",
    attr_2: "NA",
    attr_3: "LI"
  },
  {
    attr_1: "MU",
    attr_2: "LI",
    attr_3: "LO"
  },
  {
    attr_1: "MU",
    attr_2: "LO",
    attr_3: "SP"
  },
  {
    attr_1: "MU",
    attr_2: "SP",
    attr_3: "BO"
  },
  {
    attr_1: "MU",
    attr_2: "BO",
    attr_3: "IE"
  },
  {
    attr_1: "MU",
    attr_2: "IE",
    attr_3: "IA"
  },
  {
    attr_1: "MU",
    attr_2: "IA",
    attr_3: "NA"
  },
  {
    attr_1: "MU",
    attr_2: "NA",
    attr_3: "LI"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO"
  },
  {
    attr_1: "IE",
    attr_2: "LO",
    attr_3: "SP"
  },
  {
    attr_1: "IE",
    attr_2: "SP",
    attr_3: "BO"
  },
  {
    attr_1: "IE",
    attr_2: "BO",
    attr_3: "MU"
  },
  {
    attr_1: "IE",
    attr_2: "MU",
    attr_3: "IA"
  },
  {
    attr_1: "IE",
    attr_2: "IA",
    attr_3: "NA"
  },
  {
    attr_1: "IE",
    attr_2: "NA",
    attr_3: "LI"
  },
  {
    attr_1: "IA",
    attr_2: "LI",
    attr_3: "LO"
  },
  {
    attr_1: "IA",
    attr_2: "LO",
    attr_3: "SP"
  },
  {
    attr_1: "IA",
    attr_2: "SP",
    attr_3: "BO"
  },
  {
    attr_1: "IA",
    attr_2: "BO",
    attr_3: "MU"
  },
  {
    attr_1: "IA",
    attr_2: "MU",
    attr_3: "IE"
  },
  {
    attr_1: "IA",
    attr_2: "IE",
    attr_3: "NA"
  },
  {
    attr_1: "IA",
    attr_2: "NA",
    attr_3: "LI"
  },
  {
    attr_1: "NA",
    attr_2: "LI",
    attr_3: "LO"
  },
  {
    attr_1: "NA",
    attr_2: "LO",
    attr_3: "SP"
  },
  {
    attr_1: "NA",
    attr_2: "SP",
    attr_3: "BO"
  },
  {
    attr_1: "NA",
    attr_2: "BO",
    attr_3: "MU"
  },
  {
    attr_1: "NA",
    attr_2: "MU",
    attr_3: "IE"
  },
  {
    attr_1: "NA",
    attr_2: "IE",
    attr_3: "IA"
  },
  {
    attr_1: "NA",
    attr_2: "IA",
    attr_3: "LI"
  }
];
const data = result.map(con => {
  const { attr_1, attr_2, attr_3 } = con;

  if (con.attr_1 === "LI") {
    return {
      attr_1,
      attr_2,
      attr_3,
      path: "Social Sciences, Education, Media and Communication"
    };
  } else if (con.attr_1 === "LO") {
    return {
      attr_1,
      attr_2,
      attr_3,
      path: "Formal Sciences, Engineering, Business"
    };
  } else if (con.attr_1 === "SP") {
    return {
      attr_1,
      attr_2,
      attr_3,
      path: "Architecture and Design, Engineering, Humanities"
    };
  } else if (con.attr_1 === "BO") {
    return {
      attr_1,
      attr_2,
      attr_3,
      path: "Health Sciences, Transportation, Humanities"
    };
  } else if (con.attr_1 === "MU") {
    return {
      attr_1,
      attr_2,
      attr_3,
      path: "Music Major"
    };
  } else if (con.attr_1 === "IE") {
    return {
      attr_1,
      attr_2,
      attr_3,
      path: "Business, Media and Communication, Education"
    };
  } else if (con.attr_1 === "IA") {
    return {
      attr_1,
      attr_2,
      attr_3,
      path: "Humanities, Social Sciences, Formal Sciences"
    };
  } else if (con.attr_1 === "NA") {
    return {
      attr_1,
      attr_2,
      attr_3,
      path: "Natural Sciences, Agriculture, Nutrition"
    };
  } else {
    return false;
  }
});

console.table(data);

// Configuration
var config1 = {
  trainingSet: data,
  categoryAttr: "path"
  //ignoredAttributes: ["attr_2", "attr_3"]
};

// Building Decision Tree
var decisionTree = new dt.DecisionTree(config1);

// Building Random Forest
var numberOfTrees = 3;
var randomForest = new dt.RandomForest(config1, numberOfTrees);

// Testing Decision Tree and Random Forest
var comic = { attr_1: "NA", attr_2: "LI", attr_3: "LO" };

var decisionTreePrediction = decisionTree.predict(comic);
var randomForestPrediction = randomForest.predict(comic);

console.log(decisionTree.root);
console.log(randomForestPrediction);

// Displaying predictions
document.getElementById("testingItem").innerHTML = JSON.stringify(
  comic,
  null,
  0
);
document.getElementById("decisionTreePrediction").innerHTML = JSON.stringify(
  decisionTreePrediction,
  null,
  0
);
document.getElementById("randomForestPrediction").innerHTML = JSON.stringify(
  randomForestPrediction,
  null,
  0
);

// Displaying Decision Tree
// document.getElementById("displayTree").innerHTML = treeToHtml(
//   decisionTree.root
// );

// Recursive (DFS) function for displaying inner structure of decision tree
function treeToHtml(tree) {
  // only leafs containing category
  if (tree.category) {
    return [
      "<ul>",
      "<li>",
      '<a href="#">',
      "<b>",
      tree.category,
      "</b>",
      "</a>",
      "</li>",
      "</ul>"
    ].join("");
  }

  return [
    "<ul>",
    "<li>",
    '<a href="#">',
    "<b>",
    tree.attribute,
    " ",
    tree.predicateName,
    " ",
    tree.pivot,
    " ?</b>",
    "</a>",
    "<ul>",
    "<li>",
    '<a href="#">yes</a>',
    treeToHtml(tree.match),
    "</li>",
    "<li>",
    '<a href="#">no</a>',
    treeToHtml(tree.notMatch),
    "</li>",
    "</ul>",
    "</li>",
    "</ul>"
  ].join("");
}
