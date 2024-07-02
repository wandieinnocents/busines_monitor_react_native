import React from 'react';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home1" component={HomeScreen} />
      <Tab.Screen name="Branches" component={Branches} />
      <Tab.Screen name="Units" component={Units} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
