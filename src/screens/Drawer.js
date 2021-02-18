import React from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity } from'react-native';


function DrawerScreen({ navigation }){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAS1BMVEX///8AAAAXFxcSEhIJCQlPT08pKSnm5uakpKRpaWmIiIhRUVF2dnYgICDY2NioqKg7Ozvt7e1AQEDf399bW1uDg4ONjY1hYWGurq7+TyjUAAABtklEQVR4nO3cW3KCQBBA0SEqEZUgPqL7X2kYNajJAvqjz1lBV1eNylDeUh7G6+7Qf2TRH3bXsbw7npp8TsfXFWyixwmyea5gGz1LmNXvClbRkwR6LOEcPUeoc13BV/QUwb6Sn4RqOg2f0TOE+yzr6BHCrUsXPUK4rrTRI4RryzJ6hHBLO5h24Cy0PhOnz0TfjWu/kabfSOl/K289M92emdJeIt1tsl8j3U9C8iXMKyjlO3qWIC93qqUcL9HjBLi83a3XdyxDt+8XWfT7bvj7jgUAAAAAAAAAAAAAAAAAAGKMQ9cullks2m79r6ea8T/f7z3VrP/9/36uIG8WRk+1mZegCaMNlPwkVHqqjZ5qpaeqp1rpqeqpVnqqeqqVnqqeaqWnqqfa6Kk2c0Yy82lwkfRcgTtVd+vesQAAAAAAAAAAAAAAAAAAQLBx6Pb9Iot+3w16qpOLnmozRzCqbfQsYbZWMC9BE0YbqGQOwtzpqTZ6qpWeqp5qpaeqp1rpqeqpVnqqeqqVnuotoeiZaXKOniLU2R3KykXSfJeW9yrp5U61lOMpepwA/3uq192h/8iiP+yu8zuWH9kWYUt3vg3gAAAAAElFTkSuQmCC'}} style={{height: 25, width: 27}} />
          </TouchableOpacity>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 25}}>Drawer Screen</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    //   justifyContent: 'center',
    //   alignItems: 'center',
    }
})
export default DrawerScreen;