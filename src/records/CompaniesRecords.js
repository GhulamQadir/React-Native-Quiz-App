import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  

function  CompaniesRecords({navigation}) {
    return(
        <View style={styles.container}>
          <Text>CompanyRecords</Text>
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
export default CompaniesRecords;