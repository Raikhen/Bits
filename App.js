import React                        from 'react';
import { StyleSheet }               from 'react-native';
import { StatusBar }                from 'react-native';
import { View }                     from 'react-native';

import Constants                    from './utilities/Constants';
import RootSwitch                   from './navigators/RootSwitch';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <RootSwitch  />
      </View>

    );
  }
}
