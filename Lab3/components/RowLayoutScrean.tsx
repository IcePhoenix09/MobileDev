
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native'; 

export default function RowLayoutScreen() {

  return (
    <View style={[styles.container, { flexDirection: "row" }]}>
      <View style={[styles.square, { backgroundColor: 'red' }]} />
      <View style={[styles.square, { backgroundColor: 'green' }]} />
      <View style={[styles.square, { backgroundColor: 'blue' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    square: {
      width: Platform.select({ android: 50, ios: 80 }),
      height: '25%',
    },
  });
