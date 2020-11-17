import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NewMoodScreen = (props) => {

 return (
   <View style={styles.container}>
      <Text>New Mood Screen</Text>
      <Button title="Submit and go back to mood main" onPress={()=>props.navigation.goBack()} />
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
export default NewMoodScreen