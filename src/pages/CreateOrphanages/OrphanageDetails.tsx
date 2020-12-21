import { MapView } from 'expo';
import React from 'react';
import { View, Text,StyleSheet,ScrollView,Image,Dimensions} from  'react-native';
import mapMarker from '../imagens/map-maker.png';
import {Feather, FontAwesome} from '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';
const OrphanageDetails: React.FC = () => {
    return(
        <ScrollView style={styles.container}>
            
            <View style={styles.imagensContainer}>
                <ScrollView horizontal pagingEnabled>
                    <Image style={styles.image} 
                    source={{uri:'https://fmnona.com.br/images/noticias/safe_image.jpg'}}/>
                    <Image style={styles.image} 
                    source={{uri:'https://fmnona.com.br/images/noticias/safe_image.jpg'}}/>
                </ScrollView>
            </View>
            <View>
                <View style={styles.detailOrphanageContainer}>
                    <Text style={styles.title}>Lar dos idosos</Text>
                    <Text style={styles.description}>Presta assistência especializada para idosos</Text>
                </View>
                <View style={styles.mapContainer}>
                    <MapView
                        initialRegion={{
                        latitude:-6.5205485,
                        longitude:-38.4155765,
                        latitudeDelta:0.008,
                         longitudeDelta:0.008,
                    }}
                    zoomEnabled={false}
                    pitchEnabled={false}
                    scrollEnabled={false}
                    rotateEnabled={false}
                    style={styles.mapStyle}
                    />
                    <Marker icon={mapMarker} coordinate = {
                       {
                            latitude:-6.5190522,
                            longitude:-38.4057993

                        }               
                    }/>

                </View>
                
                <View style={styles.routesContainer}>
                    <Text style={styles.routesText}> Ver rotas no google maps</Text>
                </View>
            </View>

            <View style={styles.separator}>
                <Text style={styles.title}>Instruções para visitar</Text>
                <Text style={styles.description}>venha visitar efazer alegria de uma pessoa</Text>
                <View style={styles.scheduleContainer}>
                    <View style={[styles.scheduleItem,styles.scheduleItemBlue]}>
                        <Feather name="clock" size={40} color="#2ab5d1"/>
                        <Text style={[styles.scheduleItemText,styles.scheduleItemTextBlue]}>Segunda à sexta 8:00hs às 12:00hs</Text>

                    </View>
                    <View style={[styles.scheduleItem,styles.scheduleItemGreen]}>
                        <Feather name="clock" size={40} color="#2ab5d1"/>
                        <Text style={[styles.scheduleItemText,styles.scheduleItemTextGreen]}>Não recebemos visitas no final de semana</Text>

                    </View>

                </View>

            </View>
            <RectButton style={styles.contactButton} onPress={()=>{}}>
                <FontAwesome name="whatsapp" size={20} color="#fff"/>
                <Text style={styles.contactButtonText}>Entrar em contato</Text>

            </RectButton>
           
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 12

    },
    imagensContainer:{
        height: 240,

    },
    image:{
        width: Dimensions.get('window').width,
        height: 240,
        resizeMode: 'cover'

    },
    title:{
        color: '#4D6F80',
        fontSize: 30,
        fontFamily: 'Nunito_700Bold'

    },
    detailOrphanageContainer:{
        padding: 24,


    },
    description:{
        fontFamily: 'Nunito_600SemiBold'

    },
    mapContainer:{
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1.2,
        borderColor: '#E6F7FB'

    },
    mapStyle:{
        width: '100%',
        height: 150

    },
    routesText:{
        fontFamily: 'Nunito_700Bold',
        color: '#0089a5'

    },
    routesContainer:{
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B3DAE2'

    },
    separator:{
        height:0.8,
        width: '100%',
        backgroundColor: '#D3E2E6',
        marginVertical: 40,

    },
    scheduleContainer:{
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    scheduleItem:{
        width: '48%',
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,

    },
    scheduleItemGreen:{
        color: '#EDF7FB',       
        borderColor: '#A1E9C5',
        

    },
    scheduleItemText:{
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        lineHeight: 24,
        marginTop: 20

    },
    scheduleItemBlue:{
        backgroundColor: '#36F7B',
        borderColor: '#B3DAE2',
        

    },
    scheduleItemTextBlue:{
        color: '#5C8599'
    },
    scheduleItemTextGreen:{
        color: '#37C77F'
    },
    contactButton:{
        backgroundColor: '#3CDC8C',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 40,
        marginBottom: 40

       

    },
    contactButtonText:{
        fontFamily: 'Nunito_800ExtraBold',
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16
        

    }
})
export default OrphanageDetails;