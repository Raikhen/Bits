import { createSwitchNavigator }  from 'react-navigation';

import AppLoadingScreen           from '../screens/AppLoadingScreen';
import AppNavigator               from '../navigators/AppNavigator';
import AuthNavigator              from '../navigators/AuthNavigator';

export default createSwitchNavigator(
  {
    AppLoading: AppLoadingScreen,
    App: AppNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'AppLoading'
  }
);
