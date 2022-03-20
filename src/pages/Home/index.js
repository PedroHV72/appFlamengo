import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import NextMatch from '../../components/NextMatch';
import NoticesHome from '../../components/NoticesHome';
import Squad from '../../components/Squad';
import Button from '../../components/Button';
import TitleContent from '../../components/TitleContent';

export default function Home() {

    const navigation = useNavigation();

 return (
   <ScrollView style={styles.container}>
       <View>
            <Image
            source={require('../../assets/flaBanner.jpg')}
            style={styles.imgBanner}
            />
       </View>

       <TitleContent 
       text='Próximo Jogo'
       />

       <View style={styles.contentNextMatch}>
           <NextMatch 
           timeCasa={require('../../assets/logoFla.png')}
           timeVisitante={require('../../assets/logoVasco.png')}
           date='20/03'
           time='16:00'
           location='Maracanã'
           onPress={() => navigation.navigate('Lineup')}
           />
       </View>

       <TitleContent 
       text='Seja Sócio Torcedor'
       />

       <Text style={styles.textSocio}>Seja sócio, apoie o seu time do coração e tenha descontos em compras em nossa loja e descontos e acesso antecipado aos ingressos dos jogos. Além de poder vir conhecer nossas instalações no CT</Text>

       <Button 
       button={() => navigation.navigate('')}
       name='Garanta já'
       />

        <TitleContent 
       text='Notícias'
       />

       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <NoticesHome 
                source={require('../../assets/flaxvas.png')}
                name='Fla x Vasco'
                description='O Flamengo vence por 1x0 a equipe do Vasco, e dá um grande passo para conseguir a classificação.'
                viewMore='Veja mais >>'
                onPress={() => navigation.navigate('NoticeMatch')}
            />

            <NoticesHome 
                source={require('../../assets/pabloNoticia.png')}
                name='Contratação'
                description='O zagueiro Pablo desembarca no mais querido e reforça o elenco rubro negro.'
                viewMore='Veja mais >>'
                onPress={() => navigation.navigate('NoticeHiring')}
            />

            <NoticesHome 
                source={require('../../assets/treinoFlamengo.png')}
                name='Treino pré jogo'
                description='O Flamengo continua sua preparação para a próxima partida.'
                viewMore='Veja mais >>'
                onPress={() => navigation.navigate('NoticeTraining')}
            />

            <NoticesHome 
                source={require('../../assets/vidal.png')}
                name='Craque vindo?'
                description='O craque Arturo Vidal deixou claro na imprensa que tem uma grande vontade de atual pelo Flamengo.'
                viewMore='Veja mais >>'
                onPress={() => navigation.navigate('NoticeRumor')}
            />
       </ScrollView>

       <TitleContent 
       text='Elenco'
       />

       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollSquad}>
            <Squad 
            source={require('../../assets/neneca.png')}
            name='Hugo Neneca'
            position='Goleiro'
            age='23 anos'
            />
            <Squad 
            source={require('../../assets/davidLuiz.png')}
            name='David Luiz'
            position='Zagueiro'
            age='34 anos'
            />
            <Squad 
            source={require('../../assets/filipeLuis.png')}
            name='Filipe Luís'
            position='Lateral'
            age='36 anos'
            />
            <Squad 
            source={require('../../assets/arrascaeta.png')}
            name='Arrascaeta'
            position='Meia'
            age='27 anos'
            />
            <Squad 
            source={require('../../assets/gabigol.png')}
            name='Gabriel Barbosa'
            position='Atacante'
            age='25 anos'
            />
       </ScrollView>

       <Button 
       button={() => navigation.navigate('FullSquad')}
       name='Ver elenco'
       />
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBanner: {
        height: 250,
        width: '100%'
    },
    contentSocio: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonSocio: {
        backgroundColor: '#000',
        width: 165,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        borderRadius: 5,
        paddingTop: 0
    },
    purchase: {
        fontFamily: 'Anton_400Regular',
        fontSize: 20,
        color: '#FFF'
    },
    textSocio: {
        paddingHorizontal: 25,
        paddingBottom: 15,
        paddingTop: 15,
        marginBottom: 15
    },
    contentNextMatch: {
        paddingHorizontal: 25,
        borderRadius: 5,
        elevation: 5
    },
    scrollSquad: {
        paddingBottom: 30
    }
})