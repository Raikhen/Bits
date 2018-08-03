import React                        from 'react';
import { StyleSheet }               from 'react-native';
import { View }                     from 'react-native';

import Constants                    from '../utilities/Constants';
import BitsText                     from './BitsText';

export default class Message extends React.Component {
  render() {
    const { content, type } = this.props;

    const alignment = {
      alignSelf: type === 'sent' ? 'flex-end': 'flex-start'
    };

    return (
      <View style={[styles.message, alignment]}>
        <BitsText style={styles.messageText}>
          {content}
        </BitsText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: Constants.styling.colors.primary,
    margin: 15,
    marginTop: 0,
    padding: 10
  },
  messageText: {
    flex: 1,
    textAlign: 'center',
    marginTop: -5,
    ...Constants.styling.text,
    fontSize: 24
  }
});
