import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init
var firebaseConfig = {
  apiKey:"",
  authDomain: "vuefirebase-7bf07.firebaseapp.com",
  databaseURL: "https://vuefirebase-7bf07.firebaseio.com",
  projectId: "vuefirebase-7bf07",
  storageBucket: "vuefirebase-7bf07.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  measurementId: "G-8GSGZQ44ST",
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
};
