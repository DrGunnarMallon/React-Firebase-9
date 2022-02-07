import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// config
const firebaseConfig = {
  apiKey: "AIzaSyAhV1D21phdXOVnyVJ0jA7Rx5A7IrpHBuk",
  authDomain: "learning-context.firebaseapp.com",
  projectId: "learning-context",
  storageBucket: "learning-context.appspot.com",
  messagingSenderId: "472236318139",
  appId: "1:472236318139:web:d09077d49dc55a3be4389e",
};

// initialize firebase
const firebaseApp = initializeApp(firebaseConfig);

// initialize services
const projectAuth = getAuth(firebaseApp);

// exports
export { projectAuth };
