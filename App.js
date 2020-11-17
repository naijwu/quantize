import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrackerNavigator from './navigation/TrackerNavigator';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = () => { 
    return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'dm-sans-bold': require('./assets/fonts/DMSans-Bold.ttf'),
    })
  }

  if (!fontLoaded) {
    return(
      <AppLoading
        startAsync={loadFonts}
        onFinish={()=>setFontLoaded(true)}
        onError={(err)=>console.log(err)} />
    );
  }

  return <TrackerNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
