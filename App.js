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

// icons
import {FontAwesome5} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

// pages
import HomeScreen from './screens/Home/HomeScreen';
import Branches from './screens/Branches/Branches';
import Brands from './screens/Brands/Brands';
import Units from './screens/Units/Units';
import Customers from './screens/Customers/Customers';
import CustomDrawerComponent from './Navigation/CustomDrawerComponent';
import Suppliers from './screens/Suppliers/Suppliers';
import Debtors from './screens/Debtors/Debtors';
import Expenses from './screens/Expenses/Expenses';
import Invoices from './screens/Invoices/Invoices';
import PointOfSale from './screens/PointOfSale/PointOfSale';
import Products from './screens/Products/Products';
import Quotations from './screens/Quotations/Quotations';
import Reciepts from './screens/Reciepts/Reciepts';
import Reports from './screens/Reports/Reports';
import SystemAdministration from './screens/Branches/SystemAdministration/SystemAdministration';
import Residences from './screens/Residences/Residences';
import BottomTabs from './Navigation/BottomTabs';

//drawer and bottom nav
const Drawer = createDrawerNavigator ();
// const Tab = createBottomTabNavigator ();

// function BottomTabs () {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Dashboard1"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <FontAwesome5 name="home" size={size} color={color} />
//           ),
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Branches"
//         component={Branches}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons
//               name="plus-network"
//               size={24}
//               color="black"
//             />
//           ),
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Units"
//         component={Units}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <FontAwesome5 name="home" size={size} color={color} />
//           ),
//           headerShown: false,
//         }}
//       />

//       <Tab.Screen
//         name="Customers"
//         component={Customers}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <FontAwesome5 name="home" size={size} color={color} />
//           ),
//           headerShown: false,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

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
                  ) => (
                    <MaterialCommunityIcons
                      name="plus-network"
                      size={20}
                      color="black"
                    />
                  ),
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
                name="Suppliers"
                component={Suppliers}
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

              <Drawer.Screen
                name="Products"
                component={Products}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />

              <Drawer.Screen
                name="Point Of Sale"
                component={PointOfSale}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />

              <Drawer.Screen
                name="Expenses"
                component={Expenses}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />

              <Drawer.Screen
                name="Customers"
                component={Customers}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />

              <Drawer.Screen
                name="Debtors"
                component={Debtors}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />

              <Drawer.Screen
                name="Reports"
                component={Reports}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />

              <Drawer.Screen
                name="Invoices"
                component={Invoices}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />

              <Drawer.Screen
                name="Quotations"
                component={Quotations}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />

              <Drawer.Screen
                name="Residences"
                component={Residences}
                options={{
                  drawerIcon: (
                    {color, size} // <Icon name="home-outline" color={color} size={size} />
                  ) => <FontAwesome5 name="home" size={17} color="black" />,
                }}
              />

              <Drawer.Screen
                name="System Administration"
                component={SystemAdministration}
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
