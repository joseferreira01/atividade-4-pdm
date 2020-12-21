import React from 'react';
import { View, Text,StyleSheet, Dimensions} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import mapMarker from '../imagens/map-maker.png';
import {useNavigation} from '@react-navigation/native'

const SelectMapPosition : React.FC = () => {
    const navigation = useNavigation();
    function handleNextStep(){
        navigation.navigate('OrphanagesData');
    }
    return (
        <View style={styles.container}>
            <MapView initialRegion={{
                latitude:-6.5205485,
                longitude: -38.4155765,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
            }}
            style={styles.mapStyle}
            />
            <Marker
                incon={mapMarker}
                coordinate = {{
                    latitude:-6.5190522,
                    longitude:-38.4057993,
                }}

            ></Marker>
            <RectButton style={styles.nextButton} onPress={()=>{}}>
                <Text style={styles.nextButtonText}>Próximo</Text>

            </RectButton>

        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        position: 'relative'

    },
    mapStyle:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    nextButton:{
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,

        position: 'absolute',
        left: 24,
        right: 24,
        botton: 40,
    },
    nextButtonText:{
        fontFamily: 'Nunito_800SimiBold',
        fontSize: 16,
        color: '#FFF'

    }
})
export default SelectMapPosition;