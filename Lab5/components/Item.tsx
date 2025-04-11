import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import { Swipeable } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

interface Item {
    id: string;
    name: string;
    price: number;
  }

type Props = {
  item: Item;
  onDelete: (item: Item) => void;
};

const PostItem = React.memo(
    ({item, onDelete}: Props) => {
      const renderRightActions = () => (
        <View style={ItemStyles.actionLabel}>
          <Text style={ItemStyles.title}>Deleting ... </Text>
        </View>
      );
      const onSwipeableOpen = () => {
        onDelete(item);
      }
    
      return (
        <Swipeable renderRightActions={renderRightActions}
                    onSwipeableOpen={onSwipeableOpen}>
          <View style={[ItemStyles.container, {flexDirection: 'row'}]}>
            <View style={[ItemStyles.info, {flexDirection: 'column'}]}>
              <Text style={ItemStyles.title}>{item.name}</Text>
              <Text style={ItemStyles.price}>{item.price} $</Text>
            </View>
            <Pressable style={ItemStyles.button} onPress={() => onDelete(item)}>
              <Text style={ItemStyles.buttonText}>Delete</Text>
            </Pressable>
            
          </View>
        </Swipeable>
      );
    }
)
    
const ItemStyles = StyleSheet.create({
    container: {
        padding: 10,
    },
    info:{
        justifyContent: 'space-between',
        marginRight: 70,
    },
    title: {
        color: '#DCC9A9',
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
      color: '#DCC9A9',
        fontSize: 14,
        marginTop: 10,
    },
    button: {
      backgroundColor: '#B83A2D',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 8,
      marginLeft: 'auto',
    },
    buttonText: {
      color: '#422a28',
      fontSize: 16,
      fontWeight: '600',
    },
    actionLabel: {
      color: '#DCC9A9',
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
    }
});


export {PostItem, Item};
