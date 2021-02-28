import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


function CompanyRegis({ navigation }) {
    return(
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome5 name={'arrow-left'} style={styles.backIcon} />
            </TouchableOpacity>
   
            <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 25}}>             
            <Text style={styles.registration}>New Company Registration</Text>
            
            <TextInput style={styles.textInput} placeholder="Company Name"
            placeholderTextColor={'#fff'} />
            
            <TextInput style={styles.textInput} placeholder="Country"
            placeholderTextColor={'#fff'} />

            <TextInput style={styles.textInput} placeholder="Area"
            placeholderTextColor={'#fff'} />

            <TextInput style={styles.textInput} placeholder="PTCL/ Phone No"
            placeholderTextColor={'#fff'} />

            <TextInput style={styles.textInput} placeholder="Email"
            placeholderTextColor={'#fff'} />

            <TextInput style={styles.textInput} placeholder="Confirm Email"
            placeholderTextColor={'#fff'} />

            <TouchableOpacity style={styles.registerBtn}>
                <Text style={styles.btnText}>Register Now</Text>
            </TouchableOpacity>
            </View>

            </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#3277a8',
      flex: 1,
    //   marginBottom: 5
    },
    text: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 25,
    },
    textInput: {
      height: 40,
      marginTop: 20,
      width: 200,
      color: '#fff',
      borderBottomColor: '#f8f8f8',
      borderBottomWidth: 2,
      marginBottom: 30,
    },

    registration: {
      color: 'white',
      fontWeight: '600',
      fontSize: 24,
      borderBottomWidth: 1,
      borderBottomColor: 'white', 
      paddingEnd: 10,
      marginBottom: 20,
      marginTop: 100
    },
    registerBtn: {
        height: 30,
        width: 100,
        borderRadius: 3,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#4287f5',
        fontWeight: '700'
    },
    backIcon: {
        marginTop: 6,
        fontSize: 18,
        width: 80,
        color: '#fff'
    }

})
export default CompanyRegis;
