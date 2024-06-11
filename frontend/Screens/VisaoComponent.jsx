// screens/SearchScreen.jsx

// Importa bibliotecas necessárias do React e React Native
import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet,StatusBar } from 'react-native';

// Define a URL base da API, ajuste conforme necessário
const API_URL = "http://10.136.42.52:3000"; // Ajuste para o seu IP

// Componente principal da tela SearchScreen
export default function SearchScreen() {
  // Define os estados para os campos de entrada, produto individual, lista de produtos e erros
  const [id, setId] = useState(''); // Estado para o ID do produto
  const [product, setProduct] = useState(null); // Estado para o produto individual
  const [products, setProducts] = useState([]); // Estado para a lista de produtos
  const [error, setError] = useState(null); // Estado para erros

  // Função para buscar um produto específico na API
  const handleSearch = async () => {
    try {
      const response = await fetch(`${API_URL}/view/${id}`); // Faz a requisição GET para a API com o ID do produto
      if (!response.ok) {
        const errorResponse = await response.text(); // Lê a resposta de erro
        throw new Error(errorResponse); // Lança um erro com a resposta
      }
      const data = await response.json(); // Converte a resposta para JSON
      setProduct(data); // Atualiza o estado com o produto buscado
      setError(null); // Reseta o estado de erro
    } catch (error) {
      console.error("Erro ao buscar produto:", error); // Loga o erro no console
      setError("Produto não encontrado"); // Define a mensagem de erro
      setProduct(null); // Reseta o estado do produto
    }
  };

  // Função para buscar todos os produtos na API


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F18F01' />

      <View style={styles.cabecalho}>
        <Text style={styles.texto}> Onde está o professor? </Text>
      </View>

      <Text style={styles.prof}> Consulta de Visão </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o ID da visão"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />
      {/* Botão para buscar um produto específico */}
      <Button title="Pesquisar" onPress={handleSearch} color='black' />
      {/* Botão para buscar todos os produtos */}
      {/* Exibe o produto buscado, se existir */}
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
      {/* Exibe a lista de produtos, se existir */}
      <View style={styles.rodape}></View>

      {/* Exibe a mensagem de erro, se existir */}
      {error && <Text style={styles.error}>{error}</Text>}

    </View>

  );
}

// Estilos para os componentes da tela
const styles = StyleSheet.create({

  product: {
    padding: 10, // Espaçamento interno
    marginTop: 20, // Margem superior
    borderBottomColor: "#ccc", // Cor da borda inferior
    borderBottomWidth: 1, // Largura da borda inferior
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

  },
  input: {
    backgroundColor: "#EEE", // Define a cor de fundo como um tom claro de cinza
    padding: 10, // Define um preenchimento interno de 10 unidades
    width: "90%", // Define a largura do campo de entrada como 100% do contêiner pai
    marginBottom: 20, // Define uma margem inferior de 20 unidades
    borderRadius: 5, // Define um raio de borda de 5 unidades para arredondar os cantos
    marginTop: 15
  },
  error: {
    color: 'red', // Cor do texto do erro
    marginTop: 20, // Margem superior
  },
});