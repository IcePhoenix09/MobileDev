import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import ItemList from '../components/ItemList';


const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>List</Text>
        <ItemList />
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

export default ListScreen;
