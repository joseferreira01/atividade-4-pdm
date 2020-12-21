import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';
// import { Container } from './styles';
interface propHeader{
  titulo:string;
  showX?:boolean;
}
const Header: React.FC<HeaderProps> = ({titulo, showX=true}) => {
  const navigation = useNavigation();
  function handlerGoBackToAppHomepage(){
    navigation.navigate('OrphanagesMap');
  }
    
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <Text style={styles.title}> {titulo} </Text>
      {
        showX?(
          <BorderlessButton>
            <Feather name="x" size={24} color="#ff669d"/>
          </BorderlessButton>
        ):(
          <View/>
        )
      }
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f9fafc',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    padding: 24,
    borderWidth:2,
    borderBottomWidth: 1,
    borderColor: "dde3f0",
    paddingTop: 44,

  },
  title:{
    fontFamily: 'Nunito_600SimiBold',
    color:'#8fa7b3',
    fontSize:16,      

  }
})
export default Header;