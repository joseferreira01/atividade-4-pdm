import React from 'react';
import mapMarker from '../images/map-marker.png';
import MapView, 
{
  Marker,
  PROVIDER_GOOGLE,
  Callout

} from 'react-native-maps';

import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';

// import { Container } from './styles';

const OrphanageMap: React.FC = () => {
  const navigation = useNavigation();
  function handlerNavigateToOphanageDetails(){
    navigation.navigate('OphanageDetails');
  }
  return (
    <View style={styles.container}>

      <MapView style={styles.map}
      provider={PROVIDER_GOOGLE}
       initialRegion ={{
        latitude:-6.8912587,
        longitude:-38.375928,
        latitudeDelta:0.008,
        longitudeDelta:0.008
      }} >

        <Marker
        icon = {mapMarker}
        coordinate = {
          {
            latitude:-6.8912587,
            longitude:-38.375928,
          }
        }
        calloutAnchor={{x:2.7, y:0.8}}
        >
          <Callout tooltip={true}
          onPress={handlerNavigateToOphanageDetails}
          
          >
            <View style={styles.calloutContainer} >
              <Text style={styles.calloutText}> Orfanato dos idosos</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer} >
        <Text style={styles.footerText} >n Orfanatos</Text>
        <RectButton style={styles.createOphanageButton} 
        onPress={()=>{}} >
          <Feather name="plus" size={20}/>
        </RectButton>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  calloutContainer:{
    width:168,
    height:46,
    paddingHorizontal:16,
    backgroundColor:'#rgba(255,255,255,0.8)',
    borderRadius:16,
    justifyContent: 'center'
  },
  calloutText:{
    color:'#8889a5',
    fontSize:14,
    fontFamily:'Nunito_700Bold'
    
  },
  footer:{
      position:'absolute',
      left:24,
      right:24,
      bottom:32,
      backgroundColor:'#fff',
      borderRadius:28,
      height:46,
      paddingLeft:24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation:3
  },
  footerText:{
    color:'#8fa7b3',
    fontFamily:'Nunito_700Bold'

  },
  createOphanageButton:{
    width:56,
    height:56,
    backgroundColor:"#15c3d6",
    borderRadius:28,
    justifyContent: 'center',
    alignItems: 'center',

  }
});

export default OrphanageMap;