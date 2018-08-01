import { createBottomTabNavigator } from 'react-navigation';

import PeopleScreen                 from '../screens/app/PeopleScreen';
import ChatsScreen                  from '../screens/app/ChatsScreen';
import ProfileScreen                from '../screens/app/ProfileScreen';

export default createBottomTabNavigator(
  {
    People: PeopleScreen,
    Chats: ChatsScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'People'
  }
);
