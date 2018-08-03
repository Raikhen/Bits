import { createStackNavigator }   from 'react-navigation';

import Constants                  from '../utilities/Constants';
import ProfileScreen              from '../screens/app/ProfileScreen';

export default createStackNavigator(
  {
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Profile',
    navigationOptions: {
      headerStyle: Constants.styling.headerStyle,
      headerTitleStyle: Constants.styling.headerTitleStyle
    }
  }
);
