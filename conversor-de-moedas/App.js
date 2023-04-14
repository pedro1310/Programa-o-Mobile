import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles';

export default function App(){

const [valor, setValor] = useState('')
const [moedas, setMoedas] = useState(['Real', 'Dólar', 'Euro'])
const [moedaSel1, setMoedasel1] = useState([])
const [moedaSel2, setMoedasel2] = useState([])

function converter(){
  if(moedaSel1 == 1 && moedaSel2 == 2){
    newval = valor / 5.07
    setValor('Resultado: ' + newval.toFixed(2))
  }else if(moedaSel1 == 1 && moedaSel2 == 3){
    newval = valor / 5.54
    setValor('Resultado: ' + newval.toFixed(2))
  }

  if(moedaSel1 == 2 && moedaSel2 == 1){
    newval = valor * 5.07
    setValor('Resultado: ' + newval.toFixed(2))
  }else if(moedaSel1 == 2 && moedaSel2 == 3){
    newval = valor * 0.92
    setValor('Resultado: ' + newval.toFixed(2))
  }

  if(moedaSel1 == 3 && moedaSel2 == 1){
    newval = valor * 5.55
    setValor('Resultado: ' + newval.toFixed(2))
  }else if(moedaSel1 == 3 && moedaSel2 == 2){
    newval = valor * 1.09
    setValor('Resultado: ' + newval.toFixed(2))
  }
}

  return (
    <View style={styles.container}>
    <View style={styles.box}>

      <Text style={styles.title}>CONVERSOR DE MOEDAS</Text>

      <TextInput
      style={styles.input}
      placeholder="Valor"
      onChangeText={setValor}
      keyboardType="numeric"
      />
 
      <Picker
        selectedValue={moedaSel1}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => 
        setMoedasel1(itemValue)
        }>
        <Picker.Item label='De:'/>
        <Picker.Item label='Real' value={1}/>
        <Picker.Item label='Dólar' value={2}/>
        <Picker.Item label='Euro' value={3}/>
      </Picker>
      
      <Picker
        selectedValue={moedaSel2}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => 
        setMoedasel2(itemValue)
        }>

        <Picker.Item label='Para:'/>
        <Picker.Item label='Real' value={1}/>
        <Picker.Item label='Dólar' value={2}/>
        <Picker.Item label='Euro' value={3}/>
      </Picker>

      <TouchableOpacity
          style={styles.btn}
          onPress={converter}  >
          <Text style={styles.btnt}>Converter</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{valor}</Text>

    </View>
    </View>
   );
}
