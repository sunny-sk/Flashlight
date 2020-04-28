import React, {useEffect} from 'react';
import HomeScreen from './screens/HomeScreen';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
const App = (props) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar backgroundColor="#140F2D" barStyle="light-content" />
      <HomeScreen />
    </>
  );
};

export default App;
