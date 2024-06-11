import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

const Alocacao = () => {
  return (
    <View style={styles.container}>

    <View style={styles.cabecalho}> <Text> Onde está o professor? </Text></View>

    <View style={styles.lugar}> <Text> Alocação </Text> </View>

    <View style={styles.botao1}>
    <Button title="Pesquisar Alocações" onPress={() => Alert.alert('Disney amores!')}/>
    </View>

        <View style={styles.botao}>
    <Button title="Voltar" onPress={() => Alert.alert('Disney amores!')}/>
    </View>

    <View style={styles.rodape}></View>

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
  lugar:{
    color: 'white',
    fontSize: 25,
    fontFamily: 'georgia',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 25
  },
  botao: {
    backgroundColor: '#a0aecd',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 280
  },
  botao1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  rodape: {
    backgroundColor: 'black',
    width: 400,
    height: 70,
    alignItems: 'center',
    fontSize: 30,
    justifyContent:'center',
    marginTop: 30
    
  }
});

export default Alocacao;