import firebase from './firebase';

export default sendMessage = async (content, recipientFacebookID) => {
  return new Promise((resolve, reject) => {
    const senderFirebaseID = firebase.auth().currentUser.uid;

    firebase.firestore().collection('messages').add({
      content,
      senderFirebaseID,
      recipientFacebookID,
      timestamp: new Date()
    })
    .then((docRef) => {
      resolve({
        status: '201',
        result: `Document written with ID: ${docRef.id}`
      });
    })
    .catch((error) => {
      reject({
        status: '4xx',
        result: `Error adding document: ${error}`
      });
    });
  });
}
