import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  

function  MainScreen({navigation}) {
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
          <TouchableOpacity style={styles.navBtn} onPress={() => navigation.openDrawer()}>
          <FontAwesome5 style={styles.navbar} name={'bars'} />
          </TouchableOpacity>
          </View>
           
          <Text style={styles.text}>A college campus recruitment system that consists of a student login, company login and an admin login. The project is beneficial for college students, various companies visiting the campus for recruitment and even the college placement officer. The software system allows the students to create their profiles and upload all their details including their marks onto the system. The admin can check each student details and can remove faulty accounts. The system also consists of a company login where various companies visiting the college can view a list of students in that college and also their respective resumes. The software system allows students to view a list of companies who have posted for vacancy. The admin has overall rights over the system and can moderate and delete any details not pertaining to college placement rules. The system handles student as well as company data and efficiently displays all this data to respective sides.</Text>           
           
          <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("StudentsRecords")}>
            <Text style={styles.btnText}>View students record</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("CompaniesRecords")}>
            <Text style={styles.btnText}>View companies record</Text>
          </TouchableOpacity>
          
          </View>
          </ScrollView>
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
      navBtn: {
          backgroundColor: '#4287f5'
      },
    navbar: {
      fontSize: 30,
      marginLeft: 5,
      color: '#fff'
    },
    text: {
      marginTop: 30,
      marginBottom: 30,
      marginLeft: 5,
      marginRight: 5,
      color: '#4287f5',
      fontSize: 16
    },
    btn: {
      height: 50,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4287f5',
      margin: 10,
      borderRadius: 5
    },
    btnText: {

    }

})
export default MainScreen;