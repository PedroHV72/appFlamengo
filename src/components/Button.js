import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button(props) {
 return (
    <View style={styles.contentButton}>
        <TouchableOpacity style={styles.button} onPress={props.button}>
            <Text style={styles.textButton}>{props.name}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    contentButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    button: {
        backgroundColor: '#000',
        width: 165,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        borderRadius: 5,
        paddingTop: 0
    },
    textButton: {
        fontFamily: 'Anton_400Regular',
        fontSize: 20,
        color: '#FFF'
    }
});