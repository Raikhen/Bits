import { AsyncStorage } from "react-native"

import Backend          from '../backend/Firebase';

export default async function isUserVirgin() {
  const asyncStorageCheck = await AsyncStorage.getItem('BitsUser');
  // TODO: Make the set to the AsyncStorage.

  if (asyncStorageCheck !== null) {
    return false;
  } else {
    const userPhoneNumber = '1132701878'; // TODO: Unhardcode.
    const check = await Backend.isPhoneNumberRegistered(userPhoneNumber);
    return !check;
  }
}
