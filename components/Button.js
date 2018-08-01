import React                        from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { StyleSheet }               from 'react-native';
import { TextInput }                from 'react-native';
import { View }                     from 'react-native';
import { Text }                     from 'react-native';

import Constants                    from '../utilities/Constants';

export default class Button extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.onPress()}
        {...this.props}>
        <View style={styles.container}>
          <Text style={styles.text}>
            {this.props.text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: Constants.styling.colors.primary,
    borderWidth: 5,
    paddingRight: 15,
    paddingLeft: 15,
    padding: 10,
    margin: 20
  },
  text: {
    ...Constants.styling.text,
    fontSize: 18
  }
});
