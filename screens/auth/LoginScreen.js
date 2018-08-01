import React                        from 'react';
import { StyleSheet, View }         from 'react-native';

import Constants                    from '../../utilities/Constants';
import Backend                      from '../../backend/Backend';
import Screen                       from '../../components/Screen';
import BitsText                     from '../../components/BitsText';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <Screen>
        <BitsText>LoginScreen</BitsText>
      </Screen>
    );
  }
}
