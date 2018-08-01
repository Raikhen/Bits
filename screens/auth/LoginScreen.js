import React                        from 'react';
import { StyleSheet, View }         from 'react-native';
import { AsyncStorage }             from 'react-native';

import Constants                    from '../../utilities/Constants';
import Backend                      from '../../backend/Backend';
import Screen                       from '../../components/Screen';
import BitsText                     from '../../components/BitsText';
import Button                       from '../../components/Button';

export default class LoginScreen extends React.Component {
  render() {
    const loginCallback = (userCredential) => {
      this.props.navigation.navigate('App');
      const userToken = userCredential.additionalUserInfo.profile.id;
      AsyncStorage.setItem('UserToken', userToken);
    };

    return (
      <Screen>
        <View style={styles.mainContainer}>
          <BitsText style={styles.title}>
            Start using Bits to chat with all your friends in the coolest way possible
          </BitsText>
          <Button
            icon="facebook"
            text="Login with Facebook"
            onPress={() => Backend.loginWithFacebook(loginCallback)} />
        </View>
        <View style={styles.smallContainer}>
          <BitsText style={styles.text}>
            Or fuck off if you don't have Facebook. :)
          </BitsText>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5
  },
  smallContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10
  },
  text: {
    flex: 1,
    marginTop: 50
  }
});
