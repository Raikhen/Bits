import React                        from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons }   from '@expo/vector-icons';

import FriendsNavigator              from './FriendsNavigator';
import ChatsNavigator               from './ChatsNavigator';
import ProfileNavigator             from './ProfileNavigator';
import Constants                    from '../utilities/Constants';

export default createBottomTabNavigator(
  {
    FriendsNavigator: {
      screen: FriendsNavigator,
      navigationOptions: {
        title: 'Friends',
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
    initialRouteName: 'FriendsNavigator',
    tabBarOptions: {
      activeTintColor: Constants.styling.colors.primary,
      inactiveTintColor: Constants.styling.colors.secondary,
      activeBackgroundColor: Constants.styling.colors.quaternary,
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
