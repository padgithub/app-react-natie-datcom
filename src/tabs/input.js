import Expo from 'expo';
import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';
import { Icon,SearchBar } from 'react-native-elements';

import InputHome from '../views/input_home';
import InputDetails from '../views/input_details';

const InputTabView = ({ navigation }) => (
  <InputHome navigation={navigation} />
);

const dummySearchBarProps = {
  showLoading: true,
  onFocus: () => console.log("focus"),
  onBlur: () => console.log("blur"),
  onCancel: () => console.log("cancel"),
  onClearText: () => console.log("cleared"),
  onChangeText: text => console.log("text:", text),
}

const InputDetailTabView = ({ navigation }) => (
  <InputDetails
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

const InputTab = StackNavigator({
  Input: {
    screen: InputTabView,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      //title: 'Input'
      headerRight: (
        <SearchBar placeholder="Nhập chửa hàng cần tìm" platform="ios" {...dummySearchBarProps} />
      ),
    }),

  },
  Input_Detail: {
    screen: InputDetailTabView,
    path: '/input_detail',
    navigationOptions: {
      title: 'Input Detail',
    },
  },
});

export default InputTab;
