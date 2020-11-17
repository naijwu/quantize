import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MoodCircle from '../components/MoodCircle'
import MoodList from '../components/MoodList'

const MoodMainScreen = (props) => {

 return (
   <View style={styles.container}>
      <Text>Main Mood Screen</Text>
      <Button title="Create new Mood log" onPress={()=>props.navigation.navigate('NewMood')} />
      <MoodList />
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
export default MoodMainScreen;