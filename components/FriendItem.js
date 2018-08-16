import React                        from 'react';
import { connect }                  from 'react-redux';
import { TouchableOpacity }         from 'react-native';
import { StyleSheet }               from 'react-native';
import { Image }                    from 'react-native';
import { View }                     from 'react-native';

import Constants                    from '../utilities/Constants';
import Screen                       from './Screen';
import BitsText                     from './BitsText';

const mapDispatchToProps = (dispatch) => {
  return {
    selectFriend: (facebookID) => {
      dispatch({
        facebookID,
        type: 'SELECT_FRIEND'
      })
    }
  }
};

class FriendItem extends React.Component {
  render() {
    const { id, picture, name, navigation } = this.props;

    const onPress = () => {
      this.props.selectFriend(id);

      navigation.navigate(
        'Messaging',
        {
          userId: id,
          userPicture: picture,
          userName: name
        }
      );
    };

    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.listItem}>
        <View style={styles.listItemPictureContainer}>
          <Image
            source={{ uri: picture.data.url }}
            style={styles.listItemPicture} />
        </View>
        <BitsText style={styles.listItemText}>
          {name}
        </BitsText>
      </TouchableOpacity>
    );
  }
}

export default connect(null, mapDispatchToProps)(FriendItem);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderColor: Constants.styling.colors.quinary
  },
  listItemText: {
    fontSize: 22,
    marginLeft: 12,
    marginTop: 8
  },
  listItemPictureContainer: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: Constants.styling.colors.primary
  },
  listItemPicture: {
    width: 44,
    height: 44
  }
});
