import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../src/navigation';
import { useLocalSearchParams } from 'expo-router';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;


const ProfileScreen = ({ route, navigation }: Props) => {
    const { isInfo } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Text>Is Info: {isInfo}</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
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
