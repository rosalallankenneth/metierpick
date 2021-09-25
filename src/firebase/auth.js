// firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "./config";
import { createUserDocument } from "./firestore";

export const signup = (email, password, data) => {
  // create user in firebase auth
  return createUserWithEmailAndPassword(auth, email, password).then(() => {
    // create user info in firestore
    createUserDocument(email, data);
  });
};

export const login = (email, password) => {
  // set current user in firebase auth
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => auth.signOut(auth);
