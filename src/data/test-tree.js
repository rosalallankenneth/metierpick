const DecisionTree = require("decision-tree");

const test_tree = () => {
  const training_data = [
    { color: "blue", shape: "square", liked: false },
    { color: "red", shape: "square", liked: false },
    { color: "blue", shape: "circle", liked: true },
    { color: "red", shape: "circle", liked: true },
    { color: "blue", shape: "hexagon", liked: false },
    { color: "red", shape: "hexagon", liked: false },
    { color: "yellow", shape: "hexagon", liked: true },
    { color: "yellow", shape: "circle", liked: true }
  ];

  const test_data = [
    { color: "blue", shape: "hexagon", liked: false },
    { color: "red", shape: "hexagon", liked: false },
    { color: "yellow", shape: "hexagon", liked: true },
    { color: "yellow", shape: "circle", liked: true }
  ];

  const class_name = "liked";
  const features = ["color", "shape"];

  const dt = new DecisionTree(class_name, features);
  dt.train(training_data);

  const predicted_class = dt.predict({
    color: "blue",
    shape: "hexagon"
  });

  const accuracy = dt.evaluate(test_data);
  const treeJson = dt.toJSON();
  const preTrainedDecisionTree = new DecisionTree(treeJson);

  console.log("accuracy", accuracy);
  console.log("treeJson", treeJson);
  console.log("preTrainedDT", preTrainedDecisionTree);
};

module.exports = test_tree;
