import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import { styles } from './styles';

export default function App(){

const [res, setRes] = useState('')
const [alc, setAlc] = useState(0)
const [gas, setGas] = useState(0)

  function calcular(){

    if ( (alc === '') || (gas === '') ){
      alert('É necessário digitar os valores!')
      return;
    }

    div = alc / gas

    if(div < 0.7){
      setRes('Álcool é melhor!');
    }else{
      setRes('Gasolina é melhor!');
    }
  }

    let img = 'https://png.pngtree.com/png-vector/20191028/ourmid/pngtree-gas-station-icon-cartoon-style-png-image_1893694.jpg';

    return(
      <View style={styles.container}>
      <View style={styles.box}>

      <Text style={styles.titulo}>Álcool ou Gasolina</Text>

      <Image source={{ uri: img }} style={styles.img} />

      <TextInput
      style={styles.input}
      placeholder="Preço do álcool"
      onChangeText={setAlc}
      keyboardType="numeric"
      />

      <TextInput
      style={styles.input}
      placeholder="Preço da gasolina"
      onChangeText={setGas}
      keyboardType="numeric"
      />

      <Button title="Verificar" color='#ab1515' onPress={calcular} />

      <Text style={styles.texto}> {res} </Text>

      </View>
      </View>
    )
}