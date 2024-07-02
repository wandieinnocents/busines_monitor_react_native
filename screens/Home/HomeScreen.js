import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import * as React from 'react';
import {AppRegistry, Dimensions, ScrollView, Platform} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {Avatar, Card, Divider, DataTable} from 'react-native-paper';
import {FontAwesome5} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const screenWidth = Dimensions.get ('window').width;
const chartConfig = {
  //   backgroundColor: '#e26a00',
  backgroundColor: '#1E3A8A', // Dark Blue
  backgroundGradientFrom: '#1E3A8A', // Dark Blue
  backgroundGradientTo: '#1D4ED8', // Blue
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [40, 60, 30, 50, 70, 80],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ['Rainy Days'], // optional
};

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const HomeScreen = () => {
  return (
    <PaperProvider>

      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/id/1253379369/vector/flat-vector-design-statistical-and-data-analysis-for-business-finance-investment-concept.jpg?s=612x612&w=0&k=20&c=aaZc8dFu5EZPt1xllMyn7cC2LwsON4zC2RJtJTduMC8=',
            }}
            style={{
              height: 200,
              resizeMode: 'cover',
              marginBottom: 10,
              borderBottomLeftRadius: 60,
              borderBottomRightRadius: 60,
            }}
          />

          {/* Dashboard  */}
          <View style={styles.row}>
            <View style={styles.column}>
              <Card style={styles.card_bg}>
                <Card.Content style={styles.center}>
                  <FontAwesome5 name="home" size={24} color="white" />
                  <Divider style={styles.card_divider} />
                  <Text style={styles.card_text}>New Customers</Text>
                  <Divider style={styles.card_divider} />
                  <Feather name="arrow-right" size={24} color="white" />

                </Card.Content>
              </Card>
            </View>
            <View style={styles.column}>
              <Card style={styles.card_bg2}>
                <Card.Content style={styles.center}>
                  <FontAwesome5 name="home" size={24} color="white" />
                  <Divider style={styles.card_divider} />
                  <Text style={styles.card_text}>Todays' Sales</Text>
                  <Divider style={styles.card_divider} />
                  <Feather name="arrow-right" size={24} color="white" />
                </Card.Content>
              </Card>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Card style={styles.card_bg2}>
                <Card.Content style={styles.center}>
                  <FontAwesome5 name="home" size={24} color="white" />
                  <Divider style={styles.card_divider} />
                  <Text style={styles.card_text}>Todays' Sales</Text>
                  <Divider style={styles.card_divider} />
                  <Feather name="arrow-right" size={24} color="white" />

                </Card.Content>

              </Card>

            </View>
            <View style={styles.column}>
              <Card style={styles.card_bg}>
                <Card.Content style={styles.center}>
                  <FontAwesome5 name="home" size={24} color="white" />
                  <Divider style={styles.card_divider} />
                  <Text style={styles.card_text}>Todays' Sales</Text>
                  <Divider style={styles.card_divider} />
                  <Feather name="arrow-right" size={24} color="white" />

                </Card.Content>

              </Card>

            </View>

          </View>

          {/* bar chart */}
          <Text
            style={{
              alignContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: 17,
              //   fontWeight:"bold",
              marginTop: 7,
            }}
          >
            Most Selling Product
          </Text>
          <View>
            <BarChart
              style={{marginTop: 2}}
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
            />
          </View>

          {/* line chart  */}
          <Text
            style={{
              alignContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: 17,
              //   fontWeight:"bold",
              marginTop: 7,
            }}
          >
            Most Selling Product
          </Text>

          <View>
            <LineChart
              data={data}
              width={screenWidth}
              style={{marginTop: 2}}
              height={220}
              chartConfig={chartConfig}
            />
          </View>

          {/* bar chart */}
          <Text
            style={{
              alignContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: 17,
              //   fontWeight:"bold",
              marginTop: 7,
            }}
          >
            Most Selling Product
          </Text>

          <View>
            <BarChart
              style={{marginTop: 2}}
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
            />
          </View>

          {/* End of dashboard */}
        </ScrollView>
      </SafeAreaView>

    </PaperProvider>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '1px',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
  card_bg2: {
    backgroundColor: '#d02f78',
  },

  card_text: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: '20px',
  },

  card_divider: {
    marginTop: 5,
  },

  chart_container: {
    marginHorizontal: 5,
    flex: 1,
    marginHorizontal: 5,
    padding: 3,
  },
});

export default HomeScreen;
