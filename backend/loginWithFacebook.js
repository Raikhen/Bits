import Expo                     from 'expo';
import { AsyncStorage }         from 'react-native';

import firebase                 from './firebase';
import createUserIfNotCreated   from './createUserIfNotCreated';

export default loginWithFacebook = async (callback) => {
  const appId = '2128445640726376';
  const permissions = { permissions: ['public_profile', 'user_friends'] };

  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    appId,
    permissions
  );

  AsyncStorage.setItem('AccessToken', token);

  if (type === 'success') {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    firebase.auth().signInAndRetrieveDataWithCredential(credential)
    .then(async () => {
      await createUserIfNotCreated();
      callback();
    })
    .catch(error => console.error(error));
  } else {
    console.warn('User or Facebook cancelled login.');
  }
}
