import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../src/navigation';
import { useLocalSearchParams } from 'expo-router';
import { Link } from 'expo-router';


type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;


const DetailsScreen = ({ route, navigation }: Props) => {
  const { userId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>User ID: {userId}</Text>


      <Link href={{ pathname: "/HomeScreen"}}>
        Go to Home
      </Link>

      <Link href={{ pathname: "/ProfileScreen", params: { isInfo: "false" } }}>
        Check Profile
      </Link>

      <Link href={{ pathname: "/ProfileScreen", params: { isInfo: "true" } }}>
        Check Profile with info
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

export default DetailsScreen;
