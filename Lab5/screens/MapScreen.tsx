import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import LocationScreen from '../components/LocationScreen';


const MapScreen = () => {
  return (
    <View style={styles.container}>
      <LocationScreen></LocationScreen>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapScreen;
