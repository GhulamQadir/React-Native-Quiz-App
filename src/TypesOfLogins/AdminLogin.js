import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from'react-native';
import { login, signUp } from '../controller/LoginController'


function AdminLogin({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const loginUser = () => {
      login(email, password, loginComplete)
      if(password.length< 6){
        alert("Enter atleast six characters")
      }
      }
  
    const loginComplete = () => {
    navigation.navigate("MainScreen")
    }
  
    const signUpUser = () => {
      signUp(email, password, signUpComplete)
    }
  
    const signUpComplete = () => {
      navigation.navigate("MainScreen")
    }
    return(
        <ScrollView style={styles.container}>
         <View style={{justifyContent: 'center', alignItems: 'center'}}>             
             <View style={{marginTop: 50}}>
               <Text style={styles.registration}>Admin Registration</Text>
            <TextInput style={styles.textInput} placeholder="Your name"
            placeholderTextColor={'#fff'} />
            </View>

            <TextInput style={styles.textInput} placeholder="Your email" keyboardType={'email-address'}
            value={email} onChangeText={(text) => setEmail((text))}
            placeholderTextColor={'#fff'}  />
            
            <TextInput style={styles.textInput} placeholder="Your password" secureTextEntry={true}
            value={password} onChangeText={(text) => setPassword((text))}
            placeholderTextColor={'#fff'} />
            </View>

            <View style={styles.buttons}>
            <TouchableOpacity style={styles.btn}
            onPress={loginUser}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}
            onPress={signUpUser}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#3277a8',
      flex: 1,
      height: 'auto',
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
    input: {
        color: 'black',
        height: 40,
        width: 180,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    },
    inputHeadings: {
      fontSize: 19,
      fontWeight: '500',
      color: 'red'
    },
    btn: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginTop: 30,
      backgroundColor: '#03a9fc',
      height: 35,
      width: 120,
      textAlign: 'center',
      borderRadius: 5,
    },
    btnText: {
      fontSize: 20,
      color: '#fff'
    },
    buttons: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30
    }
})
export default AdminLogin;
