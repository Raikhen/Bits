const firebase = require("firebase");

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};