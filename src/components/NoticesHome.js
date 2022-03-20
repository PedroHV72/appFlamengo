import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

export default function NoticesHome(props) {

  function filterDesc(desc) {
    if(desc.length < 27){
        return desc;
    }

    return `${desc.substring(0, 36)}...`
}

 return (
   <TouchableOpacity style={styles.container} onPress={props.onPress}>
       <Image 
          source={props.source}
          style={styles.img}
       />

       <View style={styles.areaTitle}>
         <Text style={styles.title}>{props.name}</Text>
       </View>
       
       <Text style={styles.description}>{filterDesc(props.description)}</Text>

       <Text style={styles.viewMore}>{props.viewMore}</Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#FFF',
        height: 400,
        width: 300,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5
    },
    img: {
      height: 250,
      width: 270
    },
    areaTitle: {
      paddingTop: 10
    },
    title: {
      fontFamily: 'Anton_400Regular',
      fontSize: 25,
      color: '#000'
    },
    description: {
      paddingTop: 12
    },
    viewMore: {
      paddingTop: 20,
      fontFamily: 'Anton_400Regular',
      fontSize: 15,
      color: 'red'
    }
})