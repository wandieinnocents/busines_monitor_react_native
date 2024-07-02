import React from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import Branches from '../Branches/Branches';
import Customers from '../Customers/Customers';

const Units = ({navigation}) => {
  return (
    <View>
      <Text>
        Branches page
      </Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate ('Customers')}
      />
    </View>
  );
};

export default Units;
