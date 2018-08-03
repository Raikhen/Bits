import { createStackNavigator }   from 'react-navigation';

import ChatsScreen                  from '../screens/app/ChatsScreen';

export default createStackNavigator(
  {
    Chats: ChatsScreen
  },
  {
    initialRouteName: 'Chats'
  }
);
