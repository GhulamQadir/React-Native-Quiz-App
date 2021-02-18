import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput } from'react-native';


function QuizPage(){ 
    const [questions, setQuestions] = useState([])
    return(
        <View styles={styles.container}>
            <Text style={styles.text}>Quiz About Computer</Text>
            <Text style={styles.questions}>Q:1 Who is the Prime Minister of Pakistan?</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        backgroundColor: 'red'
    },
    text: {
        color: '#4c34eb',
        marginTop: 30,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    questions: {
        fontSize: 16,
        marginTop: 30
    }

})
export default QuizPage;

