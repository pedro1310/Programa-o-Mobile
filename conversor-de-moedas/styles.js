import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    textAlign: 'center',
    backgroundColor: '#2e2e2e'
  },
  box:{
    margin: 20,
    padding: 10,
    backgroundColor: '#404040',
    borderRadius: 15,
    alignSelf: 'center',
    height: 500
  },
  title:{
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    marginTop: 25
  },
  picker:{
    height: 45,
    width: 180,
    borderRadius: 10,
    fontSize: 17,
    textAlign: 'center',
    marginTop: 15,
    alignSelf: 'center'
  },
  text:{
    fontSize: 25,
    color: 'white',
    marginTop: 15
  },
  input:{
    height: 45,
    width: 230,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    color: 'white',
    fontSize: 21,
    padding: 10,
    alignSelf: 'center',
    marginTop: 20
  },
  btn:{
    width: 150,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    padding: 5,
    backgroundColor: 'white'
  },
  btnt:{
    fontSize: 20
  }
});


export {styles};