import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121212'
  },
  box:{
    backgroundColor: '#404040',
      height: 700,
      borderRadius: 10,
      margin :15,
      padding: 15
  },
  input:{
    height: 45,
    width: 250,
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    fontSize: 20,
    padding: 10,
    alignSelf: 'center',
    color: 'white'
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    marginTop: 35
  },
  titulo:{
    fontSize: 26,
    margin: 22,
    alignSelf: 'center',
    color: 'white'
  },
  img:{
    width: 250, 
    height: 250,
    alignSelf: 'center',
    margin: 20
  },
  btn:{
    backgroundColor:'white',
    height: 60,
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: 10
  },
  btnt:{
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
  }
});

export {styles};