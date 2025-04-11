import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import {Animated, TouchableOpacity} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ListScreen from './screens/ListScreen';
import MapScreen from './screens/MapScreen';
import InputScreen from './screens/InputScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'List' },
    { key: 'second', title: 'Map' },
    { key: 'third', title: 'Input' },
  ]);


  return (
    <GestureHandlerRootView>
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          first: ListScreen,
          second: MapScreen,
          third: InputScreen,
        })}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        tabBarPosition="bottom"
        style={{ backgroundColor: '#1f1c1c', flex: 1 }}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={{ backgroundColor: '#4e6851' }}
            indicatorStyle={{ backgroundColor: 'white' }}
          />
        )}
      />
    </GestureHandlerRootView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   tabBar: {
//     flexDirection: 'row',
//     backgroundColor: 'black',
//     paddingTop: 10,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 16,
//   },
// });
