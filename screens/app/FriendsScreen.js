import React                        from 'react';
import { connect }                  from 'react-redux';
import { StyleSheet }               from 'react-native';
import { FlatList }                 from 'react-native';

import getUserFriends               from '../../backend/getUserFriends';
import Screen                       from '../../components/Screen';
import FriendItem                   from '../../components/FriendItem';

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFriends: (friends) => {
      dispatch({
        friends,
        type: 'ADD_FRIENDS',
      });
    }
  }
};

class FriendsScreen extends React.Component {
  static navigationOptions = {
    title: 'Friends',
  };

  async componentWillMount() {
    const friends = await getUserFriends();
    friends.forEach((friend) => friend.key = friend.id);
    this.props.addFriends(friends);
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
          data={this.props.friends}
          renderItem={renderItem} />
      </Screen>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsScreen);
