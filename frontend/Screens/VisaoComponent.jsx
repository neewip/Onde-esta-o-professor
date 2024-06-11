import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput, ScrollView } from 'react-native';

const Visao = () => {
  const [CampoNome, setCampoNome] = useState("");

  return (
    <ScrollView>
    <View style={styles.container}>

      <View style={styles.cabecalho}> Onde está o professor? </View>

      <View style={styles.visao1}> Consulta Visão </View>


      <TextInput
        style={styles.input} // Aplica o estilo definido para input
        placeholder="Digite seu nome" // Define um texto de placeholder
        placeholderTextColor="#999" // Define a cor do texto do placeholder
        value={CampoNome} // Define o valor atual do campo de entrada de texto como campoNome
        onChangeText={(texto) => setCampoNome(texto)} // Atualiza o estado campoNome quando o texto do campo de entrada muda
      />

      <View style={styles.botao1}>
        <Button color="black" title="Pesquisar Alocações" onPress={() => Alert.alert('Disney amores!')} />
      </View>

      <View style={styles.botao}>
        <Button color="black" title="Voltar" onPress={() => Alert.alert('Disney amores!')} />
      </View>

      <View style={styles.rodape}></View>

      <View style={styles.container}>
        <StatusBar style="auto" />

      </View>

    </View>
    </ScrollView>
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
    justifyContent: 'center',
    fontFamily: 'georgia'
  },
  visao1: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'georgia',
    alignItems: 'center',
    justifyContent: 'center',
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
    justifyContent: 'center',
    marginTop: 30
  },
  input: {
    backgroundColor: "#EEE", // Define a cor de fundo como um tom claro de cinza
    padding: 10, // Define um preenchimento interno de 10 unidades
    width: "90%", // Define a largura do campo de entrada como 100% do contêiner pai
    marginBottom: 20, // Define uma margem inferior de 20 unidades
    borderRadius: 5, // Define um raio de borda de 5 unidades para arredondar os cantos
    marginTop: 15
  },
});

export default Visao;