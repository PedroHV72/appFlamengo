import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Squad(props) {
 return (
   <View style={styles.container}>
       <Image 
       source={props.source}
       style={styles.imgPlayer}
       />

       <View style={styles.areaName}>
            <Text style={styles.name}>{props.name}</Text>
       </View>

       <View style={styles.areaInformation}>
            <Text style={styles.information}>{props.position}</Text>
            <Text style={styles.information}>{props.age}</Text>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#FFF',
        height: 300,
        width: 250,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5
    },
    imgPlayer: {
        height: 180,
        width: 220
    },
    areaName: {
        paddingTop: 10
    },
    name: {
        fontFamily: 'Anton_400Regular',
        fontSize: 21,
        color: 'red'
    },
    areaInformation: {
        paddingTop: 7
    },
    information: {
        fontFamily: 'Anton_400Regular',
        fontSize: 15,
        color: '#000'
    }
});