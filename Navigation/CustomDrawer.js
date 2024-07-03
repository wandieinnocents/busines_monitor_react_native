import React from 'react';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//screens
import HomeScreen from '../screens/Home/HomeScreen';
import Branches from '../screens/Branches/Branches';
import Units from '../screens/Units/Units';
import Customers from '../screens/Customers/Customers';
import BottomTabs from './BottomTabs';
import Brands from '../screens/Brands/Brands';
import Suppliers from '../screens/Suppliers/Suppliers';
import Products from '../screens/Products/Products';
import PointOfSale from '../screens/PointOfSale/PointOfSale';
import Expenses from '../screens/Expenses/Expenses';
import Debtors from '../screens/Debtors/Debtors';
import Reports from '../screens/Reports/Reports';
import Invoices from '../screens/Invoices/Invoices';
import Quotations from '../screens/Quotations/Quotations';
import Residences from '../screens/Residences/Residences';
import SystemAdministration
  from '../screens/Branches/SystemAdministration/SystemAdministration';
import CustomDrawerComponent from './DrawerHeaderFooter';

// icons
import {FontAwesome5} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator ();

const CustomDrawer = () => {
  return (
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
  );
};

export default CustomDrawer;
