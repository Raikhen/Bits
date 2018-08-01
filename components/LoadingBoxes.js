import React                  from 'react';
import { StyleSheet }         from 'react-native';
import { View }               from 'react-native';

import Constants              from '../utilities/Constants';

let timeout; // TODO: Find a better way to clearTimeout.

export default class LoadingBoxes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingPhase: 0,
    }

    this.changePhase = this.changePhase.bind(this);
    this.changePhase();
  }

  changePhase() {
    let self = this;

    timeout = setTimeout(() => {
      self.setState({
        loadingPhase: (self.state.loadingPhase + 1) % 4
      });

      self.changePhase();
    }, 500);
  }

  componentWillUnmount() {
    clearTimeout(timeout);
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
