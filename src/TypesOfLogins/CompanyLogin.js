import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from'react-native';
import React, { useState, useEffect } from 'react';
import { login } from '../controller/LoginController'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


function CompanyLogin({ navigation }) {
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
  
    // const signUpUser = () => {
    //   signUp(email, password, signUpComplete)
    // }
  
    // const signUpComplete = () => {
    //   navigation.navigate("CompanyRegis")
    // }
    return(
        <ScrollView style={styles.container}>
        <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome5 name={'arrow-left'} style={styles.backIcon} />
        </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>             
             <View style={{marginTop: 50}}>
               <Text style={styles.registration}>Company Registration</Text>
            </View>

            {/* <TextInput style={styles.textInput} placeholder="Company name"
            underlineColorAndroid={'transparent'}  />

            <TextInput style={styles.textInput} placeholder="Number" keyboardType={'number-pad'}
            underlineColorAndroid={'transparent'}  />
            
            <TextInput style={styles.textInput} placeholder="Location"
            underlineColorAndroid={'transparent'}  />
             */}
            <TextInput style={styles.textInput} placeholder="Email" keyboardType={'email-address'}
            value={email} onChangeText={(text) => setEmail((text))}
            placeholderTextColor={'#fff'} />
            
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} 
            value={password} onChangeText={(text) => setPassword((text))} 
            placeholderTextColor={'#fff'} />
            </View>

            <View style={styles.buttons}>
            <TouchableOpacity style={styles.btn}
            onPress={loginUser}>
            <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}
            onPress={() => navigation.navigate("CompanyRegis")}>
              <Text style={styles.btnText}>Register New</Text>
            </TouchableOpacity>
            </View>
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
      fontSize: 13,
      color: '#fff',
      fontWeight: '700'
    },
    buttons: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30
    },
    backIcon: {
      marginTop: 6,
      fontSize: 18,
      width: 80,
      color: '#fff'
  }
})

export default CompanyLogin;