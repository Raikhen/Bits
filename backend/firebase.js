import handleAuthChanges from './handleAuthChanges';

const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDcNhMnB3zumpGhYHuQkeiXjhazRHdrkjM",
  authDomain: "bits-729.firebaseapp.com",
  databaseURL: "https://bits-729.firebaseio.com",
  projectId: "bits-729",
  storageBucket: "bits-729.appspot.com",
  messagingSenderId: "876231185681"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
console.disableYellowBox = true;
handleAuthChanges();

export default firebase;
