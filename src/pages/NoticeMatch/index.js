import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';

export default function NoticeMatch() {
 return (
   <ScrollView style={styles.container}>
      <Image 
      source={require('../../assets/flaxvas.png')}
      style={styles.imgNotice}
      />
      <View style={styles.contentNotice}>
        <Text style={styles.titleNotice}>Flamengo vence por 1x0</Text>
        <Text style={styles.textNotice}>O Flamengo vence a equipe do Vasco, e dá um grande passo para conseguir a classificação. O próximo jogo vai acontecer no final de semana que vem, no dia 20/03 para completar os 180 minutos de disputa.</Text>
      </View>
      
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {

    },
    imgNotice: {
      width: '100%',
      height: 350
    },
    contentNotice: {
      paddingHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      marginTop: 30
    },
    titleNotice: {
      fontFamily: 'Anton_400Regular',
      fontSize: 25,
      color: 'red'
    },
    textNotice: {
      fontSize: 17,
      fontFamily: 'Anton_400Regular',
      color: '#000',
      paddingTop: 30
    }
})