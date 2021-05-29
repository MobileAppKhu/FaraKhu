import React from 'react';
import MainPage from './loginPage/MainPage';
import LogIn from './loginPage/LoginPage';
import FirstSignUpPage from './loginPage/FirstSignUpPage';
import SecondSignUp from './loginPage/SecondSignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ForgetPasswordPage from './loginPage/ForgetPasswordPage';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="FirstSignUp" component={FirstSignUpPage} />
        <Stack.Screen name="SecondSignUp" component={SecondSignUp} />
        <Stack.Screen
          name="ForgetPasswordPage"
          component={ForgetPasswordPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
