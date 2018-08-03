import React                        from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons }   from '@expo/vector-icons';

import PeopleNavigator              from './PeopleNavigator';
import ChatsNavigator               from './ChatsNavigator';
import ProfileNavigator             from './ProfileNavigator';
import Constants                    from '../utilities/Constants';

export default createBottomTabNavigator(
  {
    PeopleNavigator: {
      screen: PeopleNavigator,
      navigationOptions: {
        title: 'People',
        tabBarIcon: (
          <MaterialCommunityIcons
            name="account-multiple"
            style={{ marginBottom: -2 }}
            size={32}
            color={Constants.styling.colors.primary} />
        )
      }
    },
    ChatsNavigator: {
      screen: ChatsNavigator,
      navigationOptions: {
        title: 'Chats',
        tabBarIcon: (
          <MaterialCommunityIcons
            name="message"
            style={{ marginBottom: -2 }}
            size={27}
            color={Constants.styling.colors.primary} />
        )
      }
    },
    ProfileNavigator: {
      screen: ProfileNavigator,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: (
          <MaterialCommunityIcons
            name="emoticon-cool"
            style={{ marginBottom: -2 }}
            size={27}
            color={Constants.styling.colors.primary} />
        )
      }
    }
  },
  {
    initialRouteName: 'PeopleNavigator',
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
