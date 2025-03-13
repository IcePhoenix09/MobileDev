
import React from 'react';
import { View, StyleSheet } from 'react-native'; 

export default function ColumnLayoutScreen() {

  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={[styles.square, { backgroundColor: 'red' }]} />
      <View style={[styles.square, { backgroundColor: 'green' }]} />
      <View style={[styles.square, { backgroundColor: 'blue' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    square: {
      width: 80,
      height: 80,
    },
  });

