import { createBottomTabNavigator } from 'react-navigation';

import PeopleScreen                 from '../screens/app/PeopleScreen';
import ChatsScreen                  from '../screens/app/ChatsScreen';
import ProfileScreen                from '../screens/app/ProfileScreen';
import Constants                    from '../utilities/Constants';

export default createBottomTabNavigator(
  {
    People: PeopleScreen,
    Chats: ChatsScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'People',
    tabBarOptions: {
      activeTintColor: Constants.styling.colors.primary,
      inactiveTintColor: Constants.styling.colors.secondary,
      activeBackgroundColor: '#002400',
      inactiveBackgroundColor: Constants.styling.colors.tertiary,
      labelStyle: {
        ...Constants.styling.text,
        fontSize: 16
      },
      style: {
        height: 65,
        borderTopWidth: 0,
        borderRightWidth: 3,
        borderColor: Constants.styling.colors.primary
      },
      tabStyle: {
        padding: 3,
        borderWidth: 3,
        borderRightWidth: 0,
        borderColor: Constants.styling.colors.primary,
      }
    },
  }
);
