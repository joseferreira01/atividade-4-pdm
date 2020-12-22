import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native'
// import { Container } from './styles';
interface propHeader{
  titulo:string;
}
const Header: React.FC<propHeader> = ({titulo}) => {
  const navigation = useNavigation()
  function goBackToListProducts(){
    navigation.navigate('ListProducts');
  }
  
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={goBackToListProducts}>
        <Feather name="arrow-left" size={25} color="#00BFFF" />
      </BorderlessButton>
      <Text style={styles.title}> {titulo} </Text>

      <BorderlessButton onPress={goBackToListProducts}>
        <Feather name="x" size={20} color="black" />
      </BorderlessButton>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-around',
    height:80,
    elevation:5
  },
  title:{
    
    color:'black',
    fontSize:15,
    
  }
})
export default Header;