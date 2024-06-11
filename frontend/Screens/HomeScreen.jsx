import { React, useState } from 'react';
import { View, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Pressable } from 'react-native';
import { StatusBar } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);


  return (
    <ScrollView style={styles.tudo}>

      <View style={styles.cabecalho}>
        <Text style={styles.texto}>Onde está o professor?</Text>
      </View>

      <View style={styles.fundo}>
        <Pressable
          onPressIn={() => navigation.navigate('Professor')}>
          <ImageBackground
            source={require("../assets/professores.png")}
            style={styles.imagem}
          >
            <Text style={styles.texto2}>Consulta de professores</Text>
          </ImageBackground>

        </Pressable>
      </View>

      <Pressable
          onPressIn={() => navigation.navigate('Professor')}>
          <ImageBackground
            source={require("../assets/professores.png")}
            style={styles.imagem}
          >
            <Text style={styles.texto2}>Consulta de professores</Text>
          </ImageBackground>

        </Pressable>


      <Image
        source={require("../assets/salas.png")}
        style={styles.imagem}
      />
      <Button title="Consulta de salas" onPress={() => navigation.navigate('Sala')} />
      <View style={styles.fundo2}>
        <Image
          source={require("../assets/alocacoes.png")}
          style={styles.imagem}
        />
        <Button title="Consulta de Alocações" onPress={() => navigation.navigate('Alocacao')} />
        <Image
          source={require("../assets/interrogacao.png")}
          style={styles.imagem}
        />
        <Button title="Consulta de visão de alocações" onPress={() => navigation.navigate('Visao')} />
      </View>








      <StatusBar style="auto" />
    </ScrollView>


  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

  texto2: {
    color: "black",
    fontFamily: 'georgia',
    width: "100%",
    backgroundColor: "white",
    height: 30,
  },
  tudo: {
    backgroundColor: '#a0aecd'
  },

  imagem: {
    width: 150,
    height: 150,
    justifyContent: 'flex-end',

  },

  fundo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    color: "black",
  },

  fundo2: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 100
  }


});
