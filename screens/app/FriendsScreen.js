import React                        from 'react';
import { StyleSheet }               from 'react-native';
import { FlatList }                 from 'react-native';
import { Image }                    from 'react-native';
import { View }                     from 'react-native';

import getUserFriends               from '../../backend/getUserFriends';
import Constants                    from '../../utilities/Constants';
import Screen                       from '../../components/Screen';
import Button                       from '../../components/Button';
import BitsText                     from '../../components/BitsText';
import FriendItem                   from '../../components/FriendItem';

export default class FriendsScreen extends React.Component {
  static navigationOptions = {
    title: 'Friends',
  };

  constructor(props) {
    super(props);

    this.state = {
      friends: []
    };
  }

  async componentWillMount() {
    const friends = await getUserFriends();
    friends.forEach((friend) => friend.key = friend.id);
    this.setState({ friends });
  }

  render() {
    return (
      <Screen>
        <FlatList
          data={this.state.friends}
          renderItem={({ item }) => <FriendItem key={item.id} {...item} />} />
      </Screen>
    );
  }
}
