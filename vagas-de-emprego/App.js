import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { styles } from './styles';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  return (
 
    <View style={styles.container}>

    <Text style={styles.title}> Vagas de emprego </Text>      

      <ScrollView vertical={true}>

        <View style={styles.box}>
          <Text style={styles.info}> 
            Desenvolvedor back-end
          </Text>
          <Text style={styles.info2}> 
            Salário: R$3.000,00
          </Text>
          <Text style={styles.info2}> 
            Descrição: Vaga de desenvolvedor back-end para Java, C# e Python.
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.info}> 
            Engenheiro de dados
          </Text>
          <Text style={styles.info2}> 
            Salário: R$4.200,00
          </Text>
          <Text style={styles.info2}> 
            Descrição: Vaga de engenheiro de dados (não exige experiência).
          </Text>
          <Text style={styles.info2}> 
            Contato: (13) 99547-2135
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.info}> 
            Estagiário em UX
          </Text>
          <Text style={styles.info2}> 
            Salário: R$1.300,00
          </Text>
          <Text style={styles.info2}> 
            Descrição: Vaga de estágio na área de UX.
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.info}> 
            Scrum Master
          </Text>
          <Text style={styles.info2}> 
            Salário: R$5.600,00
          </Text>
          <Text style={styles.info2}> 
            Descrição: Vaga para Scrum Master, obter certificação Scrum Master.
          </Text>
        </View>

        </ScrollView>

    </View>
  );
}