import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp
} from "firebase/firestore";
import { db } from "./firestore";
import { v4 as uuidv4 } from "uuid";

// get most recent assessment result
export const getMostRecentResults = async email => {
  if (!email) return false;
  const q = query(
    collection(db, "userRatings"),
    where("email", "==", email),
    orderBy("recordedAt", "desc"),
    limit(1)
  );

  const querySnapshot = await getDocs(q);
  let resultItems = null;
  querySnapshot.forEach(doc => {
    resultItems = doc.data();
  });

  return resultItems;
};

// get all assessment result
export const getRatingsResult = async resultsID => {
  if (!resultsID) return false;
  const q = query(
    collection(db, "userRatings"),
    where("ratingsID", "==", resultsID)
  );

  const querySnapshot = await getDocs(q);
  let recordFound = null;
  querySnapshot.forEach(doc => {
    recordFound = doc.data();
  });
  return recordFound;
};

// get all assessment results of user
export const getAllResults = async email => {
  if (!email) return false;
  const q = query(
    collection(db, "userRatings"),
    where("email", "==", email),
    orderBy("recordedAt", "desc")
  );

  const querySnapshot = await getDocs(q);
  let resultItems = [];
  querySnapshot.forEach(doc => {
    resultItems.push(doc.data());
  });

  return resultItems;
};

// create a userRatings document
export const createUserRatingsDocument = async data => {
  if (!data) return;

  const {
    email,
    Linguistic,
    Logical_Mathematical,
    Spatial,
    Bodily_Kinesthetic,
    Musical,
    Interpersonal,
    Intrapersonal,
    Naturalist
  } = data;
  const docId = uuidv4();

  try {
    const docRef = await addDoc(collection(db, "userRatings"), {
      email,
      Linguistic,
      Logical_Mathematical,
      Spatial,
      Bodily_Kinesthetic,
      Musical,
      Interpersonal,
      Intrapersonal,
      Naturalist,
      ratingsID: docId,
      recordedAt: serverTimestamp()
    });
    console.log("Document written with ID: ", docRef.id);
    return docId;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
