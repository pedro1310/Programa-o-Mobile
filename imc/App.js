import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import { styles } from './styles';

export default function App(){

const [res, setRes] = useState('')
const [p, setP] = useState(0)
const [a, setA] = useState(0)

  function calcular(){

    if ( (p === '') || (a === '') ){
      alert('É necessário digitar os valores!')
      return;
    }

    imc = p / (a * a)

    if(imc < 18.5){
      setRes('Abaixo do peso');
    }else if(imc >= 18.5 && imc < 25){
      setRes('Peso normal');
    }else if(imc >= 25 && imc < 30){
      setRes('Sobrepeso');
    }else if(imc >= 30 && imc < 35){
      setRes('Obesidade grau I');
    }else if(imc >= 35 && imc < 40){
      setRes('Obesidade grau II');
    }else if(imc >= 40){
      setRes('Obesidade grau III ou Mórbida');
    }
  }

    let img = 'https://play-lh.googleusercontent.com/yc_iTThxehE0XKnspc_d9Hal_OgRAPY-9SeTKw_HnT1SMG_CEEkU02Xk2Y0-t-MTEQ=w240-h480-rw';

    return(
      <View style={styles.container}>
      <View style={styles.box}>

      <Text style={styles.titulo}>Cálculo do IMC</Text>

      <Image source={{ uri: img }} style={styles.img} />

      <TextInput
      style={styles.input}
      placeholder="Peso (kg)"
      onChangeText={setP}
      keyboardType="numeric"
      />

      <TextInput
      style={styles.input}
      placeholder="Altura (m)"
      onChangeText={setA}
      keyboardType="numeric"
      />

      <TouchableOpacity
          style={styles.btn}
          onPress={calcular}  >
          <Text style={styles.btnt}>Calcular</Text>
        </TouchableOpacity>

      <Text style={styles.texto}> {res} </Text>

      </View>
      </View>
    )
}