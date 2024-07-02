import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function CustomDrawerComponent (props) {
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor: '#b3edf5'}}>
      {/* drawer header */}
      <View style={styles.header}>
        <FontAwesome5 name="user-circle" size={50} color="black" />
        <Text style={styles.headerText}>Business Monitor</Text>
        <Text style={{fontSize: 12}}>wandieinnocent2@gmail.com</Text>
      </View>
      <DrawerItemList {...props} />
      <View style={styles.horizontalLine} />

      {/* drawer footer */}
      <View style={styles.footer}>
        {/* <Text style={styles.footerText}>Footer Content</Text> */}
        <DrawerItem
          label="Logout"
          icon={({color, size}) => (
            <FontAwesome5 name="sign-out-alt" size={size} color={color} />
          )}
          onPress={() => {
            /* Add logout logic here */
          }}
        />
      </View>

    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create ({
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  headerText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 'auto', // Push the footer to the bottom
    // padding: 2,
    backgroundColor: '#f7f7f7',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default CustomDrawerComponent;
