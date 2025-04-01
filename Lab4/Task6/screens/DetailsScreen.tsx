import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const DetailsScreen = () => {

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>User ID: </Text>
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

export default DetailsScreen;
