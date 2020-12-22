
import { Image, StatusBar } from 'react-native'
import React, {  useState} from 'react'; 
import {StyleSheet, Text, View, ScrollView,TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { useRoute } from '@react-navigation/native';
 


export default function App(){
  const [telefone, setTelefone] = useState(String);
  const [imageURI, setImageURI] = useState<string[]>([]);
  const route = useRoute()
 
  
  async function handleSelectImages() {
    const {status} = await ImagePicker.requestCameraPermissionsAsync();
    if(status != 'granted'){
      alert('permitir acesso a midia');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if(result.cancelled){
      return;
    }
    const {uri} = result;
    setImageURI([...imageURI,uri]);
  } 
    return (
      
<ScrollView style={styles.container}>
<StatusBar
    barStyle = "dark-content"
    // dark-content, light-content and default
    hidden = {false}
    //To hide statusBar
    backgroundColor = "white"
    //Background color of statusBar only works for Android
    translucent = {false}
    //allowing light, but not detailed shapes
    networkActivityIndicatorVisible = {true}
/>
    <Text style={styles.loginButtonBelowText1}>Dados</Text>
    <View style={styles.hairline} />
    <Text style={styles.label}>Nome</Text>
    <TextInput style={styles.inputText} placeholder= 'Ex: orfanato Raio de Luz'></TextInput>
    
    <View style={styles.container2}>
    <Text style={styles.label}>Sobre</Text>
    <Text  style={styles.label1}>Máximo 300 caracteres</Text>
    </View>
    <TextInput multiline style={styles.inputText2}></TextInput>
    <Text style={styles.label}>Watsapp</Text>
    <TextInputMask
      placeholder = '(99) 99999 - 9999'
      type = {'cel-phone'}
      options = { {
      maskType : 'BRL',
      withDDD : true , 
      dddMask : ' (99)  ' 
      } }
      value = {telefone}
      onChangeText = {value => setTelefone(value)}
      style={styles.masktelefone}
    />
    <Text style={styles.label}>Fotos</Text>
    <View style={styles.fts}>
    {imageURI.map(imgUri =>{
      return(
        <Image key={imgUri} source={{uri:imgUri}} style={styles.previewFotos}></Image>
      );
    })}
    </View>
    
    <TouchableOpacity style={styles.fotos} onPress={handleSelectImages}>
    <BorderlessButton style={styles.iconbtn} onPress={()=>{}}>
        <Feather name="plus" size={20} color="white" />
      </BorderlessButton>
    </TouchableOpacity>
    <Text style={styles.loginButtonBelowText1}>Visitação</Text>
    <Text style={styles.label}>instruções</Text>
    <TextInput multiline style={styles.inputText2}></TextInput>
    <Text style={styles.label}>Horario de visitas</Text>
    <View style={styles.container}></View>
</ScrollView>

    )
}



const styles = StyleSheet.create({
  
  container:{
    flex:1,
  },
  fts:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    margin:20
  },
  iconbtn:{
    alignItems:'center',
    justifyContent:'center',
    
  },
  previewFotos:{
    width:60,
    alignSelf:'center',
    borderRadius:10,
    margin:20,
    height: 60, 
    backgroundColor:"#00BFFF",
    padding:5
  },
  fotos:{
    width:360,
    alignSelf:'center',
    borderRadius:10,
    height: 40, 
    backgroundColor:"#00BFFF",
    padding:5,
    borderColor: 'white',
    borderWidth: 3,
    borderStyle: 'dotted'
  },
  bar:{
    backgroundColor:'white'
  },
  inputStyle:{
    backgroundColor:'red'
  },
  masktelefone:{
    width:360,
    alignSelf:'center',
    borderRadius:10,
    height: 40, 
    padding:5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  container2:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  inputText:{
    width:360,
    alignSelf:'center',
    borderRadius:10,
    height: 40, 
    padding:5,
    borderColor: 'gray',
    borderWidth: 1,
    shadowOffset:{  width: 10,  height: 10,  },
shadowColor: 'black',
shadowOpacity: 1.0,
  },
  inputText2:{
    width:360,
    alignSelf:'center',
    alignItems:'flex-start',
    borderRadius:10,
    height: 100, 
    padding:5,
    borderColor: 'gray',
    borderWidth: 1
  },
  label:{
    fontSize: 20,
    padding:5,
    alignSelf: 'baseline',
    color: '#363636',
    margin:20
  },
  label1:{
    color: '#363636',
    fontSize:10,
    padding:5,
    margin:20,
    alignSelf:'center'
  },
  hairline: {
    backgroundColor: '#363636',
    height: 2,
    margin:20,
    width: 360,
    alignSelf:'center'
  },
  
  loginButtonBelowText1: {
    fontSize: 30,
    paddingHorizontal: 5,
    alignSelf: 'baseline',
    color: '#363636',
    marginTop:40,
    marginLeft:20
  }
})