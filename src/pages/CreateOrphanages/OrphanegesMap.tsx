import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import MapView, {Marker,Callout, PROVIDER_GOOGLE} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import mapMarker from '../imagens/map-maker.png';
import { RectButton} from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import OrphanageDetails from './OrphanageDetails';
import SelectMapPosition from './SelectMapPosition';
import { MapView } from 'expo';

const OrphanagesMap : React.FC = () => {
    const navigation = useNavigation();

    function handlerNavigateToOrgaphanageDatails(){
        navigation.navigate(OrphanageDetails);
    }
    function handlerNavigateToCreateOrphanage(){
        navigation.navigate(SelectMapPosition);
    }
    return(
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={
                    {
                        latitude:-6.5205485,
                        longitude:-38.4155765,
                        latitudeDelta:0.008,
                        longitudeDelta:0.008,
                    }
                }

        />
        <Marker
            icon={mapMarker}
            coordinate = {
                {
                    latitude:-6.5190522,
                    longitude:-38.4057993


                }
                

            }
        />


            
        </View>
    );

}
const styles = StyleSheet.create{
    container:{

    }
}