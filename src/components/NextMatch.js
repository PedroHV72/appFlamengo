import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function NextMatch(props) {
 return (
   <View style={styles.container}>
       <View style={styles.match}>
           <Image source={props.timeCasa} style={styles.logoTeam} />
           <Text style={styles.textMatch}>X</Text>
           <Image source={props.timeVisitante} style={styles.logoTeam} />
       </View>

       <View style={styles.contentInformationMatch1}>
           <Text style={styles.information}>Data:</Text>
           <Text style={styles.informationMatch}>{props.date}</Text>
       </View>
       <View style={styles.contentInformationMatch}>
           <Text style={styles.information}>Horário:</Text>
           <Text style={styles.informationMatch}>{props.time}</Text>
       </View>
       <View style={styles.contentInformationMatch2}>
           <Text style={styles.information}>Local:</Text>
           <Text style={styles.informationMatch}>{props.location}</Text>
       </View>

        <View style={styles.contentButtonMatch}>
            <TouchableOpacity style={styles.buttonMatch} onPress={props.onPress}>
                <Text style={styles.lineup}>Veja a escalação</Text>
            </TouchableOpacity>
        </View>
       
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        paddingHorizontal: 25,
        borderRadius: 7,
        elevation: 5, 
        paddingTop: 20,
        backgroundColor: '#FFF'
    },
    match: {
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20
    },
    logoTeam: {
        height: 60,
        width: 50
    },
    textMatch: {
        fontFamily: 'Anton_400Regular',
        fontSize: 30,
        paddingLeft: 30,
        paddingRight: 30
    },
    contentInformationMatch: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    contentInformationMatch2: {
        flexDirection: 'row',
        paddingBottom: 25
    },
    information: {
        fontFamily: 'Anton_400Regular',
        fontSize: 18,
        color: 'red'
    },
    informationMatch: {
        fontFamily: 'Anton_400Regular',
        fontSize: 18,
        color: '#000',
        marginLeft: 7
    },
    buttonMatch: {
        backgroundColor: '#000',
        width: 165,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        borderRadius: 5,
        paddingTop: 0
    },
    lineup: {
        fontFamily: 'Anton_400Regular',
        fontSize: 20,
        color: '#FFF'
    },
    contentButtonMatch: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    contentInformationMatch1: {
        flexDirection: 'row',
        paddingTop: 15
    },
});