import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#2e2e2e'
    },
    box:{
      backgroundColor: '#404040',
      margin: 15,
      padding: 15,
      borderRadius: 15
    },
    input:{
      height: 35,
      width: 250,
      borderWidth: 1,
      borderColor: 'white',
      marginLeft: 15,
      marginRight: 15,
      marginTop: 10,
      fontSize: 14,
      padding: 10,
      color: 'white',
      borderRadius: 7
    },
    picker:{
      height: 35,
      width: 250,
      marginLeft: 15,
      marginTop: 5,
      borderRadius: 7
    },
    texto:{
      textAlign: 'center',
      fontSize: 25,
      padding: 10,
      marginTop: 5,
      color: 'white'
    },
    titulo:{
      fontSize: 25,
      alignSelf: 'center',
      margin: 15,
      color: 'white'
    },
    imagem:{
      width: 200,
      height: 100,
      alignSelf: 'center',
      marginTop: 10
    },
    label:{
      marginTop: 15,
      fontSize: 15,
      marginLeft: 15,
      color: 'white'
    },
    slider:{
      width: 250,
      alignSelf: 'center'
    },
    limite:{
      margin: 5,
      fontSize: 20,
      marginLeft: 15,
      alignSelf: 'center',
      color: 'white',
    },
    sw:{
      marginLeft: 15,
      marginTop: 2,
      height: 20
    },
    btn:{
      alignSelf: 'center',
      width: 150,
      height: 35,
      backgroundColor: 'white',
      borderRadius: 15,
      marginTop: 30
    },
    btnt:{
      alignSelf: 'center',
      fontSize: 22
    },
    res:{
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
      marginTop: 15
    }
  });


  export {styles};