import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';
import { styles } from './styles';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  
  let img1 = 'https://static.kbb.com.br/Uploads/ResearchTools/News/1225/1121c57c-a77a-4627-bfd8-72ab678abe1a.jpg';
  let img2 = 'https://garagem360.com.br/wp-content/uploads/2023/01/chevrolet-onix-rs.jpg';
  let img3 = 'https://garagem360.com.br/wp-content/uploads/2023/02/GM-Montana.jpg';
  let img4 = 'https://garagem360.com.br/wp-content/uploads/2022/05/renault-kwid-2023.jpg';

  return (
 
    <View style={styles.container}>

    <Text style={styles.title}> Anúncios </Text>      

      <ScrollView horizontal={true}>

        <View style={styles.box}>
          <Image source={{ uri: img1 }}  style={styles.img} />
          <Text style={styles.info}> 
            Gol
          </Text>
          <Text style={styles.info2}> 
            Ano: 2008
          </Text>
          <Text style={styles.info2}> 
            Valor: R$12.500,00
          </Text>
        </View>

        <View style={styles.box}>
          <Image source={{ uri: img2 }} style={styles.img} />
          <Text style={styles.info}> 
            Ônix
          </Text>
          <Text style={styles.info2}> 
            Ano: 2023
          </Text>
          <Text style={styles.info2}> 
            Valor: R$80.680,00
          </Text>
        </View>

        <View style={styles.box}>
          <Image source={{ uri: img3 }}  style={styles.img} />
          <Text style={styles.info}> 
            Montana
          </Text>
          <Text style={styles.info2}> 
            Ano: 2023
          </Text>
          <Text style={styles.info2}> 
            Valor: R$116.890,00
          </Text>
        </View>

        <View style={styles.box}>
          <Image source={{ uri: img4 }}  style={styles.img} />
          <Text style={styles.info}> 
            Kwid
          </Text>
          <Text style={styles.info2}> 
            Ano: 2023
          </Text>
          <Text style={styles.info2}> 
            Valor: R$71.290,00
          </Text>
        </View>

        </ScrollView>

    </View>
  );
}