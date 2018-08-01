import React                        from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { StyleSheet }               from 'react-native';
import { TextInput }                from 'react-native';
import { View }                     from 'react-native';
import { Text }                     from 'react-native';
import { MaterialCommunityIcons }   from '@expo/vector-icons';

import Constants                    from '../utilities/Constants';

export default class Button extends React.Component {
  renderIcon() {
    const { props } = this;

    if (props.icon) {
      let iconSize;

      if (props.iconSize) iconSize = props.iconSize;
      else iconSize = 24;

      return (
        <MaterialCommunityIcons
          style={[styles.icon, props.iconStyle]}
          name={props.icon}
          color={Constants.styling.colors.primary}
          size={iconSize} />
      );
    }

    return null;
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.onPress()}
        {...this.props}>
        <View style={styles.container}>
          {this.renderIcon()}
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
    margin: 20,
    flexDirection: 'row'
  },
  text: {
    ...Constants.styling.text,
    fontSize: 18
  },
  icon: {
    marginRight: 8
  }
});
