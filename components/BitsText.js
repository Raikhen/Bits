import React                        from 'react';
import { StyleSheet }               from 'react-native';
import { Text }                     from 'react-native';

import Constants                    from '../utilities/Constants';

export default class BitsText extends React.Component {
  render() {
    const { style, ...rest } = this.props;

    return (
      <Text style={[styles.text, style]} {...rest}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: Constants.styling.colors.primary,
    fontFamily: 'VT323',
    fontSize: 18
  }
});
