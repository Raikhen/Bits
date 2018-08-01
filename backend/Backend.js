import Expo             from 'expo';
import { AsyncStorage } from 'react-native';

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
        const userToken = user.providerData[0].uid;
        AsyncStorage.setItem('UserToken', userToken);
      } else {
        AsyncStorage.setItem('UserToken', null);
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

  async createUserIfNotCreated() {
    const db = firebase.firestore();
    const { uid } = firebase.auth().currentUser;

    db.collection('users').where('uid', "==", uid).get()
    .then((querySnapshot) => {
      if (!querySnapshot.size) {
        db.collection('users').add({
          uid,
          bitpoints: 0
        })
        .then((doc) => {
          console.log(`User doc created successfully with id ${doc.id}.`);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
      } else {
        console.log('User already created');
      }
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
  }
}

const Backend = new Firebase();
export default Backend;
