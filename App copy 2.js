import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import * as React from 'react';
import {AppRegistry} from 'react-native';
import {PaperProvider} from 'react-native-paper';
//navigation
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import CustomDrawer from './Navigation/CustomDrawer';
import BottomTabs from './Navigation/BottomTabs';

export default function App () {
  return (
    // <SafeAreaView style={{flex: 1, marginTop:40}}>
    //   <PaperProvider>
    //     <Home />
    //   </PaperProvider>
    // </SafeAreaView>

    
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer>

            <CustomDrawer />

          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    

    
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
