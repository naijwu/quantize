import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { MOODS } from '../data/mood-data';
import MoodTile from './MoodTile';

const formattedDate = (itemDate) => {
    var d = new Date(itemDate);
    return (
      d.getFullYear() +
      '/' +
      (d.getMonth() + 1) +
      '/' +
      d.getDate() +
      ' ' +
      d.getHours() +
      ':' +
      d.getMinutes()
    );
};

const MoodList = (props) => {

    const moodItem = (itemData) => {
        return( 
            <MoodTile 
                moodId = {itemData.item.id}
                date={formattedDate(itemData.item.date)} 
                day={new Date(itemData.item.date).getDay()}
                icon={itemData.item.weatherIcon}
                score={itemData.item.score} />
        );
    }

 return (
   <View style={styles.detailContainer}>
      <FlatList
        data={MOODS}
        renderItem={moodItem} />
   </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  itemContainer: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
  }
});
export default MoodList;