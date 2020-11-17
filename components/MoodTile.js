import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TagList from './TagList';
import { TAGS } from '../data/mood-data'

const MoodTile = (props) => {

    const displayTags = TAGS.filter((tag) => tag.moodID === props.moodId);

    const iconSource = () => {
        if (props.icon === 'sunny') {
          return require('../assets/sunny.png');
        } else if (props.icon === 'cloudy') {
          return require('../assets/cloudy.png');
        } else {
          return require('../assets/rainy.png');
        }
      };
      const dayOfWeek = () => {
        if (props.day == '0') {
          return 'SUN';
        } else if (props.day == '1') {
          return 'MON';
        } else if (props.day == '2') {
          return 'TUE';
        } else if (props.day == '3') {
          return 'WED';
        } else if (props.day == '4') {
          return 'THR';
        } else if (props.day == '5') {
          return 'FRI';
        } else if (props.day == '6') {
          return 'SAT';
        }
      };

 return ( 
   <View style={styles.container}>
       <View>
           <View><Text>{props.date}</Text></View>
           <View><Text>{dayOfWeek()}</Text></View>
       </View>
       <View>
           <Image source={iconSource()} style={styles.tinyLogo} />
           <Text>{props.icon}</Text>
       </View>
       <View>
           <TagList tagList={displayTags} />
       </View>
       <View>
           <Text>{props.score}</Text>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    margin: 30,
  },
  tinyLogo: {
      width: 20,
      height: 20,
  }
});
export default MoodTile;