import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Badge } from 'react-native-elements';

const TagList = (props) => {

    const renderTagItem = (itemData) => {
        return (
            <Badge
              value={<Text>{itemData.item.text}</Text>} />
        );
    }

 return (
   <View style={styles.container}>
      <FlatList 
        data={props.tagList}
        renderItem={renderTagItem} />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TagList;