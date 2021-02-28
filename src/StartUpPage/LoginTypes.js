import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



function LoginTypes({navigation}){
    return(
        <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome5 name={'arrow-left'} style={styles.backIcon} />
        </TouchableOpacity>
        
        <View style={styles.container}>
            <Text style={styles.heading}>Select Your Category</Text>
        <TouchableOpacity style={styles.btn} activeOpacity={0.6} 
        onPress={() => navigation.navigate("AdminLogin")}>
            <Image style={styles.img} source={{uri: 'https://lh3.googleusercontent.com/proxy/i-gT2SNjr-rCTcdqpmU0Pm5Drh6_2RNm__LCauk88iELf1mxV7fcCCgEgd2DcnGBSFGY7Rem2CdV'}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} activeOpacity={0.6}
        onPress={() => navigation.navigate("CompanyLogin")}>
            <Image style={styles.img} source={{uri: 'https://lh3.googleusercontent.com/proxy/S8mM9BEo2DF-S_bYbbFi_aStLuUrnT2UYs27QkPG7aVmJOJS7fl4Escs-EMztxiQVyabzC34SF57Hm0OGGyUov4G7dumyy1eEA'}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} activeOpacity={0.6} 
        onPress={() => navigation.navigate("StudentLogin")}>
            <Image style={styles.img} source={{uri: 'https://aceinstitutions.com/User/img/stdLogin.png'}} />
            {/* <Text style={styles.btnText}>Student Login</Text> */}
        </TouchableOpacity>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 60,
        marginBottom: 30
    },
    img: {
        height: 150,
        width: 200,
        resizeMode: 'contain'
    },
    btn: {
        // backgroundColor: '#4287f5',
        // height: 35,
        // width: 120,
        borderRadius: 30,
        marginTop: 25
      },
      btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 3
      },
      heading: {
          fontSize: 26,
          fontWeight: '700',
          color: '#4287f5'
      },
      backIcon: {
        marginTop: 6,
        fontSize: 18,
        width: 80,
        color: '#4287f5'
    }

})
export default LoginTypes;