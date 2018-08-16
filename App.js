import React                        from 'react';
import { StyleSheet }               from 'react-native';
import { StatusBar }                from 'react-native';
import { View }                     from 'react-native';
import { Provider }                 from 'react-redux';

import Constants                    from './utilities/Constants';
import store                        from './utilities/state/store';
import RootSwitch                   from './navigators/RootSwitch';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar />
          <RootSwitch  />
        </View>
      </Provider>
    );
  }
}
