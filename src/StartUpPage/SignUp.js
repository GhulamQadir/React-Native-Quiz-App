import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput } from'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useState, useEffect } from 'react';
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { color } from 'react-native-reanimated';
import { login, signUp } from '../controller/LoginController'

function SignUp({ navigation }){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    login(email, password, loginComplete)
    if(password.length< 6){
      alert("Enter atleast six characters")
    }
    }

  const loginComplete = () => {
  navigation.navigate("Home")
  }

  const signUpUser = () => {
    signUp(email, password, signUpComplete)
  }

  const signUpComplete = () => {
    navigation.navigate("Home")
  }


  // const facebook_login = () => {
  //   LoginManager.logInWithPermissions(["public_profile"]).then(
  //     function(result) {
  //       if (result.isCancelled) {
  //         console.log("Login cancelled");
  //       } else {
  //       AccessToken.getCurrentAccessToken()
  //       .then((data) => {
  //         console.log("data==>>>>", data)
  //       })
  //          console.log(
  //           "Login success with permissions: " +
  //             result.grantedPermissions.toString()
  //         );
  //       }
  //     },
  //     function(error) {
  //       console.log("Login fail with error: " + error);
  //     }
  //   );
  //   }  
  return(
        <View style={styles.container}>
          {/* <FontAwesome5 name={'comments'} /> */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text}>Home Screen</Text>
             
             <View style={{marginTop: 50}}>
            <TextInput style={styles.textInput} placeholder="Enter your email"
            value={email} onChangeText={(text) => setEmail((text))}  />
            <TextInput style={styles.textInput} placeholder="Enter your password" secureTextEntry={true}
            value={password} onChangeText={(text) => setPassword((text))} />
            </View>
             
             <View style={{marginTop: 50}}>
             <TouchableOpacity style={styles.buttons}
             onPress={loginUser}>
               <Text style={{color: 'white'}}>Login</Text>
             </TouchableOpacity>

             <Text style={{color: 'black'}}>or</Text>

             <TouchableOpacity style={styles.buttons}
             onPress={signUpUser}>
               <Text style={{color: 'white'}}>SignUp</Text>
             </TouchableOpacity>
            </View>
            </View>
            {/* <Button
        onPress={() => navigation.openDrawer('Drawer')}
        title="Go to Drawerscreen"
      /> */}
        </View>
    )
}

 
const styles = StyleSheet.create({
    container: {
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    text: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 25,
    },
    textInput: {
      borderColor: "blue",
      borderWidth: 2,
      height: 40,
      marginTop: 20,
      width: 150,
    },
    buttons: {
      backgroundColor: 'blue',
      height: 35,
      width: 80,
      justifyContent: 'center',
      alignItems: "center",
      borderRadius: 2 

    }
})
export default SignUp;