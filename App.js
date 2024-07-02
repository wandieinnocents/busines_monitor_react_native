import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {Avatar, Card, Divider} from 'react-native-paper';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// icons
import {FontAwesome5} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import HomeScreen from './screens/Home/HomeScreen';
import Branches from './screens/Branches/Branches';
import Brands from './screens/Brands/Brands';
import Units from './screens/Units/Units';
import Customers from './screens/Customers/Customers';
import CustomDrawerComponent from './Navigation/CustomDrawerComponent';

//drawer and bottom nav
const Drawer = createDrawerNavigator ();
const Tab = createBottomTabNavigator ();
const Stack = createNativeStackNavigator ();

function BottomTabs () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard1"
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
            <FontAwesome5 name="home" size={size} color={color} />
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
}

// Define your stack navigator
function StackNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Units" component={Units} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

export default function App () {
  return (
    // <SafeAreaView style={{flex: 1, marginTop:40}}>
    //   <PaperProvider>
    //     <Home />
    //   </PaperProvider>
    // </SafeAreaView>

    (
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer>

            <Drawer.Navigator
              drawerContent={props => <CustomDrawerComponent {...props} />}
            >

              <Drawer.Screen
                name="Dashboard"
                component={BottomTabs}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />

              <Drawer.Screen
                name="Branches"
                component={Branches}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />
              <Drawer.Screen
                name="Brands"
                component={Brands}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />
              <Drawer.Screen
                name="Units"
                component={Units}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />
            </Drawer.Navigator>

          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    )
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '1px',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 3,
    marginHorizontal: 20,
  },

  column: {
    flex: 1,
    marginHorizontal: 5,
    padding: 3,
    backgroundColor: '#f0f0f0',
  },

  // card
  card_bg: {
    backgroundColor: '#0d3897',
  },

  card_text: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: '20px',
  },

  card_divider: {
    marginTop: 5,
  },
  horizontalLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
