import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

class App extends Component {
  render() {

    let nome = 'Pedro Henrique Garcia Rocha';
    let img = 'https://media.licdn.com/dms/image/D4D03AQFIGr_xRLbX0A/profile-displayphoto-shrink_800_800/0/1677684610255?e=2147483647&v=beta&t=MbQ9psoB0R2MrOWThmuruKT-qYeM7ng_yd1cTUq0SYw';

    return (

      <View style={styles.container}>
        
        <View style={styles.box}>
          <Text style={styles.main}> Meu perfil </Text>
                
          <Image source={{ uri: img }} style={styles.img} />

          <Text style={styles.title}> Dados pessoais: </Text>
          
          <Text style={styles.dados}> Pedro Henrique Garcia Rocha </Text>
          <Text style={styles.dados}> 19 Anos </Text>

          <Text style={styles.title}> Formação: </Text>
          <Text style={styles.dados}> Analista e desenvolvedor de sistemas </Text>

          <Text style={styles.title}> Experiência: </Text>
          <Text style={styles.dados}> Em busca... </Text>

          <Text style={styles.title}> Projetos: </Text>
          <Text style={styles.dados}> https://github.com/pedro1310 </Text>
        </View>

      </View>
    );
  }
}

export default App;
