import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput } from'react-native';
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
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image  style={{height: 25, width: 27}} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAS1BMVEX///8AAAAXFxcSEhIJCQlPT08pKSnm5uakpKRpaWmIiIhRUVF2dnYgICDY2NioqKg7Ozvt7e1AQEDf399bW1uDg4ONjY1hYWGurq7+TyjUAAABtklEQVR4nO3cW3KCQBBA0SEqEZUgPqL7X2kYNajJAvqjz1lBV1eNylDeUh7G6+7Qf2TRH3bXsbw7npp8TsfXFWyixwmyea5gGz1LmNXvClbRkwR6LOEcPUeoc13BV/QUwb6Sn4RqOg2f0TOE+yzr6BHCrUsXPUK4rrTRI4RryzJ6hHBLO5h24Cy0PhOnz0TfjWu/kabfSOl/K289M92emdJeIt1tsl8j3U9C8iXMKyjlO3qWIC93qqUcL9HjBLi83a3XdyxDt+8XWfT7bvj7jgUAAAAAAAAAAAAAAAAAAGKMQ9cullks2m79r6ea8T/f7z3VrP/9/36uIG8WRk+1mZegCaMNlPwkVHqqjZ5qpaeqp1rpqeqpVnqqeqqVnqqeaqWnqqfa6Kk2c0Yy82lwkfRcgTtVd+vesQAAAAAAAAAAAAAAAAAAQLBx6Pb9Iot+3w16qpOLnmozRzCqbfQsYbZWMC9BE0YbqGQOwtzpqTZ6qpWeqp5qpaeqp1rpqeqpVnqqeqqVnuotoeiZaXKOniLU2R3KykXSfJeW9yrp5U61lOMpepwA/3uq192h/8iiP+yu8zuWH9kWYUt3vg3gAAAAAElFTkSuQmCC'}} />
          </TouchableOpacity>
          {/* <FontAwesome5 name={'comments'} /> */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text}>Home Screen</Text>
            <Button onPress={startQuiz}  style={styles.btn} title="Start Quiz" />
             
             {/* <View style={{marginTop: 50}}>
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
            </View> */}
            <Button onPress={startQuiz} title="Sign out" onPress={signedOut} />
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
    btn: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    }
})
export default Home;