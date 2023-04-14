import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import { styles } from './styles';

export default function App(){

const [num, setNum] = useState(0)

function add(){
  setNum(num + 1)
}

function exc(){
  if(num > 0){
    setNum(num - 1)
  }
}

    return(
      <View style={styles.container}>

        <Text style={{fontSize: 25}}> Contador de Pessoas </Text>
        <Text style={{fontSize: 75, color: 'red', textAlign: 'center'}}> {num} </Text>
        
        <Button title="+" onPress={add}/>
        <Button color="#ff0000" title="-" onPress={exc}/>

      </View>
    )
}