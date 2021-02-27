import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import DrawerScreen from '../screens/Drawer';
import SignUp from '../StartUpPage/SignUp';
import QuizPage from '../screens/QuizPage';

const Drawer = createDrawerNavigator();


function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen name="Home" component={Home} />
        {/* <Drawer.Screen name="Drawer" component={DrawerScreen} /> */}
        <Drawer.Screen name="QuizPage" component={QuizPage} />
        {/* <Drawer.Screen name="CloseDrawer" component={CloseDrawer} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;   