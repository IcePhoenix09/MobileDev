import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const ProfileScreen = () => {

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
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

export default ProfileScreen;
