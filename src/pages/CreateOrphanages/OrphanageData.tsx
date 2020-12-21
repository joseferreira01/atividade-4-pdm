import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
import { RectButton, ScrollView, Switch, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'
const OrphanageData : React.FC = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Dados</Text>

            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.input}/>

            <Text style={styles.label}>Sobre</Text>
            <TextInput multiline style={[styles.input,{height:110}]}/>
            

            <Text style={styles.label}>Numero de Whatsapp</Text>
            <TextInput style={styles.input}/>
           

            <Text style={styles.label}>Fotos</Text>
            <TouchableOpacity style={styles.imagensIput} onPress={()=>{}}>
                <Feather name="plus" size={24} color="#15b6d6"/>
            </TouchableOpacity>

            <Text style={styles.title}>Visitação</Text>
            <TextInput multiline style={[styles.input,{height:110}]}/>

            <Text style={styles.label}>Horário de visitas</Text>
            <TextInput style={styles.input}/>

            <View style={styles.switchContainer}>
                <Text style={styles.label}>Atende no final de semana?</Text>
                <Switch
                   thumbColor="fff"
                   trackColor={{false:'#ccc', true:'#39cc83'}}
                />
            </View>
            <RectButton style={styles.nextButton} onPress={()=>{}}>
                <Text>Cadastrar</Text>
            </RectButton>
           

        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 12,
        marginBottom: 8
        

    },
    title:{
        color: '#5c8599',
        fontSize: 24,
        fontFamily: 'Nunito_700SimiBold',
        marginBottom: 32,
        paddingBottom: 24,
        borderBottomWidth: 0.8,
        borderBottomColor: "#D3E2E6"

    },
    label:{
        color: '#8fa7b3',
        fontFamily: 'Nunito_600SimiBold',
        marginBottom: 8,

    },
    input:{
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#D3E2E6',
        borderRadius: 20,
        height: 56,
        paddingVertical: 'top'

    },
    imagensIput:{
        backgroundColor: 'rgb(255,255,255)',
        borderStyle: 'dashed',
        borderColor: "#96D2F0",
        borderWidth: 1.4,
        borderRadius: 20,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,

    },
    switchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16
    },
    nextButton:{
        backgroundColor: '#15c3d6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 32,

    },
})
export default OrphanageData;