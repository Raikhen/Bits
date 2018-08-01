import { createStackNavigator }   from 'react-navigation';

import IntroductionScreen         from '../screens/auth/IntroductionScreen';
import LoginScreen                from '../screens/auth/LoginScreen';

export default createStackNavigator(
  {
    Introduction: IntroductionScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: 'Introduction',
    headerMode: 'none'
  }
);
