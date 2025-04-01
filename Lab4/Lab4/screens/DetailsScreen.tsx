import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../src/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;


const DetailsScreen = ({ route, navigation }: Props) => {
  const { userId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>User ID: {userId}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Check Profile" onPress={() => navigation.navigate('Profile', {isInfo: false})} />
      <Button title="Check Profile with info" onPress={() => navigation.navigate('Profile', {isInfo: true})} />
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
