// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  databaseURL: process.env.REACT_APP_databaseURL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getDatabase();

//*Register
export const signIn = async (email, password) => {
  try {
    const userCredential = createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    console.log(error);
  }
};

//*login
export const LogIn = async (email, password) => {
  try {
    const userCredential = signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

//*logout
export const logOut = () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
