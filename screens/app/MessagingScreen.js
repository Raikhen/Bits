import React                        from 'react';
import { TouchableOpacity }         from 'react-native';
import { StyleSheet }               from 'react-native';
import { FlatList }                 from 'react-native';
import { View }                     from 'react-native';

import Constants                    from '../../utilities/Constants';
import Screen                       from '../../components/Screen';
import BitsText                     from '../../components/BitsText';
import Message                      from '../../components/Message';
import sendMessage                  from '../../backend/sendMessage';

export default class MessagingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.userName
    };
  };

  state = {
    messages: [
      {
        id: '0',
        content: 1,
        type: 'received'
      },
      {
        id: '1',
        content: 1,
        type: 'sent'
      },
      {
        id: '2',
        content: 0,
        type: 'received'
      }
    ]
  };

  render() {
    const { navigation } = this.props;
    const { userName, userId, userPicture } = navigation.state.params;

    return (
      <Screen>
        <FlatList
          data={this.state.messages}
          renderItem={({ item }) => <Message key={item.id} {...item} />}
          style={styles.messagesContainer}
          ListFooterComponent={<View style={{ height: 15 }}></View>} />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => sendMessage(0, userId)}
            style={styles.button}>
            <BitsText style={styles.buttonText}>
              0
            </BitsText>
          </TouchableOpacity>
          <View style={styles.separatingLine}></View>
          <TouchableOpacity
            onPress={() => sendMessage(1, userId)}
            style={styles.button}>
            <BitsText style={styles.buttonText}>
              1
            </BitsText>
          </TouchableOpacity>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
    paddingTop: 15
  },
  buttonsContainer: {
    height: 65,
    flexDirection: 'row',
    borderWidth: 3,
    borderBottomWidth: 0,
    borderColor: Constants.styling.colors.primary
  },
  button: {
    flex: 1,
    borderColor: Constants.styling.colors.primary,
    alignItems: 'center'
  },
  buttonText: {
    ...Constants.styling.text,
    fontSize: 41
  },
  separatingLine: {
    width: 3,
    height: '100%',
    backgroundColor: Constants.styling.colors.primary
  }
});
