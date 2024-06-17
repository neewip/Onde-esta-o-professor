import { useState, useEffect } from 'react';
import { View, Button, Text, FlatList, StyleSheet, StatusBar } from "react-native";

const API_URL = "http://10.136.37.30:3000"; 

export default function ConsultarProfessor() {
  const [professores, setProfessores] = useState([]); 
  const [error, setError] = useState(null);

  const fetchProf = async () => {
    try {
      const response = await fetch(`${API_URL}/alocacao/`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar o(a) Alocação(a): ${response.status}`);
      }
      const data = await response.json();
      setProfessores(data);
      setError(null);
    } catch (error) {
      console.error("Erro ao buscar o(a) Alocação:", error);
      setError("Não foi possível buscar o(a) alocação desejado.");
    }
  };

  return (
    
    <View style={styles.container}>
      <StatusBar backgroundColor='#F18F01' />

      <View style={styles.cabecalho}><Text style={styles.prof}>Onde está o professor?</Text></View>

        <Text style={styles.prof}>Alocações</Text>

        <Button title="Consultar alocação" onPress={fetchProf} color='black'/>

        <FlatList
          data={professores} 
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.prof}>
              <Text>ID: {item.id}</Text>
              <Text>Nome do Professor: {item.nome}</Text>
              <Text>Nome da sala: {item.nomesala}</Text>
              <Text>Bloco: {item.bloco}</Text>
              <Text>Dia da semana: {item.dia_semana}</Text>
              <Text>Período: {item.periodo}</Text>

            </View>
          )}
        />

        <StatusBar style="auto" />

        <View style={styles.rodape}><Text></Text></View>

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
    fontFamily: 'serif',
    fontSize: 30,
  },
  prof: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'serif',
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