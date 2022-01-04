import {
  doc,
  updateDoc,
  getDocs,
  query,
  collection,
  where
} from "firebase/firestore";
import { db } from "./firestore";

export const updateBasicInfo = async data => {
  const uid = await getCurrentUserID(data.email);
  const userRef = doc(db, "users", uid);

  // update current user in firebase auth
  await updateDoc(userRef, data);
};

// get user data upon sign in
export const getCurrentUserID = async email => {
  if (!email) return false;
  const q = query(collection(db, "users"), where("email", "==", email));

  const querySnapshot = await getDocs(q);
  let userFound = null;
  querySnapshot.forEach(doc => {
    userFound = doc.id;
  });
  return userFound;
};
