import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import OrphanageDate from './pages/createOrphanage/OrphanageDate';
import SelectMapPositio from './pages/createOrphanage/SelectMapPosition';
import OrphanageMap from './pages/OrphanageMap'

import Header from  './components/Header';

// import { Container } from './styles';
const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      
        <Navigator screenOptions={{headerShown:false}}>
          <Screen 
            name='OrphanageMap' component={OrphanageMap}  options={{
            headerShown:true, 
            header:()=><Header titulo='Bem-vindo'/>}}
          />
          <Screen
           name='SelectMapPositio' component={SelectMapPositio}  options={{
            headerShown:true, 
            header:()=><Header titulo='selecione a localização'/>}}
           />
          <Screen name='OrphanageDate' component={OrphanageDate}  options={{
            headerShown:true, 
            header:()=><Header titulo='Tela de Cadastro'/>}}/>
        </Navigator>
        
       


    </NavigationContainer>
  );
}

export default Routes;