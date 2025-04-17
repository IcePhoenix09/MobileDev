import {useState} from 'react';
import { ScrollView, View, Text, StyleSheet, RefreshControl } from 'react-native';

const items = new Array(15).fill(null).map((_, index) => (`Item ${index + 1}`));

const ScrollExampleScreen: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScrollView List</Text>
      <ScrollView style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {items.map((_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>{items[index]}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollExampleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1c1b18',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  scrollContainer: {
    height: 300, 
  },
  box: {
    padding: 20,
    backgroundColor: '#b38e32',
    borderRadius: 10,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: '#fff',
    fontSize: 16,
  },
});