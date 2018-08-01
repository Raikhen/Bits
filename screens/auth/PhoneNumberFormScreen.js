import React                        from 'react';
import { KeyboardAvoidingView }     from 'react-native';
import { StyleSheet }               from 'react-native';
import { TextInput }                from 'react-native';
import { View }                     from 'react-native';
import { Text }                     from 'react-native';

import Button                       from '../../components/Button';
import Backend                      from '../../backend/Firebase';
import Constants                    from '../../utilities/Constants';
import sendSMS                      from '../../utilities/SendSMS';

export default class PhoneNumberFormScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: '',
      captchaSolved: false
    };

    this.handleDone = this.handleDone.bind(this);
  }

  async handleDone() {
    // TODO: Validation process.

    const couldSendSMS = await Backend.sendConfirmationSMS(this.state.phoneNumber);

    /*
    Send confirming SMS.
    Redirect to SMSConfirmationFormScreen
    */
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={{ flex: 1}}></View>
        <View style={{ flex: 5, alignItems: 'center' }}>
          <Text style={styles.title}>
            Give us your phone number so we can track you and steal all your Jellybeans
          </Text>
          <TextInput
            keyboardType='phone-pad'
            style={styles.phoneNumberInput}
            placeholder="Phone number (+ country code)"
            underlineColorAndroid="rgba(0,0,0,0)"
            selectionColor={Constants.styling.colors.primary}
            placeholderTextColor={Constants.styling.colors.secondary}
            onChangeText={phoneNumber => this.setState({ phoneNumber })} />
          <Button
            id="done-button"
            text="Done"
            onPress={this.handleDone} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Constants.styling.colors.tertiary
  },
  title: {
    ...Constants.styling.text,
    fontSize: 24,
    textAlign: 'center',
    margin: 40
  },
  text: {
    ...Constants.styling.text
  },
  phoneNumberInput: {
    ...Constants.styling.text,
    width: '80%',
    fontSize: 18,
    borderWidth: 5,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: Constants.styling.colors.primary
  }
});

/*
// IMPORTS FOR DROPDOWN
const CountriesAPI = require('country-list')();
import { Select, Option } from "react-native-chooser";
*/
