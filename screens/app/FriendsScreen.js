import React                        from 'react';
import { StyleSheet }               from 'react-native';
import { FlatList }                 from 'react-native';

import getUserFriends               from '../../backend/getUserFriends';
import Constants                    from '../../utilities/Constants';
import Screen                       from '../../components/Screen';
import Button                       from '../../components/Button';
import BitsText                     from '../../components/BitsText';

export default class FriendsScreen extends React.Component {
  static navigationOptions = {
    title: 'Friends',
  };

  constructor(props) {
    super(props);

    this.state = {
      userFriends: []
    };
  }

  async componentWillMount() {
    this.setState({
      userFriends: await getUserFriends()
    });
  }

  render() {
    return (
      <Screen>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <BitsText>{item.key}</BitsText>} />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  loadingBoxesContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
