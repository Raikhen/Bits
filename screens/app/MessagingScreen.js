import React                        from 'react';
import { StyleSheet }               from 'react-native';
import { FlatList }                 from 'react-native';
import { Image }                    from 'react-native';
import { View }                     from 'react-native';

import getUserFriends               from '../../backend/getUserFriends';
import Constants                    from '../../utilities/Constants';
import Screen                       from '../../components/Screen';
import BitsText                     from '../../components/BitsText';

export default class MessagingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.userName
    };
  };

  render() {
    return (
      <Screen style={{ justifyContent: 'center', alignItems: 'center' }}>
        <BitsText style={{ padding: 20 }}>
          Hola, mundo
        </BitsText>
      </Screen>
    );
  }
}
