import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';

export default function App(){

const [num, setNum] = useState(0)

function ativar(){
  setNum(Math.floor(Math.random() * 10));
}

let img = 'https://pm1.narvii.com/6343/8d0d0b4201182c5a5fe139ed79592313d10b23e8_hq.jpg'

    return(
      <View style={styles.area}>

      <Text style={styles.titulo}>Jogo do n° aleatório</Text>

      <Image source={{ uri: img }} style={styles.img} />

      <Text style={styles.texto2}>Pense em um número de 0 a 10</Text>
      
      <Text style={styles.num}> {num} </Text>

      <Button style={styles.btn} title="Descobrir" color='#8D48B3' onPress={ativar} />

      </View>
    )
}