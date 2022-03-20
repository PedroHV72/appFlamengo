import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TitleContent(props) {
 return (
   <View style={styles.container}>
       <Text style={styles.text}>{props.text}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15
    },
    text: {
        fontSize: 35,
        fontFamily: 'Anton_400Regular',
        color: 'red'
    }
});