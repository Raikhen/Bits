import { createStackNavigator }   from 'react-navigation';

import IntroductionScreen         from '../screens/auth/IntroductionScreen';

export default createStackNavigator(
  {
    Introduction: IntroductionScreen
  },
  {
    initialRouteName: 'Introduction',
    headerMode: 'none'
  }
);
