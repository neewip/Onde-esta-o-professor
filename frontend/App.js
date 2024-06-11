<<<<<<< HEAD
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Professor from './Screens/ProfessorComponent';
import Sala from './Screens/SalaComponent';
import Alocacao from './Screens/AlocacaoComponent';
import Visao from './Screens/VisaoComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Professor" component={Professor} />
        <Stack.Screen name="Sala" component={Sala} />
        <Stack.Screen name="Alocacao" component={Alocacao} />
        <Stack.Screen name="Visao" component={Visao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

=======
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { Button, Image, StyleSheet, Text, View} from 'react-native';
=======
import { StyleSheet, Text, View, Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
>>>>>>> 86a44743f39cde451daa51092048856569f8ecab

export default function App() {
  return (
    <View style={styles.tudo}>
     <View style={styles.cabecalho}> Onde está o professor? </View>
<<<<<<< HEAD
     
     <View style={styles.fundo}>
     <Image
    source={require("./assets/professor.png")}
style={styles.imagem}
=======

<View style={styles.fundo}>
     <Image
    source={require("./assets/professores.png")}
    style={styles.imagem}
>>>>>>> 86a44743f39cde451daa51092048856569f8ecab
    >
      </Image>

      <Image
    source={require("./assets/salas.png")}
<<<<<<< HEAD
style={styles.imagem}
    >
      </Image>

      <Button
        title="Pesquisar Produto"
        onPress={() => navigation.navigate('Search')}
      />

</View>

<Button style={styles.botoes}> teste</Button>

=======
    style={styles.imagem}
    >
      </Image>
</View>

>>>>>>> 86a44743f39cde451daa51092048856569f8ecab

<View style={styles.fundo2}>
     <Image
    source={require("./assets/alocacoes.png")}
<<<<<<< HEAD
style={styles.imagem}
=======
    style={styles.imagem}
>>>>>>> 86a44743f39cde451daa51092048856569f8ecab
    >
      </Image>

      <Image
<<<<<<< HEAD
    source={require("./assets/visoes.png")}
style={styles.imagem}
    >
      </Image>

</View>

=======
    source={require("./assets/interrogacao.png")}
    style={styles.imagem}
    >
      </Image>
</View>


>>>>>>> 86a44743f39cde451daa51092048856569f8ecab
      <StatusBar style="auto" />
       
     </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  tudo:{
<<<<<<< HEAD
    backgroundColor:'#a0aecd',
  },
  imagem:{
    width: 150,
    height: 150,
  },
  texto:{
  fontSize: 20,
  color: 'white',
  justifyContent:'flex-end',
  display: 'flex',
  },
=======
    backgroundColor:'#a0aecd'
  },

  imagem: {
   width:150,
  height:150,
  justifyContent: 'flex-end',

  },

>>>>>>> 86a44743f39cde451daa51092048856569f8ecab
  fundo:{
    display: 'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    marginLeft:25,
    marginRight: 25,
    marginTop:25
  },

  fundo2:{
    display: 'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    marginLeft:25,
    marginRight: 25,
    marginTop:100
<<<<<<< HEAD
  },
});
=======
  }


});
>>>>>>> 86a44743f39cde451daa51092048856569f8ecab
>>>>>>> 29817bbb664eaf7aa62f3827054ab52a93fa0c45
