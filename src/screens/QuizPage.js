import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity, TextInput, Field, ToastAndroid } from'react-native';
import { Radio } from 'native-base';
import {question} from '../Questions/questions';
import { set } from 'react-native-reanimated';
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


function QuizPage(){ 
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0);
    const [value, selectedValue] = useState("")
    const [answer, setAnswer] = useState("")
 
    const onHandleChange = (val, ans) => {
      // alert(val)
      // alert(ans)
      selectedValue(val);
      setAnswer(ans);

    }
    const save = () => {
      if(value === answer){
       let totalValue = total + 5;
        setTotal(totalValue)
      }
     let countValue = count + 1;
      setCount(countValue);
      selectedValue("");
      setAnswer("");

    }
    const reset = () => {
      setCount(0);
      setTotal(0);
    }
    return(
        <View styles={styles.container}>
            {/* <Text style={styles.text}>Quiz About Computer</Text>
            <Text style={styles.questions}>Q:1 Who is the Prime Minister of Pakistan?</Text> */}
       {question.map((data, index)=>{
         return (
           <View key={index}>
             {index=== count? <View>
             <Text style={{fontSize: 20}}>{data.questions}</Text>
             {data.answers.map((val,i)=> {
               return (
                 <View key={i}>
                   <Radio onPress={() => onHandleChange(val, data.correctAns)}
              selected={value == val}
            />    
                   <Text>{val}</Text>
                 </View>
               )
             })}
             <Button disabled={value==="" ? true: false} title="Next" onPress={save} />
 </View>: null}
           </View>
         )
       })}
     {count == 4 ? <Text>{total}</Text>: null }
            <Button onPress={reset} title="play again" />
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
    },
    nxtBtn: {
      marginTop: "40",
      height: 30,
      width: 30
    }

})
export default QuizPage;

