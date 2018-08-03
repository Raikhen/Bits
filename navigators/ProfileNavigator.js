import { createStackNavigator }   from 'react-navigation';

import ProfileScreen                from '../screens/app/ProfileScreen';

export default createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Profile'
  }
);
