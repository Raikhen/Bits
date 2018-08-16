import firebase from './firebase';

export default createUserIfNotCreated = async () => {
  const db = firebase.firestore();
  const { uid, providerData } = firebase.auth().currentUser;
  const facebookUserID = providerData[0].uid;

  db.collection('users').where('uid', "==", uid).get()
  .then((querySnapshot) => {
    if (!querySnapshot.size) {
      db.collection('users').add({
        uid,
        facebookUserID,
        bitpoints: 0
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
    }
  })
  .catch((error) => {
    console.error('Error getting documents: ', error);
  });
}
