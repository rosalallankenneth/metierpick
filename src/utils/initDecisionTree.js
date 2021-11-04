// Import training set
import { datasetDT } from "../data/datasetDT";
import { dt } from "./decisionTree";

// Configuration
const config = {
  trainingSet: datasetDT,
  categoryAttr: "path"
  //ignoredAttributes: ["attr_2", "attr_3"]
};

// Building Decision Tree
const decisionTree = new dt.DecisionTree(config);

export const initDecisionTree = comic => {
  // Testing Decision
  const decisionTreePrediction = decisionTree.predict(comic);

  console.log("Attributes:", comic);
  console.log("Result:", JSON.parse(decisionTreePrediction));
};
