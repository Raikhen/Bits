import React                        from 'react';
import { StyleSheet }               from 'react-native';
import { MaterialCommunityIcons }   from '@expo/vector-icons';

import getUserFriends               from '../../backend/getUserFriends';
import Constants                    from '../../utilities/Constants';
import Screen                       from '../../components/Screen';
import Button                       from '../../components/Button';
import BitsText                     from '../../components/BitsText';

export default class PeopleScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: (
      <MaterialCommunityIcons
        name="account-multiple"
        style={{ marginBottom: -2 }}
        size={32}
        color={Constants.styling.colors.primary} />
    )
  };

  async componentWillMount() {
    console.log(await getUserFriends());
  }

  render() {
    return (
      <Screen>
        <BitsText>PeopleScreen</BitsText>
      </Screen>
    );
  }
}
