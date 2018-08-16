import firebase           from './firebase';
import getFirebaseUserID  from './getFirebaseUserID';

export default onMessagesArrival = async (otherUser, callback) => {
  const db = firebase.firestore();
  const auth = firebase.auth();

  const user = auth.currentUser;
  otherUser.firebaseID = await getFirebaseUserID(otherUser.facebookID);

  const messagesSent = await new Promise((resolve, reject) => {
    db.collection('messages')
    .where('senderFirebaseID', '==', user.uid)
    .where('recipientFacebookID', '==', otherUser.facebookID)
    .onSnapshot((querySnapshot) => {
      let messagesSent = [];
      querySnapshot.forEach((doc) => messagesSent.push(doc.data()));
      resolve(messagesSent);
    });
  });

  const messagesReceived = await new Promise((resolve, reject) => {
    db.collection('messages')
    .where('senderFirebaseID', '==', otherUser.firebaseID)
    .where('recipientFacebookID', '==', user.providerData[0].uid)
    .onSnapshot((querySnapshot) => {
      let messagesReceived = [];
      querySnapshot.forEach((doc) => messagesReceived.push(doc.data()));
      resolve(messagesSent);
    });
  });

  // TODO: Fix bug that messagesSent == messagesReceived.

  console.log('messagesSent:', messagesSent);
  console.log('messagesReceived:', messagesReceived);

  // TODO: Make this realtime.
  callback([...messagesSent, ...messagesReceived]); // TODO: Sort by timestamp.
}
