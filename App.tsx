
import React from 'react';
//import {AppLoading} from 'expo';
import AppLoading from 'expo-app-loading';
import Routes from './src/Routes'
import {useFonts} from 'expo-font';
import {
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_800ExtraBold} from '@expo-google-fonts/nunito';


export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <Routes/>
  );
}


