import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import styles from '../styles/styles.js'

const Home = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.sectionContainer}>
        <Button
          title="Monday's Schedule"
          onPress={() =>
            navigation.navigate('Schedule', { dayToPrint: 'Monday' })
          }
        />
        </View>
        <View style={styles.sectionContainer}>
        <Button
          title="Tuesday's Schedule"
          onPress={() =>
            navigation.navigate('Schedule', { dayToPrint: 'Tuesday' })
          }
        />
        </View>
        <View style={styles.sectionContainer}>
        <Button
          title="Wednesday's Schedule"
          onPress={() =>
            navigation.navigate('Schedule', { dayToPrint: 'Wednesday' })
          }
        />
        </View>
        <View style={styles.sectionContainer}>
        <Button
          title="Thursday's Schedule"
          onPress={() =>
            navigation.navigate('Schedule', { dayToPrint: 'Thursday' })
          }
        />
        </View>
        <View style={styles.sectionContainer}>
        <Button
          title="Friday's Schedule"
          onPress={() =>
            navigation.navigate('Schedule', { dayToPrint: 'Friday' })
          }
        />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;