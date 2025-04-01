import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../src/navigation';
import { Link } from 'expo-router';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      
      <Text>Welcome to Home Screen!</Text>
      <Link href={{ pathname: "/DetailsScreen", params: { userId: "42" } }}>
        Go to Details
      </Link>
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

export default HomeScreen;
