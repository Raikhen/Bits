import { AsyncStorage } from 'react-native';

import firebase         from './firebase';

export default getUserFriends = async () => {
  const uid = await AsyncStorage.getItem('FacebookUserID');
  const token = await AsyncStorage.getItem('AccessToken');

  return new Promise((resolve, reject) => {
    fetch(
      `https://graph.facebook.com/v3.1/` +
      `${uid}/friends?` +
      `access_token=${token}&` +
      `fields=id,name,picture.type(large)`
    )
    .then(async (response) => {
      const data = (await response.json()).data;
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
  });
}
