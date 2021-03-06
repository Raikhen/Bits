import { createStackNavigator }   from 'react-navigation';

import Constants                  from '../utilities/Constants';
import ChatsScreen                from '../screens/app/ChatsScreen';

export default createStackNavigator(
  {
    Chats: ChatsScreen
  },
  {
    initialRouteName: 'Chats',
    navigationOptions: {
      headerStyle: Constants.styling.headerStyle,
      headerTitleStyle: Constants.styling.headerTitleStyle
    }
  }
);
