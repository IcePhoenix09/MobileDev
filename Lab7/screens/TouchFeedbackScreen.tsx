import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Alert,
} from 'react-native';

const TouchFeedbackScreen: React.FC = () => {
  const [pressStatus, setPressStatus] = useState('Not Pressed');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#053961' }]}
        
        onPress={() => Alert.alert('TouchableOpacity Pressed')}>
        <Text style={styles.text}>Opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={[styles.button, { backgroundColor: '#056121' }]}
        underlayColor="#45d671"
        onPress={() => Alert.alert('TouchableHighlight Pressed')}>
        <Text style={styles.text}>Highlight</Text>
      </TouchableHighlight>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#aaa' : '#b38e32' },
        ]}
        onPressIn={() => setPressStatus('Press In')}
        onPressOut={() => setPressStatus('Press Out')}
        onLongPress={() => setPressStatus('Long Pressed')}>
        <Text style={styles.text}>Pressable</Text>
      </Pressable>

      <Text style={styles.statusText}>{pressStatus}</Text>
    </View>
  );
};

export default TouchFeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    marginVertical: 12,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#2196F3',
    width: 200,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  statusText: {
    marginTop: 24,
    fontSize: 18,
    color: '#e37f32',
  },
});