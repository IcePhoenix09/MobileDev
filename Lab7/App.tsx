import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import {Animated, TouchableOpacity} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TouchFeedbackScreen from './screens/TouchFeedbackScreen';
import ScrollExampleScreen from './screens/ScrollExampleScreen';
import SwipeListScreen from './screens/SwipeListScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Task1' },
    { key: 'second', title: 'Task2' },
    { key: 'third', title: 'Task3' },
  ]);


  return (
    <GestureHandlerRootView>
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          first: TouchFeedbackScreen,
          second: ScrollExampleScreen,
          third: SwipeListScreen,
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