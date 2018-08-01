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
  }

  async isPhoneNumberRegistered(phoneNumber) {
    const usersCollection = firebase.firestore().collection('users');
    let result = false;

    await usersCollection
    .where('phone-number', "==", phoneNumber)
    .get()
    .then((querySnapshot) => {
      let data;
      querySnapshot.forEach(doc => data = doc.data());
      result = querySnapshot.size ? data : false;
    })
    .catch((error) => {
      console.error("Error searching for user with phone number: ", error);
    });

    return result;
  }

  async sendConfirmationSMS(phoneNumber) {
    /*
    firebase.auth().languageCode = 'en';

    const recaptchaVerifier = await new firebase.auth.RecaptchaVerifier(
      'done-button',
      {
        size: 'invisible',
        callback: (response) => {
          console.log(response);
          resolve(true);
        }
      }
    );

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      console.log('SMS sent!');
      // confirmationResult.confirm(code).
    }).catch((error) => {
      console.error(error);
    });
    */
    authy.register_user('dylanfridman@gmail.com', '91132701878', '54', (err, res) => {
      if (res) console.log('res:', res);
      if (error) console.error('error:', error);
      // res = {user: {id: 1337}} where 1337 = ID given to use, store this someplace
    });
  }
}

let Backend = new Firebase();
export default Backend;
