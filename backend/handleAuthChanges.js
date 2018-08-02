import { AsyncStorage }         from 'react-native';

const firebase = require("firebase");

export default handleAuthChanges = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user == null) {
      AsyncStorage.setItem('AccessToken', null);
    } else {
      const facebookUserID = user.providerData[0].uid;
      AsyncStorage.setItem('FacebookUserID', facebookUserID);
    }
  });
};
