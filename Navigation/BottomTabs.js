import React from 'react';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from '../screens/Home/HomeScreen';
import Branches from '../screens/Branches/Branches';
import Units from '../screens/Units/Units';
import Customers from '../screens/Customers/Customers';

// icons
import {FontAwesome5} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator ();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DashboardX"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Branches"
        component={Branches}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="plus-network"
              size={24}
              color="black"
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Units"
        component={Units}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Customers"
        component={Customers}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
