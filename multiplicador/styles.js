import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000214'
  },
  box:{
    backgroundColor: '#000529',
    margin: 15,
    borderWidth: 3,
    borderColor: 'white'
  },
  input:{
    height: 45,
    width: 225,
    borderWidth: 2,
    borderColor: 'white',
    margin: 10,
    fontSize: 15,
    padding: 10,
    color: 'white',
    alignSelf: 'center',
  },
  texto:{
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
    marginTop: 10
  },
  titulo:{
    fontSize: 22,
    margin: 20,
    color: 'white',
    alignSelf: 'center'
  }
});

export {styles};