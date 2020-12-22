import React from 'react';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import OrfanageDetails from './pages/OrfanageDetails'
import ProjectsRegister from './pages/ProjectsRegister'
import ProductsDetales from './pages/ProjectsDetalhes';
import Header from  './components/Header';

// import { Container } from './styles';
const {Navigator, Screen} = createStackNavigator();
const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      
        <Navigator screenOptions={{headerShown:false, cardStyle:{backgroundColor:'#D3D3D3'}}}>
          <Screen 
            name='OrfanageDetails' component={OrfanageDetails}  options={{
              headerShown:true,
              header:()=><Header titulo='Adicionar Orfanato'/>}}
            
              />
          <Screen
           name='ProjectsDetales' component={ProductsDetales}  options={{
            headerShown:true, 
            header:()=><Header titulo='Detalhes Projetos'/>}}
           />
          <Screen name='ProjectsRegister' component={ProjectsRegister}  options={{
            headerShown:true, 
            header:()=><Header titulo='Tela de Cadastro'/>}}/>
        </Navigator>
        
       


    </NavigationContainer>
  );
}

export default Routes;