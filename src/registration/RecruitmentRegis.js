import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from'react-native';
import database from '@react-native-firebase/database';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


function RecruitmentRegistration({navigation}){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [college, setCollege] = useState("");
    const [degree, setDegree] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

    const save_data = () => {
        let students_Data = {
            firstName,
            lastName,
            age,
            college,
            degree,
            phoneNum,
        }
        database().ref('/').child('Students Data').push(students_Data)
        alert("Your response has been recorded")
       }
    
    return(
        <ScrollView>
            <View style={styles.container}>
                {/* <Text>Welcome to Recruitment!</Text> */}
                <View style={styles.header}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.openDrawer()}>
                <FontAwesome5 style={styles.navbar} name={'bars'} />
                </TouchableOpacity>
                </View>
                
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.heading}>Students Recruitment</Text>         
                <TextInput style={styles.textInput} value={firstName} 
                onChangeText={(e) => setFirstName(e)} placeholder="Student's First name" />
                
                <TextInput style={styles.textInput} value={lastName} 
                onChangeText={(e) => setLastName(e)} placeholder="Last name" />
                
                <TextInput style={styles.textInput} value={age} 
                onChangeText={(e) => setAge(e)} placeholder="Age" />
                
                <TextInput style={styles.textInput} value={college} 
                onChangeText={(e) => setCollege(e)} placeholder="College" />
                
                <TextInput style={styles.textInput} value={degree} 
                onChangeText={(e) => setDegree(e)} placeholder="Degree No." />
                
                <TextInput style={styles.textInput} value={phoneNum}
                onChangeText={(e) => setPhoneNum(e)} placeholder="Phone No." />
                
                <TouchableOpacity style={styles.submitBtn}
                onPress={save_data} activeOpacity={0.7}>
                <Text style={{color: 'white'}}>Submit</Text>
                </TouchableOpacity>
                </View>
                </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#4287f5'
        marginBottom: 25,
    },
    textInput: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 20,
        width: 200,
        color: '#4287f5',
        borderBottomColor: '#4287f5',
        borderBottomWidth: 3,
        marginBottom: 30,
      },
      submitBtn: {
          height: 30,
          width: 100,
          borderRadius: 3,
          backgroundColor: '#4287f5',
          justifyContent: 'center',
          alignItems: 'center',
      },
      header: {
        flex: 1,
        // backgroundColor: 
      }, 
      btn: {
        //   backgroundColor: '#0b03fc',
        // padding: 10
      },
    navbar: {
      fontSize: 30,
      padding: 5,
      color: '#fff',
      backgroundColor: '#4287f5'
    },
    heading: {
        color: '#4287f5',
        fontSize: 25,
        marginTop: 30,
        textAlign: 'center',
        fontWeight: '700'
    }

})
export default RecruitmentRegistration;
