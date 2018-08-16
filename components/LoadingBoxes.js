import React                  from 'react';
import { StyleSheet }         from 'react-native';
import { View }               from 'react-native';

import Constants              from '../utilities/Constants';

let interval; // TODO: Find a better way to clearInterval.

export default class LoadingBoxes extends React.Component {
  state = {
    loadingPhase: 0,
  };

  componentDidMount() {
    interval = setInterval(() => {
      this.setState({
        loadingPhase: (this.state.loadingPhase + 1) % 4
      });
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    const { loadingPhase } = this.state;
    const { primary, secondary } = Constants.styling.colors;

    const bcColors = [
      { backgroundColor: loadingPhase == 0 ? primary : secondary },
      { backgroundColor: loadingPhase % 2 == 1 ? primary : secondary },
      { backgroundColor: loadingPhase == 2 ? primary : secondary }
    ];

    const boxSize = {
      marginLeft: this.props.boxSize / 3,
      marginRight: this.props.boxSize / 3,
      width: this.props.boxSize,
      height: this.props.boxSize
    };

    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={[boxSize, bcColors[0]]}></View>
        <View style={[boxSize, bcColors[1]]}></View>
        <View style={[boxSize, bcColors[2]]}></View>
      </View>
    );
  }
}
