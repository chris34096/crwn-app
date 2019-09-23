import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDekbAZ2ZRe2kLR5oblw7cTYsj0tkg1TdU",
  authDomain: "crwn-db-8dae0.firebaseapp.com",
  databaseURL: "https://crwn-db-8dae0.firebaseio.com",
  projectId: "crwn-db-8dae0",
  storageBucket: "",
  messagingSenderId: "315470310529",
  appId: "1:315470310529:web:00cbc837e6fc7ae6aa7180"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
