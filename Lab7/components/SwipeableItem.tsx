import React, { useRef } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

interface SwipeableItemProps {
  text: string;
  onSwipe: () => void;
}

const ITEM_WIDTH = Dimensions.get('window').width;

const SwipeableItem: React.FC<SwipeableItemProps> = ({ text, onSwipe }) => {
  const scrollRef = useRef<ScrollView>(null);

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    if (offsetX > ITEM_WIDTH / 2) {
      onSwipe();
    } else {
      // Go back to the original position
      scrollRef.current?.scrollTo({ x: 0, animated: true });
    }
  };

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      pagingEnabled={false}
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={handleScrollEnd}
      scrollEventThrottle={16}
      style={styles.wrapper}
    >
      <View style={styles.item}>
        <Text style={styles.itemText}>{text}</Text>
      </View>

      <View style={{ width: ITEM_WIDTH }} />
    </ScrollView>
  );
};

export default SwipeableItem;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8,
  },
  item: {
    width: ITEM_WIDTH,
    backgroundColor: '#25467d',
    padding: 20,
    borderRadius: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
  },
});
