import React, { useState } from 'react';
import { Modal, Text, Button, View, StyleSheet, Image, ScrollView } from 'react-native';

const Sobre = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
<ScrollView style={styles.container}>
<View style={styles.cabecalho}><Text style={styles.texto}>Integrantes do Grupo</Text></View>
<View style={styles.fundo}>
<View>
      <Modal style={styles.fundo}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >

        <View style={styles.modalView}>
          <Text>v</Text>
          <Button
            title="Fechar"
            onPress={() => setModalVisible(false)}
            color="black"
          />
        </View>
      </Modal>
</View>
      <Image
    source={require("../assets/Vitoria.jpeg")}
style={styles.imagemVit} 
></Image>
      <Button 
        title="Vitória"
        onPress={() => setModalVisible(true)}
        color="black" 
      />
    </View>

<Modal style={styles.fundo}
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>

  <View style={styles.modalView}>
    <Text>i</Text>
    <Button
      title="Fechar"
      onPress={() => setModalVisible(false)}
      color="black" 
    />
  </View>
</Modal>

<Image
source={require("../assets/Isabela.jpeg")}
style={styles.imagemIsa} 
></Image>
<Button 
  title="Isabela Mariano"
  onPress={() => setModalVisible(true)}
  color="black" 
/>


<Modal style={styles.fundo}
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>

  <View style={styles.modalView}>
    <Text>l</Text>
    <Button
      title="Fechar"
      onPress={() => setModalVisible(false)}
      color="black"
    />
  </View>
</Modal>

<Image
source={require("../assets/Luis.jpeg")}
style={styles.imagemLu} 
></Image>
<Button 
  title="Luis"
  onPress={() => setModalVisible(true)}
  color="black" 
/>


  
<Modal style={styles.fundo}
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>

  <View style={styles.modalView}>
    <Text>Â</Text>
    <Button
      title="Fechar"
      onPress={() => setModalVisible(false)}
      color="black"
    />
  </View>
</Modal>

<Image
source={require("../assets/angelo.jpeg")}
style={styles.imagemAn} 
></Image>
<Button 
  title="Ângelo"
  onPress={() => setModalVisible(true)}
  color="black" 
/>


<Modal style={styles.fundo}
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>

  <View style={styles.modalView}>
    <Text>n</Text>
    <Button
      title="Fechar"
      onPress={() => setModalVisible(false)}
      color="black"
    />
  </View>
</Modal>

<Image
source={require("../assets/Natalia.jpeg")}
style={styles.imagemNat} 
></Image>
<Button 
  title="Nathalia"
  onPress={() => setModalVisible(true)}
  color="black" 
/>


<Modal style={styles.fundo}
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>

  <View style={styles.modalView}>
    <Text>Obrigado por entrar em nosso site!</Text>
    <Button
      title="Fechar"
      onPress={() => setModalVisible(false)}
      color="black" 
    />
  </View>
</Modal>
<View>
<Image
source={require("../assets/Sophia.jpeg")}
style={styles.imagemSop} 
></Image>
<Button style={styles.tamanho}
  title="Sophia"
  onPress={() => setModalVisible(true)}
  color="black" 
/>
</View>
</ScrollView>
  )}



const styles = StyleSheet.create({
 tamanho:{
padding: 12
 },
 
    meio:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 },
 
 fundo:{
    backgroundColor:'#a0aecd',
    marginTop: 20
 },
 
    modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor:'#a0aecd',
   
  },

  tudo:{
    backgroundColor:'#a0aecd',
  },
  imagemVit:{
    width: 180,
    height: 180,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column',
    margin: 'auto',
    marginTop:25
  },

  imagemIsa:{
    width: 180,
    height: 180,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column',
    margin: 'auto',
    marginTop:25
  },

  imagemLu:{
    width: 180,
    height: 180,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column',
    margin: 'auto',
    marginTop:25
  },

  imagemAn:{
    width: 180,
    height: 180,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column',
    margin: 'auto',
    marginTop:25
  },

  imagemNat:{
    width: 180,
    height: 180,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column',
    margin: 'auto',
    marginTop:25
  },


  imagemSop:{
    width: 180,
    height: 180,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column',
    margin: 'auto',
    marginTop:25
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
  
});

export default Sobre;