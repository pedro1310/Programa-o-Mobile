import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#8c8c8c',
  },
  box:{
    height: 550,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 30
  },
  input:{
    height: 45,
    width: 250,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
    alignSelf: 'center'
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20
  },
  titulo:{
    fontSize: 26,
    marginTop: 20,
    alignSelf: 'center'
  },
  img:{
    width: 250, 
    height: 250,
    alignSelf: 'center'
  }
});

export {styles};