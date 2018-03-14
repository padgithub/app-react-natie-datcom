import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Categrorys from '../homes/Category';

const CategroryStack = ({ navigation }) => (
  <CategroryStack navigation={navigation} />
);
const CategroryStacks = StackNavigator({
  Categrory: {
    screen: Categrorys,
    path: '/',
  },
});

export default CategroryStacks;
