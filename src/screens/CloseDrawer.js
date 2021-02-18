import React from 'react';
import { Text, View, Button, StyleSheet } from'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';


function CloseDrawer({ props }){
    return(
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />  
        <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      </DrawerContentScrollView>

    )
}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    }
})
export default CloseDrawer;