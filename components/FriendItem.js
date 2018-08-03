import React                        from 'react';
import { StyleSheet }               from 'react-native';
import { Image }                    from 'react-native';
import { View }                     from 'react-native';

import Constants                    from '../utilities/Constants';
import Screen                       from './Screen';
import BitsText                     from './BitsText';

export default class FriendItem extends React.Component {
  render() {
    const { picture, name } = this.props;

    return (
      <View style={styles.listItem}>
        <View style={styles.listItemPictureContainer}>
          <Image
            source={{ uri: picture.data.url }}
            style={styles.listItemPicture} />
        </View>
        <BitsText style={styles.listItemText}>
          {name}
        </BitsText>
      </View>
    );
  }
}

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
