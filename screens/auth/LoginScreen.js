import React                        from 'react';
import { StyleSheet, View }         from 'react-native';

import Constants                    from '../../utilities/Constants';
import Backend                      from '../../backend/Backend';
import Screen                       from '../../components/Screen';
import BitsText                     from '../../components/BitsText';
import Button                       from '../../components/Button';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <Screen style={styles.container}>
        <BitsText>LoginScreen</BitsText>
        <Button
          icon="facebook"
          text="Login with Facebook"
          onPress={() => console.log('Tried to log in.')} />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
