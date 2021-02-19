import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput } from'react-native';
// import { Container, Header, Content, ListItem, Radio, Right, Left } from 'native-base';
// import {questions} from '../Questions/questions';

function QuizPage(){ 
    // const [questions, setQuestions] = useState([
    //     ["Who invented the computer?", "Charles Dickens", "Elon Musk", "Charles Babbage", "Bill Gates"]
    //     ["Which tag is used for starting the body of HTML?"," <'body> "," <'b> "," <'bold> "," <'br> ","A"],
    //     ["Choose the correct HTML element for largest heading"," <'heading> "," <'h4> "," <'head> "," <'h1> ","D"],
    //     ["Choose the correct HTML element for starting the paragraph"," <'para> "," <'paragraph> "," <'p> "," <'pg> ","C"],
    //     ["Choose the correct HTML element for bold the text"," <'b> "," <'bold> "," <'bd> "," <'BOLD> ","A"],    
    // ])
    return(
        <View styles={styles.container}>
            <Text style={styles.text}>Quiz About Computer</Text>
            <Text style={styles.questions}>Q:1 Who is the Prime Minister of Pakistan?</Text>
    
            {/* <Container>
        <Header />
        <Content>
          <ListItem selected={false} >
            <Left>
              <Text>Lunch Break</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={true}
              />
            </Right>
          </ListItem>
        </Content>
      </Container> */}

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

