import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCdeUvcHmpNRhwRwoo_F6PjIJMnI_GVHPw",
  authDomain: "project-x-planner.firebaseapp.com",
  projectId: "project-x-planner",
  storageBucket: "project-x-planner.appspot.com",
  messagingSenderId: "1010893255575",
  appId: "1:1010893255575:web:e979626e772cf030828ad2",
  measurementId: "G-S02BBTLC1Y",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
