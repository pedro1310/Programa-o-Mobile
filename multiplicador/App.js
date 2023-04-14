import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { styles } from './styles';

export default function App(){

  const [res, setRes] = useState('')
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)

  function calcular(){
    if ( (n1 === '') || (n2 === '') ){
      alert('É necessário digitar os valores!')
      return;
    }
    setRes(n1 * n2)
  }

    return(
      <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>

        <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        onChangeText={setN1}
        keyboardType="numeric"
        />

        <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        onChangeText={setN2}
        keyboardType="numeric"
        />

        <Button title="Calcular" color='#2942ff' onPress={calcular} />

        <Text style={styles.texto}> {res} </Text>
      
      </View>
      </View>
    )
}