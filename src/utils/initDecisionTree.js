// Import training set
import { datasetDT } from "../data/datasetDT";
import { dt } from "./decisionTree";

// Configuration
const config = {
  trainingSet: datasetDT,
  categoryAttr: "path"
};

// Building Decision Tree
// const decisionTree = new dt.DecisionTree(config);
// Building Random Forest
var numberOfTrees = 10;
var randomForest = new dt.RandomForest(config, numberOfTrees);

export const initDecisionTree = comic => {
  // Testing Decision
  // const decisionTreePrediction = decisionTree.predict(comic);
  const rfPrediction = randomForest.predict(comic);

  return rfPrediction;
};
