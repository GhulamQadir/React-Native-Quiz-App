import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  

function  MainScreen({navigation}) {
    return(
        <View style={styles.container}>
          <View style={styles.header}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.openDrawer()}>
          <FontAwesome5 style={styles.navbar} name={'bars'} />
          </TouchableOpacity>
          </View>
          </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
        flex: 1,
        // backgroundColor: 
      }, 
      btn: {
          backgroundColor: '#0b03fc'
      },
    navbar: {
      fontSize: 30,
      marginLeft: 5,
      color: 'black'
    },

})
export default MainScreen;