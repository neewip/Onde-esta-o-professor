
import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet,StatusBar } from 'react-native';

const API_URL = "http://10.136.37.30:3000"; 

export default function SearchScreen() {

  const [id, setId] = useState(''); 
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]); 
  const [error, setError] = useState(null); 

  const handleSearch = async () => {
    try {
      const response = await fetch(`${API_URL}/view/${id}`); 
      if (!response.ok) {
        const errorResponse = await response.text(); 
        throw new Error(errorResponse); 
      }
      const data = await response.json(); 
      setProduct(data); 
      setError(null); 
    } catch (error) {
      console.error("Erro ao buscar produto:", error); 
      setError("Produto não encontrado");
      setProduct(null); 
    }
  };




  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F18F01' />

      <View style={styles.cabecalho}><Text style={styles.texto}>Onde está o professor?</Text></View>

      <Text style={styles.prof}>Consulta de Visão</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o ID da visão"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
      <Button title="Pesquisar" onPress={handleSearch} color='black' />
      {product && (
        <View style={styles.product}>
          <Text>ID: {product.id}</Text>
          <Text>Nome: {product.nome}</Text>
          <Text>Quantidade: {product.nomesala}</Text>
          <Text>Marca: {product.bloco}</Text>
          <Text>Marca: {product.dia_semana}</Text>
          <Text>Marca: {product.periodo}</Text>


        </View>
      )}
      <View style={styles.rodape}><Text></Text></View>

      {error && <Text style={styles.error}>{error}</Text>}

    </View>

  );
}

const styles = StyleSheet.create({

  product: {
    padding: 10, 
    marginTop: 20, 
    borderBottomColor: "#ccc", 
    borderBottomWidth: 1, 
  },
  container: {
    flex: 1,
    backgroundColor: '#a0aecd',
    alignItems: 'center',
    justifyContent: 'space-between',
    
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

  },
  input: {
    backgroundColor: "#EEE", 
    padding: 10, 
    width: "90%", 
    marginBottom: 20, 
    borderRadius: 5, 
    marginTop: 15
  },
  error: {
    color: 'red',
    marginTop: 20, 
  },
});