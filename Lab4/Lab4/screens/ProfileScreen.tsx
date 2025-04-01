import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../src/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;


const ProfileScreen = ({ route, navigation }: Props) => {
    const { isInfo } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: 'Your profile',
            headerRight: () => <Button disabled={!isInfo} title="Info" onPress={() =>
            alert('More info')} />
        });
        }, [route.params.isInfo]);

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
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
