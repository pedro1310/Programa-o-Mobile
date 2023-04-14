import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      textAlign: 'center',
      backgroundColor: '#2e2e2e',
      alignItems: 'center',
    },
    main:{
      fontSize: 25,
      fontWeight: 'bold',
      margin: 10,
      color: 'white'
    },
    title:{
      fontSize: 20,
      fontWeight: 'bold',
      margin: 5,
      color: 'white'
    },
    img:{
      width: 250,
      height: 250,
      margin: 5,
      borderRadius: 400 / 2,
      borderWidth: 4,
      borderColor: "white"
    },
    dados:{
      fontSize: 15,
      color: 'white'
    },
    box:{
      backgroundColor: '#404040',
      height: 630,
      borderRadius: 10,
      margin :7,
      padding: 15,
      alignItems: 'center'
    }

  });

  export {styles};