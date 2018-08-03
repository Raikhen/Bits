import React                        from 'react';
import { StyleSheet }               from 'react-native';

import Constants                    from '../../utilities/Constants';
import Screen                       from '../../components/Screen';
import Button                       from '../../components/Button';
import BitsText                     from '../../components/BitsText';

export default class ChatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Chats'
  }

  render() {
    return (
      <Screen>
        <BitsText>ChatsScreen</BitsText>
      </Screen>
    );
  }
}
