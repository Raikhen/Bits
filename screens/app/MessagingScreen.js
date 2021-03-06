import React                        from 'react';
import { connect }                  from 'react-redux';
import { TouchableOpacity }         from 'react-native';
import { StyleSheet }               from 'react-native';
import { FlatList }                 from 'react-native';
import { View }                     from 'react-native';

import Constants                    from '../../utilities/Constants';
import Screen                       from '../../components/Screen';
import BitsText                     from '../../components/BitsText';
import Message                      from '../../components/Message';
import sendMessage                  from '../../backend/sendMessage';
import onMessagesArrival            from '../../backend/onMessagesArrival';

const mapStateToProps = (state) => {
  const { friends, facebookID } = state;
  const { messages } = friends.filter((f) => f.id == facebookID)[0];
  return { messages };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch({
        message,
        type: 'ADD_MESSAGE'
      });
    }
  }
};

class MessagingScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params.userName
    };
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;

    const otherUser = {
      facebookID: params.userId,
      name: params.userName,
      picture: params.userPicture
    };

    const callback = (messages) => {
      messages.forEach((message) => this.props.addMessage(message));
    };

    onMessagesArrival(otherUser, callback);
  }

  render() {
    const { navigation } = this.props;
    const { userName, userId, userPicture } = navigation.state.params;

    return (
      <Screen>
        <FlatList
          data={this.props.messages}
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

export default connect(mapStateToProps, mapDispatchToProps)(MessagingScreen);
