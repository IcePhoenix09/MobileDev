import React, { useState, useCallback, useMemo } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Button } from "react-native";
import { Item, PostItem } from "./Item";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";

let loadedIndex = 0;
const getNewData = (startIndex: Int32) => { 
  return new Array(10).fill(null).map((_, index) => ({
    id: `${startIndex + index + 1}`,
    name: `Item ${startIndex + index + 1}`,
    price: Math.floor(Math.random() * 100) + 1,
  }));
}

const data: Item[] = getNewData(loadedIndex);

const ItemFlatList = () => {
  const [items, setItems] = useState(data);
  const [refreshing, setRefreshing] = useState(false);
  const keyExtractor = (item: Item) => item.id.toString();

  const handleDelete = (item: Item) => {
    setItems(prevItems => prevItems.filter(i => i.id !== item.id));
  };


  // for sorting and filtering
  const [keyword, setKeyword] = useState('');
  const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC');
  const toggleOrder = () => {
    const newOrder = order === 'ASC' ? 'DESC' : 'ASC';
    setOrder(newOrder);
  };

  // first filter by keyword
  // then sort by name
  const postListFiltered = useMemo(() => {
    return items.filter(item =>
    item.name.toLowerCase().includes(keyword.toLowerCase()),
)}, [items, keyword]);

  const postListSorted = useMemo(() => postListFiltered.sort((a, b) => {
    if (order === 'ASC') {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  }), [postListFiltered, order]);
  const isEmpty = postListSorted.length === 0;

  

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      loadedIndex = 0;
      const newItems = getNewData(loadedIndex);
      setItems(newItems);
      setRefreshing(false);
    }, 2000);
  }, []);

  const onEndReached = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      loadedIndex += 10;
      const newItems = getNewData(loadedIndex);
      setItems(prev => [...prev, ...newItems]);
      setRefreshing(false);
    }, 2000);
  }, []);

  const renderPostListHeader = () => {
    return (
      <>
        <TextInput
          value={keyword}
          onChangeText={setKeyword}
          style={postListHeaderStyles.input}
        />

        <TouchableOpacity style={styles.sortButton} onPress={toggleOrder}>
          <Text>
            Order: {order} - Total: {postListSorted.length}
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  const renderPostItem = ({ item, index }: { item: Item; index: number }) => {
    return <PostItem item={item} onDelete={handleDelete}/>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={postListStyles.container}
        data={postListSorted}
        ListHeaderComponent={renderPostListHeader()}
        renderItem={renderPostItem}
        keyExtractor={keyExtractor}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
      />

      {items.length === 0 && (
        <Text style={styles.header}>No items in the list</Text>
      )}
      {items.length > 0 && postListSorted.length === 0 && (keyword !== "") && (
        <Text style={styles.header}> Can't find item - {keyword}</Text>
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
  header: {
    backgroundColor: '#ddd',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  sortButton: {
    backgroundColor: '#d2d2d2',
    padding: 10,
    borderRadius: 5,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    alignItems: 'flex-end',
    marginHorizontal: 10,
  },
});

const postListStyles = StyleSheet.create({
  container: {
    flex: 1  
  },
});


const postListHeaderStyles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export default ItemFlatList;