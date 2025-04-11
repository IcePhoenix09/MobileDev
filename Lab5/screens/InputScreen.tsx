import {useState} from 'react';
import { View, Text, Button, StyleSheet, Pressable, Platform } from 'react-native';
import { Switch, TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';


const InputScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isWiFi, setWiFi] = useState(true);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<'date' | 'time'>('date');

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showPicker = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input</Text>
      <TextInput style={styles.inputField}  
        placeholder='Enter username'
        placeholderTextColor='#4e6851'
        value={username}
        onChangeText={(e) => {
          setUsername(e);
        }}></TextInput>
      <TextInput style={styles.inputField}
        placeholder='Enter password'
        placeholderTextColor='#4e6851' 
        secureTextEntry
        value={password}
        onChangeText={(e) => {
          setPassword(e);
        }}></TextInput>

        <Pressable style={styles.button} onPress={() => {
          console.log('Username: ', username);
          console.log('Password: ', password);
          setUsername('');
          setPassword('');
        }}>
         <Text style={{color: '#ddd', fontWeight: 'bold'}}>Submit</Text>
        </Pressable>

        <Text style={styles.infotext}>WiFi</Text>
        <Switch value={isWiFi}
            onValueChange={
              (value) => { 
                setWiFi(value);
              }
            }
            trackColor={{ false: '#7d6150', true: '#5a635c' }}
            thumbColor={isWiFi === true ? '#4e6851' : '#B83A2D'}
        />

        <Text style={styles.infotext}>Airplane Mode</Text>
        <Switch value={!isWiFi}
            onValueChange={
              (value) => { 
                setWiFi(!value);
              }
            }
            trackColor={{ false: '#7d6150', true: '#5a635c' }}
            thumbColor={isWiFi === false ? '#4e6851' : '#B83A2D'}
        />

        {Platform.OS === 'android' && (
          <>
            <Pressable style={styles.button} onPress={() => showPicker('date')}>
              <Text style={styles.infotext}> Pick Date: {date.toLocaleDateString()}</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => showPicker('time')}>
              <Text style={styles.infotext}> Pick Time: {date.toLocaleTimeString()}</Text>
            </Pressable>
          </>
        )}

        {(show || Platform.OS === 'ios') && (
          <DateTimePicker
            value={date}
            mode={Platform.select({ ios: 'datetime', android: mode })}
            display="default"
            onChange={onChange}
            style={{ backgroundColor: 'white' }}
          />
        )}


        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            display="default" // 'spinner' or 'calendar' on Android
            onChange={onChange}
          />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DCC9A9',
    marginBottom: 20,
  },
  infotext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#DCC9A9',
  },

  inputField: {
    width: '80%',
    height: 40,
    color: '#DCC9A9',
    borderColor: '#DCC9A9',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#1f1c1c',
  },

  button: {
    backgroundColor: '#4e6851',
    padding: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default InputScreen;
// 