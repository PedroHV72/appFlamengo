import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Squad from '../../components/Squad';
import TitleContent from '../../components/TitleContent';

export default function FullSquad() {
 return (
   <ScrollView style={styles.container}>

       <TitleContent 
       text='Goleiros'
       />

       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollPlayers}>
          <Squad 
          source={require('../../assets/neneca.png')}
          name='Hugo Neneca'
          position='Goleiro'
          age='23 anos'
          />
          <Squad 
          source={require('../../assets/diegoAlves.png')}
          name='Diego Alves'
          position='Goleiro'
          age='36 anos'
          />
       </ScrollView>

       <TitleContent 
       text='Laterais Direitos'
       />

       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollPlayers}>
          <Squad 
          source={require('../../assets/rodinei.png')}
          name='Rodinei'
          position='Lateral Direito'
          age='30 anos'
          />
          <Squad 
          source={require('../../assets/isla.png')}
          name='Isla'
          position='Lateral Direito'
          age='33 anos'
          />
          <Squad 
          source={require('../../assets/matheuzinho.png')}
          name='Matheuzinho'
          position='Lateral Direito'
          age='21 anos'
          />
       </ScrollView>

       <TitleContent 
       text='Zagueiros'
       />

       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollPlayers}>
          <Squad 
          source={require('../../assets/davidLuiz.png')}
          name='David Luiz'
          position='Zagueiro'
          age='34 anos'
          />
          <Squad 
          source={require('../../assets/rc.png')}
          name='Rodrigo Caio'
          position='Zagueiro'
          age='28 anos'
          />
          <Squad 
          source={require('../../assets/lp.png')}
          name='Léo Pereira'
          position='Zagueiro'
          age='26 anos'
          />
          <Squad 
          source={require('../../assets/fabricio.png')}
          name='Fabrício Bruno'
          position='Zagueiro'
          age='26 anos'
          />
          <Squad 
          source={require('../../assets/pabloNoticia.png')}
          name='Pablo'
          position='Zagueiro'
          age='30 anos'
          />
          <Squad 
          source={require('../../assets/gh.png')}
          name='Gustavo Henrique'
          position='Zagueiro'
          age='28 anos'
          />
       </ScrollView>

       <TitleContent 
       text='Laterais Esquerdos'
       />

       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollPlayers}>
          <Squad 
          source={require('../../assets/filipeLuis.png')}
          name='Filipe Luís'
          position='Lateral'
          age='36 anos'
          />

          <Squad 
          source={require('../../assets/rene.png')}
          name='Renê'
          position='Lateral'
          age='29 anos'
          />

          <Squad 
          source={require('../../assets/ramon.png')}
          name='Ramon'
          position='Lateral'
          age='21 anos'
          />
       </ScrollView>

       <TitleContent 
       text='Volantes'
       />

       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollPlayers}>
          <Squad 
          source={require('../../assets/arao.png')}
          name='Arão'
          position='Volante'
          age='30 anos'
          />
          <Squad 
          source={require('../../assets/andreas.png')}
          name='Andreas Pereira'
          position='Volante'
          age='26 anos'
          />
          <Squad 
          source={require('../../assets/thiagoMaia.png')}
          name='Thiago Maia'
          position='Volante'
          age='24 anos'
          />
          <Squad 
          source={require('../../assets/joaoGomes.png')}
          name='João Gomes'
          position='Volante'
          age='21 anos'
          />
       </ScrollView>

       <TitleContent 
       text='Meias'
       />

       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollPlayers}>
          <Squad 
          source={require('../../assets/arrascaeta.png')}
          name='Arrascaeta'
          position='Meia'
          age='27 anos'
          />
          <Squad 
          source={require('../../assets/diego.png')}
          name='Diego'
          position='Meia'
          age='37 anos'
          />
          <Squad 
          source={require('../../assets/everton.png')}
          name='Everton Ribeiro'
          position='Meia'
          age='32 anos'
          />
          <Squad 
          source={require('../../assets/lazaro.png')}
          name='Lázaro'
          position='Meia'
          age='20 anos'
          />
       </ScrollView>

       <TitleContent 
       text='Atacantes'
       />

       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollPlayers}>
          <Squad 
          source={require('../../assets/gabigol.png')}
          name='Gabriel Barbosa'
          position='Atacante'
          age='25 anos'
          />
          <Squad 
          source={require('../../assets/bh.png')}
          name='Bruno Henrique'
          position='Atacante'
          age='31 anos'
          />
          <Squad 
          source={require('../../assets/pedro.png')}
          name='Pedro'
          position='Atacante'
          age='24 anos'
          />
          <Squad 
          source={require('../../assets/marinho.png')}
          name='Marinho'
          position='Atacante'
          age='31 anos'
          />
          <Squad 
          source={require('../../assets/vitinho.png')}
          name='Vitinho'
          position='Atacante'
          age='28 anos'
          />
       </ScrollView>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15
  },
  scrollPlayers: {
    paddingBottom: 30
  },
  imgBanner: {
    height: 250,
    width: '100%'
  }
})