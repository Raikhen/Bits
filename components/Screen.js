import React                        from 'react';
import { StyleSheet }               from 'react-native';
import { View }                     from 'react-native';

import Constants                    from '../utilities/Constants';

export default class Screen extends React.Component {
  render() {
    const { style, ...rest } = this.props;

    return (
      <View style={[styles.screen, style]} {...rest}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Constants.styling.colors.tertiary
  }
});
