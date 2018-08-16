import firebase           from './firebase';
import getFirebaseUserID  from './getFirebaseUserID';

export default onMessagesArrival = async (otherUser, callback) => {
  const db = firebase.firestore();
  const auth = firebase.auth();

  const user = auth.currentUser;
  otherUser.firebaseID = await getFirebaseUserID(otherUser.facebookID);

  let messagesSent = await new Promise((resolve, reject) => {
    db.collection('messages')
    .where('senderFirebaseID', '==', user.uid)
    .where('recipientFacebookID', '==', otherUser.facebookID)
    .onSnapshot((snapshot) => {
      let result = [];

      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const data = change.doc.data();

          result.push({
            content: data.content,
            timestamp: data.timestamp,
            sent: true
          });
        }
      });

      resolve(result);
    });
  });

  let messagesReceived = await new Promise((resolve, reject) => {
    db.collection('messages')
    .where('senderFirebaseID', '==', otherUser.firebaseID)
    .where('recipientFacebookID', '==', user.providerData[0].uid)
    .onSnapshot((snapshot) => {
      let result = [];

      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const data = change.doc.data();

          result.push({
            content: data.content,
            timestamp: data.timestamp,
            sent: true
          });
        }
      });

      resolve(result);
    });
  });

  // TODO: Fix bug that messagesSent == messagesReceived.

  let messages = [
    ...messagesSent,
    ...messagesReceived
  ];

  messages.sort((a,b) => {
    const secondsDiff = b.timestamp.seconds - a.timestamp.seconds;

    if (secondsDiff == 0) {
      return b.timestamp.nanoseconds - a.timestamp.nanoseconds;
    } else {
      return secondsDiff;
    }
  });

  // TODO: Make this realtime.
  callback(messages);
}
