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
