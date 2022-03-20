import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function NoticeHiring() {
 return (
    <ScrollView style={styles.container}>
      <Image 
      source={require('../../assets/pabloNoticia.png')}
      style={styles.imgNotice}
      />
      <View style={styles.contentNotice}>
        <Text style={styles.titleNotice}>Contratação anunciada</Text>
        <Text style={styles.textNotice}>O zagueiro Pablo desembarca no mais querido e reforça o elenco rubro negro. Ele que veio de uma pasagem pelo Lokomotiv de Moscou</Text>
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