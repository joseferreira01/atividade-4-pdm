import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Header from  './components/Header';
import OrphanageData from './pages/CreateOrphanages/OrphanageData';
import SelectMapPosition from './pages/CreateOrphanages/SelectMapPosition';

// import { Container } from './styles';
const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      
        <Navigator screenOptions={{headerShown:false}}>
        <Screen name='ProjectsRegister' component={ProjectsRegister}  options={{
            headerShown:true, 
            header:()=><Header titulo='Tela de Cadastro'/>}}/>
          <Screen 
            name='SelectMapPosition' component={SelectMapPosition}  options={{
            headerShown:true, 
            header:()=><Header titulo='Selecione Mapa'/>}}
          />
          <Screen
           name='OrphanageDate' component={OrphanageData}  options={{
            headerShown:true, 
            header:()=><Header titulo='Informe os dados'/>}}
           />
          
        </Navigator>
        
       


    </NavigationContainer>
  );
}

export default Routes;