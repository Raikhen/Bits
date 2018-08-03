import { Platform }               from 'react-native';
import { StatusBar }              from 'react-native';
import { createStackNavigator }   from 'react-navigation';

import Constants                  from '../utilities/Constants';
import FriendsScreen              from '../screens/app/FriendsScreen';
import MessagingScreen            from '../screens/app/MessagingScreen';

export default createStackNavigator(
  {
    Friends: FriendsScreen,
    Messaging: MessagingScreen
  },
  {
    initialRouteName: 'Friends',
    navigationOptions: {
      headerStyle: Constants.styling.headerStyle,
      headerTitleStyle: Constants.styling.headerTitleStyle,
      headerTintColor: Constants.styling.colors.primary
    }
  }
);
