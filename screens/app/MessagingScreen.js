import React                        from 'react';
import { TouchableOpacity }         from 'react-native';
import { StyleSheet }               from 'react-native';
import { FlatList }                 from 'react-native';
import { View }                     from 'react-native';

import Constants                    from '../../utilities/Constants';
import Screen                       from '../../components/Screen';
import BitsText                     from '../../components/BitsText';
import Message                      from '../../components/Message';

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
        content: 1,
        type: 'received'
      },
      {
        content: 1,
        type: 'sent'
      },
      {
        content: 0,
        type: 'received'
      }
    ]
  };

  render() {
    return (
      <Screen>
        <FlatList
          data={this.state.messages}
          renderItem={({ index, item }) => <Message key={index} {...item} />}
          style={styles.messagesContainer}
          ListFooterComponent={<View style={{ height: 15 }}></View>} />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <BitsText style={styles.buttonText}>
              0
            </BitsText>
          </TouchableOpacity>
          <View style={styles.separatingLine}></View>
          <TouchableOpacity style={styles.button}>
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
    alignItems: 'center',
    textAlign: 'center'
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
