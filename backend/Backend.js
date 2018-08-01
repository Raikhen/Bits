import Expo             from 'expo';

const firebase = require("firebase");
require("firebase/firestore");

console.disableYellowBox = true;

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

    this.handleAuthChanges();
  }

  handleAuthChanges() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log('We are authenticated now!');
      }
    });
  }

  async loginWithFacebook(callback) {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '2128445640726376',
      {
        permissions: ['public_profile', 'user_friends']
      }
    );

    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      firebase.auth().signInAndRetrieveDataWithCredential(credential)
      .then(callback)
      .catch(error => console.error(error));
    } else {
      console.error('User or Facebook cancelled login.');
    }
  }
}

const Backend = new Firebase();
export default Backend;
