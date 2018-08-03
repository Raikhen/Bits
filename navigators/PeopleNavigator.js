import { createStackNavigator }   from 'react-navigation';

import PeopleScreen                 from '../screens/app/PeopleScreen';

export default createStackNavigator(
  {
    People: PeopleScreen
  },
  {
    initialRouteName: 'People'
  }
);
