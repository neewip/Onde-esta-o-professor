import { useState, useEffect } from 'react';
import { View, Button, Text, FlatList, StyleSheet, StatusBar } from "react-native";

const API_URL = "http://10.136.42.52:3000";

export default function ConsultarProfessor() {
  const [professores, setProfessores] = useState([]); // Initialize professores as an empty array
  const [error, setError] = useState(null);

  const fetchProf = async () => {
    try {
      const response = await fetch(`${API_URL}/sala/`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar o(a) Alocação(a): ${response.status}`);
      }
      const data = await response.json();
      setProfessores(data);
      setError(null);
    } catch (error) {
      console.error("Erro ao buscar o(a) sala:", error);
      setError("Não foi possível buscar o(a) sala desejado.");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F18F01' />

      <View style={styles.cabecalho}>
        <Text style={styles.texto}> Onde está o professor? </Text>
        </View>

        <Text style={styles.prof}> Salas </Text>

        <Button title="Consultar salas" onPress={fetchProf} color='black'/>

        <FlatList
          data={professores} // Use the professores state variable
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.prof}>
              <Text>ID: {item.id}</Text>
              <Text>Nome da sala: {item.nomesala}</Text>
              <Text>Bloco: {item.bloco}</Text>

            </View>
          )}
        />

        <StatusBar style="auto" />

        <View style={styles.rodape}></View>

      {error && <Text style={styles.error}>{error}</Text>}
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
    width: "100%",
    height: 150,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: "white",
    fontFamily: 'georgia',
    fontSize: 30,
  },
  prof: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'georgia',
    textAlign: 'center',
    marginTop: 15
  },
  botao: {
    backgroundColor: '#a0aecd',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 290,
    color: 'pink'
  },
  rodape: {
    backgroundColor: 'black',
    width: "100%",
    height: 45,
    alignItems: 'center',
    fontSize: 30,
    justifyContent: 'center',
    marginTop: 30

  }
});