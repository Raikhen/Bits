import Expo from 'expo';

const firebase = require("firebase");
require("firebase/firestore");

class Firebase {
  constructor() {
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

    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log("We are authenticated now!");
      }
    });
  }

  async loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '2128445640726376',
      {
        permissions: ['public_profile', 'user_friends']
      }
    );

    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );

      console.log(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );

      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase.auth().signInWithCredential(credential).catch((error) => {
        // Handle Errors here.
      });
    }
  }
}

const Backend = new Firebase();
export default Backend;
