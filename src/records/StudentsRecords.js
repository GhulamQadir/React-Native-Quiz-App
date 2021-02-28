import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import database from '@react-native-firebase/database';


function  StudentsRecords({navigation}) {
//    const[studData, setStudData] = useState("")
//    useEffect(() => {
//        let record = []
//     database().ref('/Students Data').on('value', querySnapShot => {
//         // console.log("snapshot==>>", querySnapShot.val())
//            let data = querySnapShot.val() ? querySnapShot.val() : {};
//         //    let record = data;
//         record.push(data)
//            console.log("record===>>",record)
           
//            // this.setState({
//            //   todos: todoItems,
//            // });
//          });
//          setStudData(record);
       
//      },[]); 
//      console.log("data-->", typeof studData, studData)
//    return(
        // <View style={styles.container}>
        //  <Text>StudentsRecords</Text>
        //  {studData && studData.map((data, index) => {
            //   return( 
                //   <View key={index}> 
                //   <Text>{data.firstName}</Text> 
                //   </View> 
            //  ) 
        //  })} 
        //  </View>
    // )
    return(
        <Text>Students Record</Text>
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
export default StudentsRecords;