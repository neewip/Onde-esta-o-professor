import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <View style={styles.tudo}>
     <View style={styles.cabecalho}> Onde está o professor? </View>

<View style={styles.fundo}>
     <Image
    source={require("./assets/professores.png")}
    style={styles.imagem}
    >
      </Image>

      <Image
    source={require("./assets/salas.png")}
    style={styles.imagem}
    >
      </Image>
</View>


<View style={styles.fundo2}>
     <Image
    source={require("./assets/alocacoes.png")}
    style={styles.imagem}
    >
      </Image>

      <Image
    source={require("./assets/interrogacao.png")}
    style={styles.imagem}
    >
      </Image>
</View>


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
    backgroundColor:'#a0aecd'
  },

  imagem: {
   width:150,
  height:150,
  justifyContent: 'flex-end',

  },

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
  }


});