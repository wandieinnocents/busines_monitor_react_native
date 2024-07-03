// StackNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import Branches from '../screens/Branches/Branches';
import Brands from '../screens/Brands/Brands';
import Units from '../screens/Units/Units';
import Customers from '../screens/Customers/Customers';

const Stack = createStackNavigator ();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Units" component={Units} />
  </Stack.Navigator>
);

export default StackNavigator;
