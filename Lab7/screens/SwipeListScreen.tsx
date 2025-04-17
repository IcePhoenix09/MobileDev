import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import SwipeableItem from '../components/SwipeableItem';

interface ListItem {
  id: number;
  text: string;
}

const SwipeListScreen: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>(
    Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      text: `Item #${i + 1}`,
    }))
  );

  const handleSwipe = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swipe List</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SwipeableItem
            text={item.text}
            onSwipe={() => handleSwipe(item.id)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default SwipeListScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1c1b18',
    },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});