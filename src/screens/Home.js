import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useState, useEffect } from 'react';
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { color } from 'react-native-reanimated';
import { signOut } from '../controller/LoginController'
// import { login, signUp } from '../controller/LoginController'

function Home({ navigation }){
  const signedOut = () => {
    navigation.navigate("SignUp")
  }


  const startQuiz = () => {
    navigation.navigate("QuizPage")
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
    <ScrollView>
        <View style={styles.container}>

          <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <FontAwesome5 style={styles.navbar} name={'bars'} />
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image  style={styles.img} source={{uri: 'https://www.pngkey.com/png/detail/232-2328477_quiz-project-logo-quiz-logo-png.png'}} />
          <Text style={{fontSize: 25, fontWeight: '700', color: '#4287f5', marginTop: 20}}>Welcome!</Text>          
          </View>
          </View>


          <View style={{justifyContent: 'center', alignItems: 'center'}}> 
          <TouchableOpacity style={styles.quizBtn} activeOpacity={0.8}
          onPress={() => navigation.navigate("QuizPage")}>
            <Text style={styles.btnText}>Get Started!</Text>
          </TouchableOpacity>
            {/* <Button title="Sign out" onPress={signedOut} /> */}
            </View>
            </View>
            </ScrollView>
    )
}

 
const styles = StyleSheet.create({
    container: {
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: '#34ebc6'
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
    header: {
      flex: 1
    },
    btn: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },
    navbar: {
      fontSize: 30,
      marginLeft: 5,
      color: 'black'
    },
    img: {
      height: 170,
      width: 280,
      resizeMode: 'contain',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    quizBtn: {
      backgroundColor: '#4287f5',
      height: 35,
      width: 120,
      borderRadius: 30,
      marginTop: 30
    },
    btnText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '700',
      textAlign: 'center',
      paddingTop: 3
    }
})
export default Home;