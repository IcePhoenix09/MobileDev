import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import RowLayoutScreen from './components/RowLayoutScrean';
import ColumnLayoutScreen from './components/ColumnLayoutScreen';
import GridLayoutScreen from './components/GridLayoutScreen';


export default function App() {

  enum LayoutType {
    Row = 'ROW',
    Column = 'COLUMN',
    Grid = 'GRID',
  }

  const [layout, setLayout] = useState<LayoutType>(LayoutType.Row);

  const toggleLayout = () => {
    if (layout === LayoutType.Row) setLayout(LayoutType.Column);
    else if (layout === LayoutType.Column) setLayout(LayoutType.Grid);
    else setLayout(LayoutType.Row);
  };


  return (
    <View style={styles.container}>
      {layout === LayoutType.Row ? <RowLayoutScreen /> : layout === LayoutType.Column ? <ColumnLayoutScreen /> : <GridLayoutScreen />}
      <Button title="Switch Layout" onPress={toggleLayout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
