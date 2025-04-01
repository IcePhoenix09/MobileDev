import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../src/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      
      <Text>Welcome to Home Screen!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { userId: 42 })}
      />
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
