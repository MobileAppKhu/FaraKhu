import React from 'react';
import MainPage from './loginPage/MainPage';
import LogInPage from './loginPage/LoginPage';
import FirstSignUpPage from './loginPage/FirstSignUpPage';
import SecondSignUpPage from './loginPage/SecondSignUpPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ForgetPasswordPage from './loginPage/ForgetPasswordPage';
import VerificationCodePage from './loginPage/VerificationCodePage';
import ChangePasswordPage from './loginPage/ChangePasswordPage';
import PasswordChangeSuccessfully from './loginPage/PasswordChangeSuccessfully';
import SignUpSuccessfully from './loginPage/SignUpSuccessfully';
import FirstLoadingPage from './loginPage/FirstLoadingPage';
import SecondLoadingPage from './loginPage/SecondLoadingPage';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="LogInPage" component={LogInPage} />
        <Stack.Screen name="LoadingPage" component={FirstLoadingPage} />
        <Stack.Screen
          name={'SecondLoadingPage'}
          component={SecondLoadingPage}
        />
        <Stack.Screen name="FirstSignUpPage" component={FirstSignUpPage} />
        <Stack.Screen name="SecondSignUpPage" component={SecondSignUpPage} />
        <Stack.Screen
          name="ForgetPasswordPage"
          component={ForgetPasswordPage}
        />
        <Stack.Screen
          name="VerificationCodePage"
          component={VerificationCodePage}
        />
        <Stack.Screen
          name={'ChangePasswordPage'}
          component={ChangePasswordPage}
        />
        <Stack.Screen
          name={'PasswordChangeSuccessfully'}
          component={PasswordChangeSuccessfully}
        />
        <Stack.Screen
          name={'SignUpSuccessfully'}
          component={SignUpSuccessfully}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
