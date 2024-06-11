import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

const Professor = () => {
  return (
    <View style={styles.container}>

    <View style={styles.cabecalho}> Onde está o professor? </View>

    <View style={styles.prof}> Professores </View>
    
    <Button title="Pesquisar professores" onPress={() => Alert.alert('Disney amores!')}/>
        <View style={styles.botao}>
    <Button title="Voltar" onPress={() => Alert.alert('Disney amores!')}/>
    </View>

     <View style={styles.container}>
      <StatusBar style="auto"/>
       
     </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0aecd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cabecalho: {
    backgroundColor: 'black',
    width: 400,
    height: 150,
    color: 'white',
    alignItems: 'center',
    fontSize: 30,
    justifyContent:'center',
    fontFamily: 'georgia'
  },
  prof:{
    color: 'white',
    fontSize: 25,
    fontFamily: 'georgia',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 15
  },
  botao: {
    backgroundColor: '#a0aecd',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
    color: 'pink'
  }
});

export default Professor;