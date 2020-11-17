import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import MainCard from '../components/MainCard';

const MainScreen = (props) => {

    const moodClickHandler = () => {
        props.navigation.navigate('MoodMain');
    };

 return (
   <View style={styles.container}>
      <Text>Main Screen</Text>
      <MainCard title="Mood" imageUrl={require('../assets/mood.jpg')} onClick={moodClickHandler} />
      <MainCard title="Food" imageUrl={require('../assets/food.jpg')} onClick={()=>props.navigation.navigate('FoodMain')}/>
      {/* <Button title="Mood Main Screen" onPress={()=>props.navigation.navigate('MoodMain')} /> */}
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
export default MainScreen;