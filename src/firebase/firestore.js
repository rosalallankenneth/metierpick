import {
  initializeFirestore,
  addDoc,
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";
import firebaseApp from "./config";

const firestoreConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

// connect to db
var db = initializeFirestore(firebaseApp, firestoreConfig);

// create a user upon signup
export const createUserDocument = async (email, data) => {
  if (!email) return;

  const { lastname, firstname } = data;

  try {
    const docRef = await addDoc(collection(db, "users"), {
      email,
      lastname,
      firstname
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// get user data upon sign in
export const getCurrentUserDocument = async email => {
  if (!email) return false;
  const q = query(collection(db, "users"), where("email", "==", email));

  const querySnapshot = await getDocs(q);
  let userFound = null;
  querySnapshot.forEach(doc => {
    userFound = doc.data();
  });
  return userFound;
};
