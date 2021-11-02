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

const dataset = [
  {
    attr_1: "LI",
    attr_2: "IE",
    attr_3: "IA",
    path:
      "Arabic Education (teaching Arabic),English,English Education,English Literature,Journalism,Language Education/Language Teaching,Language and Literature,Linguistics,Literature,Philippine Literature,Pilipino/Filipino"
  },
  {
    attr_1: "LO",
    attr_2: "SP",
    attr_3: "BO",
    path:
      "Aeronautical Engineering,Aircraft Maintenance Technology,Aviation Electronics/Electrical  Engineering,Ceramics Engineering,Electrical Engineering,Electrical Technology,Electronics Engineering/Technology,Electronics and Communications Engineering,Industrial Engineering,Mechanical Engineering,Mechanical Technology"
  },
  {
    attr_1: "LO",
    attr_2: "IE",
    attr_3: "IA",
    path:
      "Accountancy,Accounting Technology,Applied Science,Applied Social Research,Banking and Finance,Government Accounting and Auditing,Human Resource Development and Planning,Personnel and Human Resources Management"
  },
  {
    attr_1: "SP",
    attr_2: "LO",
    attr_3: "BO",
    path:
      "Architectural Drafting,Architectural Science/Technology,Architecture,Marine Transportation,Materials Science and Engineering,Mining Engineering,Other Maritime,Transport Engineering"
  },
  {
    attr_1: "SP",
    attr_2: "IE",
    attr_3: "IA",
    path: "Dental Medicine,Maritime Management,Optometry"
  },
  {
    attr_1: "IE",
    attr_2: "LI",
    attr_3: "LO",
    path:
      "Development Communication,Education,Educational Administration and Supervision,Educational Administration/Management,Elementary Education,Extension Education,Marketing,Other Education Science and Teacher Training,Other Education not elsewhere coded (NEC),Public Administration/Management,Secondary Education with no specialization,Special Education,Teaching"
  },
  {
    attr_1: "NA",
    attr_2: "LO",
    attr_3: "SP",
    path: "Agronomy ,Veterinary Medicine,Veterinary Technology"
  }
];

// Configuration
var config1 = {
  trainingSet: dataset,
  categoryAttr: "path"
  //ignoredAttributes: ["attr_2", "attr_3"]
};

// Building Decision Tree
var decisionTree = new dt.DecisionTree(config1);

// Building Random Forest
var numberOfTrees = 3;
var randomForest = new dt.RandomForest(config1, numberOfTrees);

// Testing Decision Tree and Random Forest
var comic = { attr_1: "IE", attr_2: "LI", attr_3: "LO" };

var decisionTreePrediction = decisionTree.predict(comic);
var randomForestPrediction = randomForest.predict(comic);

console.log("Attributes:", comic);
console.log("Result:", decisionTreePrediction.split(","));

// console.log(dataset);
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
