import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ProgressCircle } from 'react-native-progress-circle'

const MoodCircle = (props) => {

 return (
     <ProgressCircle 
        percent={props.score * 20} 
        radius={4} 
        borderWidth={8} 
        color="#3399FF" 
        shadowColor="#999" 
        bgColor="#fff">
         <Text>{props.score}</Text>
     </ProgressCircle>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MoodCircle;