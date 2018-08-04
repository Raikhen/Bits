import React                        from 'react';
import { StyleSheet }               from 'react-native';
import { FlatList }                 from 'react-native';

import getUserFriends               from '../../backend/getUserFriends';
import Screen                       from '../../components/Screen';
import FriendItem                   from '../../components/FriendItem';

export default class FriendsScreen extends React.Component {
  static navigationOptions = {
    title: 'Friends',
  };

  state = {
    friends: []
  };

  async componentWillMount() {
    const friends = await getUserFriends();
    friends.forEach((friend) => friend.key = friend.id);
    this.setState({ friends });
  }

  render() {
    const renderItem = ({ item }) => {
      return (
        <FriendItem
          key={item.id}
          {...item}
          navigation={this.props.navigation} />
      );
    };

    return (
      <Screen>
        <FlatList
          data={this.state.friends}
          renderItem={renderItem} />
      </Screen>
    );
  }
}
