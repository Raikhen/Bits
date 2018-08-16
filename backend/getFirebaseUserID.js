import firebase from './firebase';

export default getFirebaseUserID = (facebookUserID) => {
  const db = firebase.firestore();

  return new Promise((resolve, reject) => {
    db.collection('users').where('facebookUserID', "==", facebookUserID).get()
    .then((querySnapshot) => {
      if (querySnapshot.size) {
        querySnapshot.forEach((doc) => {
          resolve(doc.data().uid);
        });
      } else {
        reject(Error('User with that facebookUserID does not exist'));
      }
    })
    .catch((error) => {
      reject(Error(error));
    });
  });
}
