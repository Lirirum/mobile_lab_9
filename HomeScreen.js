import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {

  const styles = StyleSheet.create({
    container: {

      flex: 1,
    
    },
    buttonText:{
      color:"white",
    },
    headerContainer:{

      flexDirection:"row",
      alignItems:"center",
      gap:20,     
      height:60,   
      padding:20,
      backgroundColor:"black"
    }
    

  });


  return (
    <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.buttonText}  onPress={() => navigation.navigate('Home')} >Головна</Text>
      <Text  style={styles.buttonText} onPress={() => navigation.navigate('Contacts')} >Контакти</Text>
      <Text   style={styles.buttonText} onPress={() => navigation.navigate('Gallery')} >Галерея</Text>
     
    </View>
    </View>
  );
}

export default HomeScreen;