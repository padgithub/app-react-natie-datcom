import Expo from 'expo';
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ButtonsTab from '../tabs/buttons';
import ListsTab from '../tabs/lists';
import InputTab from '../tabs/input';
import FontsTab from '../tabs/fonts';

const Components = TabNavigator(
  {
    ButtonsTab: {
      screen: ButtonsTab,
      path: '/buttons',
      navigationOptions: {
        tabBarLabel: 'Trang Chủ',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'home' : 'home'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    ListsTab: {
      screen: ListsTab,
      path: '/lists',
      navigationOptions: {
        tabBarLabel: 'Yêu Thích',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon name="heart" size={30} type="entypo" color={tintColor} />
        ),
      },
    },
    InputTab: {
      screen: InputTab,
      path: '/input',
      navigationOptions: {
        tabBarLabel: 'Tìm Kiếm',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="search"
            size={30}
            type="font-awesome"
            color={tintColor}
          />
        ),
      },
    },
    FontsTab: {
      screen: FontsTab,
      path: '/fonts',
      navigationOptions: {
        tabBarLabel: 'Giỏ Hàng',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'shopping-cart' : 'shopping-cart'}
            size={30}
            type="font-awesome"
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'ButtonsTab',
    animationEnabled: false,
    swipeEnabled: true,
    // Android's default option displays tabBars on top, but iOS is bottom
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      // Android's default showing of icons is false whereas iOS is true
      showIcon: true,
    },
  }
);

Components.navigationOptions = {
  drawerLabel: 'Trang Chủ',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="home"
      size={30}
      iconStyle={{
        width: 30,
        height: 30
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default Components;
