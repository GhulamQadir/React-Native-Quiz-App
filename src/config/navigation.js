import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import SignUp from '../StartUpPage/SignUp';
// import QuizPage from '../screens/QuizPage';
import LoginTypes from '../StartUpPage/LoginTypes';
import AdminLogin from '../TypesOfLogins/AdminLogin';
import Testing from '../TypesOfLogins/testing';
import CompanyLogin from '../TypesOfLogins/CompanyLogin'
import StudentLogin from '../TypesOfLogins/StudentLogin';
import MainScreen from '../screens/MainScreen';
import RecruitmentRegistration from '../registration/RecruitmentRegis';
import CompanyRegis from '../registration/CompanyRegis';
import StudentsRecords from '../records/StudentsRecords';
import CompaniesRecords from '../records/CompaniesRecords';
const Drawer = createDrawerNavigator();


function AppNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SignUp" component={SignUp} />
        {/* <Drawer.Screen name="QuizPage" component={QuizPage} /> */}
        <Drawer.Screen name="LoginTypes" component={LoginTypes} />
        <Drawer.Screen name="AdminLogin" component={AdminLogin} />
        <Drawer.Screen name="CompanyLogin" component={CompanyLogin} />
        <Drawer.Screen name="StudentLogin" component={StudentLogin} />
        <Drawer.Screen name="Testing" component={Testing} />
        <Drawer.Screen name="MainScreen" component={MainScreen} />
        <Drawer.Screen name="RecruitmentRegistration" component={RecruitmentRegistration} />
        <Drawer.Screen name="CompanyRegis" component={CompanyRegis} />
        <Drawer.Screen name="CompaniesRecords" component={CompaniesRecords} />
        <Drawer.Screen name="StudentsRecords" component={StudentsRecords} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;   