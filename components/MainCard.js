import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainCard = (props) => {

 return (
   <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity onPress={props.onClick}>
          <Image 
            source={props.imageUrl} 
            containerStyle={{ width: 200, height: 200 }}
        />
      </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'dm-sans-bold',
    fontSize: 20,
    textAlign: 'center',
  }
});
export default MainCard